<template>
  <div>


    <div id="wrap">
      <!-- NAVIGATION -->
      <nav class="navbar navbar-fixed-top navbar-slide">
        <div class="container">
          <a class="navbar-brand goto" href="#" style="margin-top-5px;"
            ><img src="/images/yops.png" alt="Your logo" width="120"
          /></a>
          <button
            class="round-toggle navbar-toggle menu-collapse-btn collapsed"
            data-toggle="collapse"
            data-target=".navMenuCollapse"
          >
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse navMenuCollapse">
            <ul class="nav">
              <li><a v-scroll-to="'#features'">Fonctionnalit&eacute;s</a></li>
              <li><a v-scroll-to="'#technology'">Notre page de paiement</a></li>
              <li><a v-scroll-to="'#benefits2'">Avantages</a></li>
              <li><a v-scroll-to="'#technology'">D&eacute;mos</a></li>
              <li><a v-scroll-to="'#tableau3'">Nos Solutions</a></li>

              <li><a href="#subscribe" target="_blank">Inscription</a></li>
              <li>
                <a href="https://app.yops.io" target="_blank" class="main-btn"
                  >Connexion <i class="icon-right icon-user"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- INTRO BLOCK -->
      <header
        id="intro"
        class="layout1 intro-block fixed-bg"
        style="background-image:url(images/intro-bg3.jpg)"
      >
        <!-- Modal HTML embedded directly into document -->

        <div class="bg-color1-overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="logo">
                  <img
                    class="logo-img"
                    src="/images/yops.png"
                    alt="Yops.io Logo"
                    width="220"
                  />
                  <span class="logo-name"></span>
                </div>
                <h1 class="slogan">Encaisser dans le monde entier</h1>
                <a
                  class="download-btn win-btn"
                  style="line-height:41px;"
                  href="https://app.yops.io"
                  ><i class="icon icon-user"></i><b>Connexion</b></a
                >
                <a class="btn btn-default btn-lg goto" v-scroll-to="'#features'"
                  >En savoir plus</a
                >
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div
                  class="intro-screen wow fadeInLeftBig"
                  data-wow-duration="1s"
                >
                  <img
                    src="/images/intro-screen.png"
                    width="400"
                    height="775"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- FEATURES BLOCK -->
      <section id="features">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <ul class="item-list-left item-list-alt">
                <li>
                  <i class="icon icon-mobile"></i>
                  <h3>Full Responsive</h3>
                  <p>
                    Nos pages de paiement ainsi que nos outils d'administration
                    s'adaptent &agrave; tous les &eacute;crans
                  </p>
                </li>
                <li>
                  <i class="icon icon-tools"></i>
                  <h3>Installation facile</h3>
                  <p>
                    Nos utilisateurs nous ont demand&eacute; de la
                    simplicit&eacute; et de la s&eacute;curit&eacute;. En
                    seulement quelques lignes, vous arriverez &agrave;
                    mon&eacute;tiser votre site.
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul class="item-list-left item-list-alt">
                <li>
                  <i class="icon icon-cloud"></i>
                  <h3>Simple &amp; &eacute;pur&eacute;</h3>
                  <p>
                    Une solution de paiement se doit d'&ecirc;tre efficace,
                    simple et claire pour vos utilisateurs.
                  </p>
                </li>
                <li>
                  <i class="icon icon-document"></i>
                  <h3>Support & conseil</h3>
                  <p>
                    Avec Yops, profitez d'un support de qualit&eacute;, et de
                    conseillers qui vous aideront chaque mois &agrave;
                    d&eacute;finir de nouveau objectif pour faire grandir votre
                    site. Nos Payment manager sauront vous aider &agrave;
                    r&eacute;aliser plus de ventes
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul class="item-list-left item-list-alt">
                <li>
                  <i class="icon icon-paintbrush"></i>
                  <h3>International</h3>
                  <p>
                    Yops, c'est plus de 185 pays et 400 solutions de paiement.
                    Enjoy !
                  </p>
                </li>
                <li>
                  <i class="icon icon-linegraph"></i>
                  <h3>Des paiements chaque semaine</h3>
                  <p>
                    Chez Yops, on aime la r&eacute;gularit&eacute;. 1 fois, 2
                    fois ou 4 fois par mois, vous recevrez vos paiements, pour
                    l'ensemble des pays que vous aurez mon&eacute;tis&eacute;.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- BENEFITS1 BLOCK -->
      <section id="technology">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="screen-couple-left">
                <img
                  class="screen above"
                  src="/images/screen-1.png"
                  alt=""
                  width="280"
                />
                <img
                  class="screen beyond wow fadeInLeft"
                  data-wow-duration="1.5s"
                  src="/images/screen-2.png"
                  alt=""
                  width="240"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <h2>Notre page de paiement</h2>
              <h4 class="sub-title">
                Nous avons voulu faire simple
              </h4>
              <p class="sep-bottom">
                Pourquoi afficher 400 solutions de paiement dans une pop-up de
                paiement ? Est-ce utile d'afficher 185 drapeaux alors que votre
                client est dans un seul pays ? Pourquoi afficher un grand encart
                sur votre page qui ne s'adapte pas &agrave; votre site alors
                qu'un simple bouton est suffisant ? Nous avons longuement
                r&eacute;fl&eacute;chi et nous vous proposons la Yops box, une
                page de paiement ultra-optimis&eacute;e, simple et lisible,
                accessible via un simple bouton. Faites donc un test !
              </p>
              <a class="btn btn-default btn-lg" @click="openExample()" rel="modal:open"
                >Payer avec Yops <i class="icon-right icon-user"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- BENEFITS2 BLOCK -->
      <section id="benefits2">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-push-6">
              <div class="screen-couple-right">
                <img class="above" src="/images/screen-2.png" alt="" />
                <img
                  class="beyond wow fadeInRight"
                  data-wow-duration="1.5s"
                  src="/images/screen-3.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-sm-6 col-sm-pull-6">
              <h2 class="title">Nos avantages</h2>

              <div class="panel">
                <a
                  class="panel-heading"
                  data-toggle="collapse"
                  href="#collapseOne"
                  ><i class="icon icon-layers"></i> 49 pays couverts, plus de
                  100 solutions de paiements</a
                >
                <div id="collapseOne" class="panel-collapse collapse in">
                  <div class="panel-body">
                    Nous avons choisi les solutions de paiement les plus
                    adapt&eacute;es pour chaque pays.
                  </div>
                </div>
              </div>
              <div class="panel">
                <a
                  class="panel-heading collapsed"
                  data-toggle="collapse"
                  href="#collapseTwo"
                  ><i class="icon icon-equalizer"></i> Un back office
                  performant</a
                >
                <div id="collapseTwo" class="panel-collapse collapse">
                  <div class="panel-body">
                    Retrouvez l'ensemble de vos statistiques en temps
                    r&eacute;el &agrave; chaque moment de la journ&eacute;e, sur
                    n'importe quel support
                  </div>
                </div>
              </div>
              <div class="panel">
                <a
                  class="panel-heading collapsed"
                  data-toggle="collapse"
                  href="#collapseThree"
                  ><i class="icon icon-bar-chart"></i> Optimisation de la
                  transformation</a
                >
                <div id="collapseThree" class="panel-collapse collapse">
                  <div class="panel-body">
                    Yops teste en temps r&eacute;el votre transformation, pour
                    afficher la solution qui transforme le mieux.
                  </div>
                </div>
              </div>
              <div class="panel">
                <a
                  class="panel-heading collapsed"
                  data-toggle="collapse"
                  href="#collapseFour"
                  ><i class="icon icon-bar-chart"></i> Une Page de paiement
                  intelligente</a
                >
                <div id="collapseFour" class="panel-collapse collapse">
                  <div class="panel-body">
                    La YopsBox se souvient des moyens de paiement
                    privil&eacute;gi&eacute;s de vos utilisateurs, optimise
                    l'affichage des solutions de paiement, et bien plus encore.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="tableau3"></a>
      </section>

      <!-- TAB BLOCK -->
      <section class="tab-block">
        <h2 class="hidden">Tab block</h2>
        <nav>
          <ul class="container">
            <li class="active">
              <a href="#tab1" data-toggle="tab">Liste de nos solutions</a>
            </li>
            <li style="background:#00DFFC;color:white;">
              <a href="#tab2" data-toggle="tab" id="rev">Reversements</a>
            </li>
          </ul>
        </nav>
        <div class="container">
          <div class="tab-content">
            <div class="row tab-pane  active in" id="tab1">
              <div>
                S&eacute;lectionnez un pays :
                <select id="py"> </select>
              </div>
              <div class="table-responsive">
                <div id="tableau"></div>
              </div>
            </div>
            <div class="row tab-pane in" id="tab2">
              <div>
                S&eacute;lectionnez un pays :
                <select id="py2"> </select>
              </div>
              <div class="table-responsive">
                <div id="tableau2"></div>
              </div>

              <div class="table-responsive">
                <div id="tableau3">
                  <h3>International</h3>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Billing solution</th>
                        <th>Price</th>
                        <th>Rentabiliweb</th>
                        <th>Hipay</th>
                        <th>Starpass</th>
                        <th>Monelib</th>
                        <th>Yops payout</th>
                        <th>Customer benefits</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FACTS BLOCK -->
      <section id="facts" class="facts-block bg-color3">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="fact">
                <i class="icon icon-download"></i>
                <h3 class="timer">182243</h3>
                <h4>Transactions</h4>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fact">
                <i class="icon icon-wallet2"></i>
                <h3 class="timer">238</h3>
                <h4>Sites</h4>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fact">
                <i class="icon icon-target2"></i>
                <h3 class="timer">73</h3>
                <h4>Clients heureux</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SUBSCRIBE BLOCK -->
      <section id="subscribe" class="text-center dark-bg bg-color1">
        <div class="container">
          <h2 class="title">On vous recontacte rapidement</h2>
          <form
            action="scripts/subscribe.php"
            method="post"
            id="subscribe_form"
          >
            <div class="input-group">
              <input
                class="form-control"
                onclick="callback('contact');"
                type="email"
                name="email"
                id="subscribe_email"
                placeholder="Contactez nous"
              />

              <div class="input-group-btn">
                <button
                  type="button"
                  href="javascript:callback('contact');"
                  id="subscribe_submit"
                  data-loading-text="&bull;&bull;&bull;"
                >
                  <i class="icon icon-paper-plane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <!-- FOOTER -->
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-md-push-7 text-right">
              <ul class="soc-list">
                <li>
                  <a href="https://twitter.com/@Yops_io" target="_blank"
                    ><i class="icon icon-twitter2"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pages/Yopsio/1441909992785220"
                    target="_blank"
                    ><i class="icon icon-facebook2"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="col-md-5 col-md-pull-5">
              &copy; 2021 Yops! -
              <a href="/mentions" target="_blank"
                >Mentions L&eacute;gales</a
              ><br />
            </div>
            <div class="col-md-2 col-md-pull-5 text-center">
              <a class="goto" v-scroll-to="'#intro'"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <!-- contact modal-->
    <div
      class="modal fade"
      id="modalContact"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
          <h3 class="modal-title">
            Laissez nous un message, nous vous recontacterons dans les meilleurs
            délais
          </h3>
          <form action="scripts/contact.php" role="form" id="contact_form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="contact_name"
                placeholder="Votre nom"
                name="name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="contact_email"
                placeholder="Votre adresse mail"
                name="email"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="3"
                placeholder="Votre message ou question"
                id="contact_message"
                name="message"
              ></textarea>
            </div>
            <div
              class="g-recaptcha"
              data-sitekey="6LfKHQ8TAAAAALmhjWhaTLNF8fCsuus7sZNsbzN2"
            ></div>
            <button
              type="submit"
              id="contact_submit"
              data-loading-text="&bull;&bull;&bull;"
              class="btn btn-lg btn-block btn-primary"
            >
              <i class="icon icon-envelope-open"></i>Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- MODALS END-->
    <div
      id="infos"
      style="-moz-border-radius: 10px; -webkit-border-radius: 10px;  border-radius: 10px; "
    ></div>


  </div>
</template>
<script>
export default {
  name: "home",
  methods : {
    openExample() {

      this.$swal({
        confirmButtonText: "OK",
        confirmButtonColor: "#C94330",

        html: '<iframe  src="https://app.yops.io/popup/?docId=557838c41f769b5e104eb0a9"  seamless   frameborder="0" width="300px"  height="400px" ></iframe>',
      }).then(function () {
       
      });

    }
  }
};
</script>
<style>
a {
  cursor:  pointer !important;
}

.swal2-container {
  zoom: 1.5;
}
</style>