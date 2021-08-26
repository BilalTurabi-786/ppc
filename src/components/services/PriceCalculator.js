import React from "react";

export default function PriceCalculator() {
  return (
    <>
      <div
        className="form-group scc_font_1 form_fields_style_1"
        style={{ padding: 15, border: 0 }}
      >
        <div className="scc-h2 scc_fonttitle_1">Price Calculator</div>
        <div className="scc_header_dash_1"></div>
        <div
          className="scc_font_1 "
          style={{ marginBottom: 20 }}
        >
          {" "}
        </div>

        <div
          style={{ border: 0 }}
          className="scc-form-field-item  form_field_item_style_1"
        >
          <label
            className="scc-col-md-4 scc-col-lg-4 scc_font_1 scc-form-field-item-label"
            for="selectbasic"
          />
          Select Subject
          <div
            className="control-label scc-col-md-8 scc-col-lg-8 scc_select_opt scc-form-field-item-control"
            style={{ padding: 0, margin: 0 }}
          >
            <div
              className="ddOutOfVision"
              id="selectbasic_0_0_0_1_msddHolder"
              style={{ height: 0, overflow: "hidden", position: "absolute" }}
            >
              <select
                id="selectbasic_0_0_0_1"
                name="selectbasic"
                data-dropdownmult="1"
                data-inputtype="dropdowninput"
                onChange="selectChange(1, this)"
                tabindex="-1"
              >
                <option
                  value=""
                  
                >
                  Choose an option...
                </option>
                <option value="14" data-description="">
                  Math Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Biology Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Economic Assignments{" "}
                </option>
                <option value="14" data-description="">
                  IT Assignments{" "}
                </option>
                <option value="14" data-description="">
                  English Assignments{" "}
                </option>
                <option value="14" data-description="">
                  History Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Geography Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Sociology Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Law Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Linguistic Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Business Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Business Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Physics Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Philosophy Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Accounting Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Statistics Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Computer science Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Marketing Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Management Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Programming Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Finance Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Engineering Assignments{" "}
                </option>
                <option value="14" data-description="">
                  Psychology Assignments{" "}
                </option>{" "}
              </select>
            </div>
            <div
              className="dd-scc ddcommon borderRadius"
              id="selectbasic_0_0_0_1_msdd"
              tabindex="0"
              style={{}}
            >
              <div className="ddTitle borderRadiusTp">
                <span className="divider"></span>
                <span className="ddArrow arrowoff"></span>
                <span
                  className="ddTitleText trn"
                  id="selectbasic_0_0_0_1_title"
                  data-trn-key="Choose an option..."
                >
                  <span className="ddlabel trn">Choose an option...</span>
                  <span className="description"> </span>
                </span>
              </div>
              <input
                id="selectbasic_0_0_0_1_titleText"
                type="text"
                autocomplete="off"
                className="text shadow borderRadius"
                style={{ display: "none" }}
              />
              <div
                className="ddChild ddchild_ border shadow"
                id="selectbasic_0_0_0_1_child"
                style={{
                  zIndex: 9998,
                  display: "none",
                  position: "absolute",
                  height: "auto",
                  overflow: "auto",
                }}
              >
                <ul>
                  <li className="enabled _msddli_ selected">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Choose an option..."
                    >
                      Choose an option...
                    </span>
                    <span className="description"> </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Math Assignments"
                    >
                      Math Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Biology Assignments"
                    >
                      Biology Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Economic Assignments"
                    >
                      Economic Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="IT Assignments">
                      IT Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="English Assignments"
                    >
                      English Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="History Assignments"
                    >
                      History Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Geography Assignments"
                    >
                      Geography Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Sociology Assignments"
                    >
                      Sociology Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Law Assignments"
                    >
                      Law Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Linguistic Assignments"
                    >
                      Linguistic Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Business Assignments"
                    >
                      Business Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Business Assignments"
                    >
                      Business Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Physics Assignments"
                    >
                      Physics Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Philosophy Assignments"
                    >
                      Philosophy Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Accounting Assignments"
                    >
                      Accounting Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Statistics Assignments"
                    >
                      Statistics Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Computer science Assignments"
                    >
                      Computer science Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Marketing Assignments"
                    >
                      Marketing Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Management Assignments"
                    >
                      Management Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Programming Assignments"
                    >
                      Programming Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Finance Assignments"
                    >
                      Finance Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Engineering Assignments"
                    >
                      Engineering Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Psychology Assignments"
                    >
                      Psychology Assignments
                    </span>
                    <div className="clear"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: "none" }}
            ></div>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div style={{ clear: "both" }}></div>

        {/* <script>
    
            jQuery(document).ready(function(e) {
                jQuery("#selectbasic_0_0_0_1").msDropdown({
                    roundedBorder: false
                })

            })
                                              
    </script>
                                                             */}

        <div
          style={{ border: 0 }}
          className="scc-form-field-item  form_field_item_style_1"
        >
          <label
            className="scc-col-md-4 scc-col-lg-4 scc_font_1 scc-form-field-item-label"
            for="selectbasic"
          >
            Select Pages
          </label>
          <div
            className="control-label scc-col-md-8 scc-col-lg-8 scc_select_opt scc-form-field-item-control"
            style={{ padding: 0, margin: 0 }}
          >
            <div
              className="ddOutOfVision"
              id="selectbasic_0_0_1_1_msddHolder"
              style={{ height: 0, overflow: "hidden", position: "absolute" }}
            >
              <select
                id="selectbasic_0_0_1_1"
                name="selectbasic"
                data-dropdownmult="1"
                data-inputtype="dropdowninput"
                className="makeItDropDown sccSel sccoptionval form-control itemCreated mandatory_no"
                onchange="selectChange(1, this)"
                tabindex="-1"
              >
                <option
                  value=""
                  data-description=" "
                  className="trn"
                  data-trn-key="Choose an option..."
                >
                  Choose an option...
                </option>
                <option value="0" data-description="">
                  1 Page{" "}
                </option>
                <option value="14" data-description="">
                  2 Pages{" "}
                </option>
                <option value="28" data-description="">
                  3 Pages{" "}
                </option>
                <option value="42" data-description="">
                  4 Pages{" "}
                </option>
                <option value="56" data-description="">
                  5 Pages{" "}
                </option>
                <option value="70" data-description="">
                  6 Pages{" "}
                </option>
                <option value="84" data-description="">
                  7 Pages{" "}
                </option>
                <option value="98" data-description="">
                  8 Pages{" "}
                </option>
                <option value="112" data-description="">
                  9 Pages{" "}
                </option>
                <option value="126" data-description="">
                  10 Pages{" "}
                </option>
                <option value="140" data-description="">
                  11 Pages{" "}
                </option>
                <option value="154" data-description="">
                  12 Pages{" "}
                </option>
                <option value="168" data-description="">
                  13 Pages Pages{" "}
                </option>
                <option value="182" data-description="">
                  14 Pages{" "}
                </option>
                <option value="196" data-description="">
                  15 Pages{" "}
                </option>
                <option value="220" data-description="">
                  16 Pages{" "}
                </option>
                <option value="234" data-description="">
                  17 Pages{" "}
                </option>
                <option value="248" data-description="">
                  18 Pages{" "}
                </option>
                <option value="262" data-description="">
                  19 Pages{" "}
                </option>
                <option value="276" data-description="">
                  20 Pages{" "}
                </option>{" "}
              </select>
            </div>
            <div
              className="dd-scc ddcommon borderRadius"
              id="selectbasic_0_0_1_1_msdd"
              tabindex="0"
              style={{}}
            >
              <div className="ddTitle borderRadiusTp">
                <span className="divider"></span>
                <span className="ddArrow arrowoff"></span>
                <span
                  className="ddTitleText trn"
                  id="selectbasic_0_0_1_1_title"
                  data-trn-key="Choose an option..."
                >
                  <span className="ddlabel trn">Choose an option...</span>
                  <span className="description"> </span>
                </span>
              </div>
              <input
                id="selectbasic_0_0_1_1_titleText"
                type="text"
                autocomplete="off"
                className="text shadow borderRadius"
                style={{ display: "none" }}
              />
              <div
                className="ddChild ddchild_ border shadow"
                id="selectbasic_0_0_1_1_child"
                style={{
                  zIndex: 9998,
                  display: "none",
                  position: "absolute",
                  height: "auto",
                  overflow: "auto",
                }}
              >
                <ul>
                  <li className="enabled _msddli_ selected">
                    <span
                      className="ddlabel trn"
                      data-trn-key="Choose an option..."
                    >
                      Choose an option...
                    </span>
                    <span className="description"> </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="1 Page">
                      1 Page
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="2 Pages">
                      2 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="3 Pages">
                      3 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="4 Pages">
                      4 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="5 Pages">
                      5 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="6 Pages">
                      6 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="7 Pages">
                      7 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="8 Pages">
                      8 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="9 Pages">
                      9 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="10 Pages">
                      10 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="11 Pages">
                      11 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="12 Pages">
                      12 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="13 Pages Pages">
                      13 Pages Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="14 Pages">
                      14 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="15 Pages">
                      15 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="16 Pages">
                      16 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="17 Pages">
                      17 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="18 Pages">
                      18 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="19 Pages">
                      19 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                  <li className="enabled _msddli_">
                    <span className="ddlabel trn" data-trn-key="20 Pages">
                      20 Pages
                    </span>
                    <div className="clear"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: "none" }}
            ></div>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div style={{ clear: "both" }}></div>
        {/* <script>
            jQuery(document).ready(function(e) {
                jQuery("#selectbasic_0_0_1_1").msDropdown({
                    roundedBorder: false
                })

            })
    </script> */}
        <hr
          style={{ margin: "15 0 15 0", border: 1, borderColor: "#F0F0F0" }}
        ></hr>
        <div className="row scc-btn-hndle" style={{ padding: 5 }}>
          <div className="scc-col-md-4 scc-col-lg-3 scc-col-xs-12">
            <div className="printTable">
              <a
                className="trigger"
                href="javascript:void(0)"
                onclick="SCCOpenPopUpEmail()"
                style={{ color: "white" }}
              >
                <span className="trn" data-trn-key="Email Quote">
                  Email Quote
                </span>
              </a>
            </div>
          </div>
          <div className="scc-col-md-4 scc-col-lg-3 scc-col-xs-12">
            <div className="printTable">
              <a
                className="trigger"
                href="javascript:void(0)"
                onclick="SCCPrintModal()"
                style={{ color: "white" }}
              >
                <span className="trn" data-trn-key="Detailed List">
                  Detailed List
                </span>
              </a>
            </div>
          </div>
          <div
            className="scc-col-md-4 scc-col-lg-3 scc-col-xs-12"
            id="coupon_button"
          >
            <div className="printTable">
              <a
                className="trigger"
                href="javascript:void(0)"
                onclick="addCouponCodeModal()"
                style={{ color: "white" }}
              >
                <span className="trn" data-trn-key="Coupon Code">
                  Coupon Code
                </span>
              </a>
            </div>
          </div>
          <div id="coupon_code_modal_container"></div>
          <div
            className="scc-col-md-12 scc-col-xs-12"
            id="coupon_info_container"
            style={{ display: "none", textAlign: "right" }}
          >
            <div id="coupon_info_message" style={{ color: "green" }}></div>
            <div id="coupon_info_discount_percentage"></div>
            <div id="coupon_info_discount_value"></div>
            <div id="coupon_info_spend_range"></div>
          </div>
          <div className="scc-col-md-3 scc-col-lg-4 scc-col-xs-4">
            <div style={{ display: "none" }}>
              <input
                type="button"
                value="Submit"
                id="scc_submit_1"
                className="submitPrices"
              />
            </div>
          </div>
        </div>
        <div className="row" style={{ height: 60, padding: "5 0 0 5" }}>
          <div
            className="scc-col-md-7 scc-col-lg-7 scc-col-xs-7"
            style={{ height: 100 }}
          >
            &nbsp;
          </div>
          <div
            className="scc-col-md-12 scc-col-lg-12 scc-col-xs-12"
            style={{ padding: 0 }}
          >
            <div className="totalPrice totalPrice_1">
              <div>
                <span
                  style={{}}
                  className="trn Total"
                  id="total_price_with_label"
                  data-trn-key="Total"
                >
                  Total
                </span>{" "}
                <span id="totalprice_prefix_currency_label">$</span>{" "}
                <span id="totalvalue">0</span> &nbsp;
                <span id="totalprice_sufix_currency_label"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
