/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/article_page.js":
/*!****************************************!*\
  !*** ./assets/scripts/article_page.js ***!
  \****************************************/
/***/ (() => {

// document.addEventListener("DOMContentLoaded", () => {
// 	const articleContent = document.querySelector(".article-content");

// 	if (articleContent) {
// 		for (let i = 0; i < articleContent.children.length; i++) {
// 			const p = articleContent.children[i];

// 			p.style.backgroundColor = "transparent";
// 			p.style.color = "#fff";
// 		}
// 	}
// });

/***/ }),

/***/ "./assets/scripts/infobar.js":
/*!***********************************!*\
  !*** ./assets/scripts/infobar.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var infobars = document.querySelectorAll(".infobar-component");
  if (infobars) {
    infobars.forEach(function (bar) {
      var closeButton = bar.querySelector(".infobar-dismiss");
      closeButton.addEventListener("click", function () {
        bar.classList.add("hidden");
      });
    });
  }
});

/***/ }),

/***/ "./assets/scripts/new_request_page.js":
/*!********************************************!*\
  !*** ./assets/scripts/new_request_page.js ***!
  \********************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var inquirySelect = document.getElementById("request_custom_fields_10519906052751");
  var warningText = document.getElementById("ingame-warning");
  var submitButton = document.querySelector('input[type="submit"]');
  if (inquirySelect) {
    inquirySelect.addEventListener("change", function () {
      if (inquirySelect.value === "inquiry_type_cc_in-game_inquiry_" || inquirySelect.value === "inquiry_type_cc_in-game_txn_") {
        submitButton.disabled = true;
        warningText.classList.remove("hidden");
      } else {
        submitButton.disabled = false;
        warningText.classList.add("hidden");
      }
    });
  }
});

/***/ }),

/***/ "./assets/scripts/requests_page.js":
/*!*****************************************!*\
  !*** ./assets/scripts/requests_page.js ***!
  \*****************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("query-search");
  var statusSelector = document.getElementById("status-selector");
  var queryParams = new URLSearchParams(window.location.search);
  var query = queryParams.get("query");
  var status = queryParams.get("status");
  if (query) {
    searchInput.value = query;
  }
  if (status) {
    statusSelector.value = status;
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infobar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infobar.js */ "./assets/scripts/infobar.js");
/* harmony import */ var _infobar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_infobar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _article_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article_page.js */ "./assets/scripts/article_page.js");
/* harmony import */ var _article_page_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_article_page_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requests_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests_page.js */ "./assets/scripts/requests_page.js");
/* harmony import */ var _requests_page_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_requests_page_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _new_request_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new_request_page.js */ "./assets/scripts/new_request_page.js");
/* harmony import */ var _new_request_page_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_new_request_page_js__WEBPACK_IMPORTED_MODULE_3__);




document.addEventListener("DOMContentLoaded", function () {
  var mobileDropdown = document.getElementById("mobile-dropdown");
  var mobileDropdownButton = document.getElementById("mobile-dropdown-button");
  var surveyModal = document.getElementById("survey-modal");
  var closeSurveyModalBtn = document.getElementById("close-survey-modal");
  var windowWidth = window.innerWidth;
  var expandMobileDropdown = false;
  if (surveyModal) {
    setTimeout(function () {
      surveyModal.classList.add("flex");
      surveyModal.classList.remove("hidden");
    }, 3000);
  }
  window.addEventListener("load", function () {
    if (window.location.hash) {
      var articleId = window.location.hash.split("#")[1];
      document.getElementById("accordion-".concat(articleId)).setAttribute("checked", "checked");
      document.getElementById(articleId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
  window.addEventListener("resize", function () {
    windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      if (expandMobileDropdown) {
        mobileDropdown.classList.remove("hidden");
        mobileDropdown.classList.add("flex");
      } else {
        mobileDropdown.classList.remove("flex");
        mobileDropdown.classList.add("hidden");
      }
    } else {
      mobileDropdown.classList.remove("flex");
      mobileDropdown.classList.add("hidden");
    }
  });
  var toggleMobileDropdown = function toggleMobileDropdown() {
    expandMobileDropdown = !expandMobileDropdown;
    if (windowWidth < 768) {
      if (expandMobileDropdown) {
        mobileDropdown.classList.remove("hidden");
        mobileDropdown.classList.add("flex");
      } else {
        mobileDropdown.classList.remove("flex");
        mobileDropdown.classList.add("hidden");
      }
    } else {
      mobileDropdown.classList.remove("flex");
      mobileDropdown.classList.add("hidden");
    }
  };
  mobileDropdownButton.addEventListener("click", function () {
    toggleMobileDropdown();
  });
  if (closeSurveyModalBtn) {
    closeSurveyModalBtn.addEventListener("click", function () {
      surveyModal.classList.add("hidden");
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map