const darkStyles = `
    body {
      background-color: #1c1c1c;
    }
    .container.headerContainer {
      background: rgb(34 34 34 / 80%);
      border: 1px solid rgb(45 45 45 / 50%);
    }
    .HeaderNav-module__link {
      color: #c3c3c3;
      background: rgb(255 255 255 / 5%);
      border-radius: 15px;
      padding: 10px 15px;
    }
    .HeaderNav-module__link:hover, .HeaderNav-module__link:focus {
      color: #ffffff;
      text-decoration: none;
      text-underline-position: under;
      background: rgb(255 255 255 / 10%);
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(90deg, rgb(34 34 34) 40%, transparent);
      border: 1px solid #2d2d2d;
      z-index: 2;
    }
    .hero-title, .hero-description, .hero-online, .cookie-banner__content, .start-playing-title, .preloader-text {
      color: #ffffff;
    }
    #total_counter {
      background: rgb(54 54 54);
      border: 1px solid #4e4e4e;
      color: #ffffff;
    }
    .servers-section {
      background-image: linear-gradient(88deg, #222222 30%, transparent 80%);
      border: 1px solid #2c2c2c;
      color: #ffffff;
    }
    .cookie-banner {
      background-color: rgb(40 40 40 / 74%);
      border: 2px solid #3c3c3c;
      color: #ffffff;
    }
    .start-playing-section {
      background: #222222;
      border: 1px solid #2c2c2c;
      color: #ffffff;
    }
    .start-playing-step {
      border: 2px solid #3a3a3a;
    }
    .start-playing-block {
      background: rgb(45 45 45);
      border: 1px solid #3f3f3f;
    }
    .start-monitoring-block {
      background: rgb(45 45 45);
      border: 1px solid #3a3a3a;
    }
    .servers-advantage {
      background: rgb(45 45 45);
      border: 1px solid rgb(63 63 63);
    }
    .preloader {
      background: #141414;
    }
    .theme-button {
      background: rgb(85 68 31);
      border: 1px solid rgb(130 104 50);
    }
    .switchericon {
      fill: rgb(255 209 110);
    }
	.donate-title {
	  color: #fff;
	}
	.DesktopCopyright-module__text {
  	  color: #fff !important;
	}
	.boxBody {
	 background: transparent;
     border: 1px solid transparent;
	}
	.Servers-module__server {
	 color: #adadad;
     background: rgb(45 45 45);
     border: 1px solid #3a3a3a;
	}
	.Servers-module__server.Servers-module__active, .Servers-module__server:hover, .Servers-module__server:focus {
	 border: 1px solid #ff7e9c;
	}
	.Product-module__wrapper {
     background: rgb(45 45 45);
     border: 2px solid #3a3a3a;
	}
	.Product-module__img {
     background: rgb(231 231 231 / 5%);
	}
	.Product-module__name {
	 color: #fff;
	}
	.Product-module__price {
     background-color: #272727;
     color: #ffffff;
	}
	.bubble-footer {
	 background: rgb(245 239 240 / 5%);
     border-top: 1px solid #343434;
	}
	.static {
     filter: none;
	}
	.mon_online_progress {
	 background-color: #393838;
	}
	.mon_title {
	 color: rgb(255 255 255);
	}
	.Toast-module__toast {
     background: #343434;
     border: 2px solid #4d4d4d;
     box-shadow: 0px 0px 20px 15px rgb(61 61 61 / 30%);
	}
	.Toast-module__message {
     color: #dfdfdf;
	}
	.ModalLayout-module__wrapper {
     background-color: rgb(30 30 30 / 80%);
	}
	.product_zone, .dropdown_product_zone {
     background: #2d2d2d;
     border: 2px solid #363636;
	}
	.boxHeader {
     background: transparent;
	}
	.ProductModal-module__header {
     color: #fff;
	}
	.productModalImg {
     background: rgb(255 255 255 / 5%);
	}
	.TotalSum-module__label, .ActionSelector-module__label, .ItemContent-module__label, .SelectContent-module__label, .ProductItemSelector-module__label {
     color: #fff;
	}
	.TotalSum-module__inputWrapper {
     background: #383838;
	}
	.TotalSum-module__currency {
     background: #414141;
     color: rgb(255 255 255 / 85%);
	}
	.TotalSum-module__input {
     color: #ffffff;
	}
	.dropDownCurrentItem, .Selector-module__dropDownCurrentItem {
     background-color: #383838;
	 color: #fff;
	}
	.dropDownCurrentItem:hover, .dropDownCurrentItem:focus, .Selector-module__dropDownCurrentItem:hover, .Selector-module__dropDownCurrentItem:focus {
     outline: 1px solid #444444;
	}
	.dropDownList, .Selector-module__dropDownList {
     background: #383838;
     border: 1px solid #424242;
	}
	.dropDownItem, .Selector-module__dropDownItem {
     background: rgb(61 61 61);
     color: rgb(255 255 255 / 85%);
	}
	.productModalGiveText {
     background: rgb(36 36 36);
     color: #bbbbbb;
	}
	.ProductItemSelector-module__item {
     border: 2px solid #4d4d4d;
     background: rgb(239 239 239 / 10%);
	}
	.PlayerBalance-module__modal {
     background: #303030;
     border: 2px solid #3b3b3b;
	}
	.PlayerBalanceModal-module__footer {
     background: #303030;
	}
	.PlayerBalanceModal-module__header {
     color: #fff;
	}
	.PlayerBalanceModal-module__label {
     color: #fff;
	}
	.PlayerBalanceModal-module__inputWrapper {
     background: rgb(255 255 255 / 5%);
	 border: 1px solid rgb(255 255 255 / 10%);
	}
	.PlayerBalanceModal-module__currency {
     background: #4f4f4f;
     color: rgb(190 190 190);
	}
	.PlayerBalanceModal-module__input {
     color: #ffffff;
	}
	.ProfileContent-module__body, .ProfileNav-module__header, .ProfileNav-module__body {
     background: rgb(34 34 34 / 80%) !important;
     border: 1px solid rgb(45 45 45 / 50%) !important;
     border-radius: 15px !important;
	}
	.boxFooter {
     background: transparent;
	}
	.ProfileContent-module__infoLine+.ProfileContent-module__infoLine {
     border-top: 1px solid #2b2b2b;
	}
	.ProfileNav-module__name {
     color: #ffffff;
     background: rgb(39 39 39);
	}
	.ProfileContent-module__title {
     color: #acacac;
	}
	.ProfileContent-module__infoLine span {
     color: #ffffff;
	}
	.ProfileContent-module__infoLineValue.ProfileContent-module__steamid {
     color: #ffffff;
	}
	.ProfileContent-module__input {
     background: #2f2f2f;
	}
	.ProfileNav-module__navItem {
     background: #242424;
     color: #959595;
	}
	.ProfileNav-module__navItem:hover, .ProfileNav-module__navItem:focus, .ProfileNav-module__navItem.ProfileNav-module__active {
     color: #ffffff;
     background: #2d2d2d;
	}
	.BasketSearch-module__input, .HistorySearch-module__input {
     background: #383838;
	 color: #fff;
	}
	.BasketSearch-module__wrapper, .HistorySearch-module__wrapper {
     border-radius: 10px;
     background: #383838;
	}
	.BasketSearch-module__input::placeholder, .HistorySearch-module__input::placeholder { 
	 color: #848484; 
	}
	.BasketTable-module__tableTitle, .HistoryTable-module__tableTitle {
     color: #aeaeae;
	}
	.BasketTable-module__tableLine {
     border: 1px solid #2b2b2b;
     background: #1e1e1e;
	}
	.BasketTable-module__value, .HistoryTable-module__value {
     color: #ffffff;
	}
	.BasketTable-module__tableLine:nth-child(2n-1) {
     border: 1px solid #2b2b2b;
     background: #1e1e1e;
	}
	.Pagination-module__navPageBtn, .Pagination-module__page {
     background: #1e1e1e;
	}
	.Pagination-module__navPageBtn:hover, .Pagination-module__navPageBtn:focus {
     background: #282828;
	}
	.Pagination-module__page:hover, .Pagination-module__page.Pagination-module__active, .Pagination-module__page:focus {
     color: #b9b9b9;
	}
	.HistoryTable-module__tableLine {
     border: 1px solid #2b2b2b;
     background: #1e1e1e;
	}
	.HistoryTable-module__tableLine:nth-child(2n-1) {
     border: 1px solid #2b2b2b;
     background: #1e1e1e;
	}
	.BasketContent-module__modal {
     background: #292929;
     border: 2px solid #393939;
	}
	.BasketChangeServer-module__header {
     color: #fff;
	}
	.socials-section h2 {
     color: #ffffff;
	}
	.social-block {
     background: rgb(45 45 45);
     border: 1px solid #3a3a3a;
	}
	.discord-block-title, .telegram-block-title {
     color: #fff;
	}
	.page-title {
     color: #fff;
	}
	.page-description {
	 color: #fff;
	 border: 1px solid #373737;
	}
	.page-block {
     background: #222222;
	}
	.MobileCopyright-module__text {
     color: #fff;
	}
	.PlayerMenuMobile-module__line {
    width: 80%;
    height: 3px;
    border-radius: 10px;
    background-color: #ffffff;
    }
	.PlayerMenuMobile-module__menu {
     background: #252525;
	}
	.PlayerMenuMobile-module__header {
     color: #fff;
	}
	.CrosseCloseBtn-module__line {
     background-color: #ffffff;
	}
	.PlayerMenuMobile-module__profileLink, .PlayerMenuMobile-module__loginLink {
     background-color: #323232;
     border: 1px solid #3f3f3f;
     color: #fff;
    }
	.Button-module__gray {
     background-color: #202020 !important;
	}
    .BasketContent-module__wrapper, .HistoryContent-module__wrapper {
     background: rgb(34 34 34 / 80%);
     border: 1px solid rgb(45 45 45 / 50%);
    }
    #donate {
     background: #222222;
     border: 1px solid #2c2c2c;
    }
    .productModalDescription {
     background: #2d2d2d;
     border: 2px solid #363636;
    }
    .Product-Egg {
     background: #242424;
     border: 1px solid #3d3d3d;
    }
    .Product-Egg-icon {
     background: #323232;
    }
    .Product-Egg-title {
     color: #ffffff;
    }
    .Product-Egg-desc {
     color: #ffffff;
    }
  `;
