"use client";

import "../../public/css/theme-default.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/owl.carousel.min.css";
import "../../public/css/nivo-slider.css";
import "../../public/css/animate.css";
import "../../public/css/animated-text.css";
import "../../public/fonts/font-awesome/css/font-awesome.min.css";
import "../../public/css/flaticon.css";
import "../../public/css/meanmenu.min.css";
import "../../public/css/style.css";
import "../../public/css/owl.transitions.css";
import "../../public/venobox/venobox.css";
import "../../public/css/responsive.css";
import "../../public/css/widget.css";
import "../../public/css/external.css";
import "../../public/css/main.css";
import "../../public/css/bootstrap-icons.min.css";
import "../../public/boxicons/css/boxicons.min.css";
import "../../public/remixicon/remixicon.css";
import header from "./_Common/_Header/Header";
// import "./globals.css";
import footer from "./_Common/_Footer/Footer";
import Script from "next/script";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./_Common/_Header/Header";
import { DNA } from "react-loader-spinner";
import FloatingWp from "./_Common/FloatingWp/FloatingWp";
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { DefaultSeo } from "next-seo";
// import SEO from "../../next-seo.config";

// export const metadata: Metadata = {
//   title: "ManuscriptEdit",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const url = 'https://salesiq.zoho.com/widget';
    const widgetCode = '48b75dd3dada5e99bd73a91fe334bbb18644220ee9201f866679581b19cc5384';
    const script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("id", "scriptid");
    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`
    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);
  }, [])
  return (
    <html lang="en">
      {/* <DefaultSeo {...SEO}/> */}
      <head>
        <title>
          Manuscriptedit - Expert Scientific Journal Publication Services
        </title>
        <link href="/img/manu.ico" rel="icon"></link>
        <meta name="google-site-verification" content="70JSDkkRBc9H-NNFHJMmgPVrZCV_JUqnDogS_tZnHD8" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/vendor/jquery-3.2.1.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/bootstrap.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/owl.carousel.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/jquery.counterup.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/waypoints.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/wow.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/imagesloaded.pkgd.min.js" />
        {/* <Script type='text/javascript' src="/venobox/venobox.js"/> */}
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/ajax-mail.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/testimonial.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/animated-text.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/venobox/venobox.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/isotope.pkgd.min.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/jquery.nivo.slider.pack.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/jquery.meanmenu.js" />
        <Script type="text/javascript" strategy="beforeInteractive" src="/js/jquery.scrollUp.js" />
        <Script type="text/javascript" src="/js/theme.js" />
        <Script type="text/javascript" src="/js/clarity.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/addRoll.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/facebookPixelCodeOne.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/facebookPixelCodeTwo.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/GtagManager.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/fbevents.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/footerLinkedin.js" strategy="lazyOnload" />
        <Script type="text/javascript" src="/js/footerLinkedinWindow.js" strategy="lazyOnload" />
        <noscript><img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1557346005163372&ev=PageView&noscript=1"
        /></noscript>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16677438282" />
        <Script src="/js/gtagNew.js" strategy="lazyOnload" />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=576246542585612&ev=PageView&noscript=1" />
        </noscript>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=282044725992719&ev=PageView&noscript=1" />
        </noscript>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC86N23" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC86N23"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </head>
      <body className="loaded">




        <ToastContainer />
        {/* <header/> */}
        {/* {header()} */}
        <Header />
        <Suspense fallback={<p style={{ width: "100%", display: 'flex', justifyContent: "center" }}><DNA /></p>}>{children}</Suspense>
        <FloatingWp />

        {footer()}
        <noscript>
          <img height="1" width="1" style={{"display":"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=74803&fmt=gif" />
        </noscript>
      </body>
    </html>
  );
}