import React from "react";

export default function CopyRights() {

  
  return (
    <>
      <footer className="footer-section">
        {/* <!--footer copyright start--> */}
        
        <div className="absolute-footer light dark-bg text-center"style={{backgroundColor:'#cccfce'}}>
          <div className="container clearfix">
            <div className="footer-primary">
              <div className="copyright-footer">
                <span className="f-link"  >
                <br></br>
                  <a style={{textDecoration:'none'}} href="">Refund Policy</a>|
                  <a style={{textDecoration:'none'}} href="">Cancellation Policy</a>|
                  <a style={{textDecoration:'none'}} href="">Terms &amp; Conditions</a>|
                  <a style={{textDecoration:'none'}} href="">Privacy Policy</a>|
                  <a style={{textDecoration:'none'}} href="">FAQ</a>|
                  <a style={{textDecoration:'none'}} href="" rel="">
                    Contact us
                  </a>
                  | <a style={{textDecoration:'none'}} href="">Refer a Friend</a>|
                  <a style={{textDecoration:'none'}} href="">Top Writers</a>|
                  <a style={{textDecoration:'none'}} href="">Usage policy</a>
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <div className="absolute-footer light medium-text-center text-center">
            <div className="container clearfix">
              <div className="footer-primary">
                <div className="copyright-footer">
                  <bold>Copyright 2021 © <strong>The Assignment Writing.</strong> All
                  rights Reserved </bold>
                </div>
                <br></br>
              </div>
            </div>
          </div>

          <a
            href="#top"
            className="back-to-top button invert plain is-outline hide-for-medium icon circle fixed bottom z-1 active"
            id="top-link"
          >
            <i className="icon-angle-up"></i>
          </a>
        </div>
        {/* <!--footer copyright end--> */}
      </footer>
    </>
  );
}
