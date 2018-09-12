'use strict';

const e = React.createElement;

class SubPageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  module.exports = function(props) {
    return (
      <header class="header-sticky header-light">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="../../index.html">
              <h4>St. Pete Fire Rescue</h4>
              <!-- <img class="navbar-logo navbar-logo-light" src="../../assets/images/demo/logo/logo-light.svg" alt="Logo">
              <img class="navbar-logo navbar-logo-dark" src="../../assets/images/demo/logo/logo-dark.svg" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="burger"><span></span></span></button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav align-items-center mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About Us
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../../html/staff.html">
                      <span>Staff</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item top-third dropdown-toggle" href="../../html/operations.html">
                      <span>Operations</span>
                    </a>
                    <div class="dropdown-third">
                      <a class="dropdown-item" href="../../html/apparatus.html">
                        <span>Apparatus</span>
                      </a>
                      <a class="dropdown-item" href="../../html/deployment.html">
                        <span>Deployment</span>
                      </a>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="../../html/faqs.html">
                      <span>FAQs</span>
                    </a>
                  <div class="dropdown-divider"></div>
                    <a class="dropdown-item top-third dropdown-toggle" href="../../html/administration.html">
                      <span>Administration</span>
                    </a>
                    <div class="dropdown-third">
                      <a class="dropdown-item" href="../../html/iso_accr_stratplan.html">
                        <span>ISO, Accredidation, Strategic Plan</span>
                      </a>
                      <a class="dropdown-item" href="../../html/dept_stats.html">
                        <span>Department Stats</span>
                      </a>
                      <a class="dropdown-item" href="../../html/financial_services.html">
                        <span>Financial Services</span>
                      </a>
                    </div>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/feedback.html">
                    <span>Feedback</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/history.html">
                    <span>History</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/news.html">
                    <span>News</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/contact.html">
                    <span>Contact Us</span>
                  </a>
                </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Programs
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item top-third dropdown-toggle" href="../../html/prevention.html">
                      <span>Prevention</span>
                    </a>
                    <div class="dropdown-third">
                      <a class="dropdown-item" href="../../html/community_outreach.html">
                        <span>Community Outreach</span>
                      </a>
                      <a class="dropdown-item" href="../../html/services.html">
                        <span>Services</span>
                      </a>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item top-third dropdown-toggle" href="../../html/ems.html">
                      <span>EMS</span>
                    </a>
                    <div class="dropdown-third">
                      <a class="dropdown-item" href="../../html/telemedic.html">
                        <span>Telemedic Program</span>
                      </a>
                      <a class="dropdown-item" href="../../html/cpr_firstaid.html">
                        <span>CPR/First Aid Training</span>
                      </a>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="../../html/safety_training.html">
                      <span>Safety and Training</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="../../html/fire_suppression.html">
                      <span>Fire Suppression</span>
                    </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/emergency_management.html">
                    <span>Emergency Management</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../../html/specialty_teams.html">
                    <span>Specialty Teams</span>
                  </a>
                </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../html/stations.html" role="button">
                    Stations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../html/public.html" role="button">
                    Public
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../html/careers.html" role="button">
                    Careers
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav align-items-center mr-0">
                <li class="nav-item">
                  <a class="nav-link" href="../../index.html" role="button">
                    Members Only (template cheat link)
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section>
        <div class="image image-overlay" style="background-image:url(../../assets/images/demo/image-2.jpg)"></div>
        <div class="container pt-10">
          <div class="row">
            <div class="col text-white text-shadow">
              <h1>Our<b> Staff</b></h1>
              <p class="lead">
                <strike>We nurtured the passion for details, which most of the time make the difference.</strike>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
