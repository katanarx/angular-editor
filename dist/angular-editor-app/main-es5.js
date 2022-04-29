(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!*******************************************************!*\
      !*** multi ./projects/angular-editor-app/src/main.ts ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/samjay-zbook/Work/terlumina/angular-editor/projects/angular-editor-app/src/main.ts */
      "IyRi");
      /***/
    },

    /***/
    "0ZoQ":
    /*!**************************************************!*\
      !*** ./projects/angular-editor/src/lib/utils.ts ***!
      \**************************************************/

    /*! exports provided: isDefined */

    /***/
    function ZoQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return isDefined;
      });

      function isDefined(value) {
        return value !== undefined && value !== null;
      }
      /***/

    },

    /***/
    "7q4J":
    /*!*****************************************************************************!*\
      !*** ./projects/angular-editor/src/lib/angular-editor-toolbar.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: AngularEditorToolbarComponent */

    /***/
    function q4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function () {
        return AngularEditorToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _eastdesire_jscolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @eastdesire/jscolor */
      "iB1j");
      /* harmony import */


      var _eastdesire_jscolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eastdesire_jscolor__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./angular-editor.service */
      "k6Zp");
      /* harmony import */


      var _ae_select_ae_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ae-select/ae-select.component */
      "977L");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["fileInput"];
      var _c1 = ["fgInput"];

      function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ae-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.customClassId = $event;
          })("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.setCustomClass(ctx_r7.customClassId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.customClassList)("ngModel", ctx_r3.customClassId)("disabled", ctx_r3.htmlMode)("hidden", ctx_r3.isButtonHidden("customClasses"));
        }
      }

      function AngularEditorToolbarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.triggerCommand("undo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.triggerCommand("redo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.triggerCommand("bold");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.triggerCommand("italic");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.triggerCommand("underline");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.triggerCommand("strikeThrough");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.triggerCommand("subscript");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.triggerCommand("superscript");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.triggerCommand("justifyLeft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.triggerCommand("justifyCenter");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.triggerCommand("justifyRight");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.triggerCommand("justifyFull");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.triggerCommand("indent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.triggerCommand("outdent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.triggerCommand("insertUnorderedList");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.triggerCommand("insertOrderedList");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ae-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.block = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.triggerCommand(ctx_r26.block);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ae-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.fontName = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.setFontName(ctx_r28.fontName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ae-select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.fontSize = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.setFontSize(ctx_r30.fontSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r31.focus();
            return ctx_r31.showColorPicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.insertColor(_r2.value, "backgroundColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r33.focus();
            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.insertUrl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.triggerCommand("unlink");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 52, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r37.focus();
            return _r4.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.insertVideo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.triggerCommand("insertHorizontalRule");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.triggerCommand("removeFormat");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.triggerCommand("toggleEditorMode");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("undo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("redo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bold-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("bold"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "italic-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("italic"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "underline-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("underline"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "strikeThrough-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("strikeThrough"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "subscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("subscript"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "superscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("superscript"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyLeft-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyLeft"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyCenter-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyCenter"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyRight-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyRight"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyFull-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyFull"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "indent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("indent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "outdent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("outdent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertUnorderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertUnorderedList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertOrderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertOrderedList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.headings)("ngModel", ctx_r0.block)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("heading"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.fonts)("ngModel", ctx_r0.fontName)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.fontSizes)("ngModel", ctx_r0.fontSize)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontSize"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "foregroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("textColor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "backgroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("backgroundColor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._customClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "link-" + ctx_r0.id)("disabled", ctx_r0.isLinkButtonDisabled)("hidden", ctx_r0.isButtonHidden("link"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "unlink-" + ctx_r0.id)("disabled", ctx_r0.htmlMode || !ctx_r0.linkSelected)("hidden", ctx_r0.isButtonHidden("unlink"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertImage-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertImage"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertVideo-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertVideo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertHorizontalRule-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertHorizontalRule"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "clearFormatting-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("removeFormat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "toggleEditorMode-" + ctx_r0.id)("hidden", ctx_r0.isButtonHidden("toggleEditorMode"));
        }
      }

      ;

      var AngularEditorToolbarComponent = /*@__PURE__*/function () {
        var AngularEditorToolbarComponent = /*#__PURE__*/function () {
          function AngularEditorToolbarComponent(r, editorService, er, doc) {
            _classCallCheck(this, AngularEditorToolbarComponent);

            this.r = r;
            this.editorService = editorService;
            this.er = er;
            this.doc = doc;
            this.htmlMode = false;
            this.linkSelected = false;
            this.block = 'default';
            this.fontName = 'Times New Roman';
            this.fontSize = '3';
            this.headings = [{
              label: 'Heading 1',
              value: 'h1'
            }, {
              label: 'Heading 2',
              value: 'h2'
            }, {
              label: 'Heading 3',
              value: 'h3'
            }, {
              label: 'Heading 4',
              value: 'h4'
            }, {
              label: 'Heading 5',
              value: 'h5'
            }, {
              label: 'Heading 6',
              value: 'h6'
            }, {
              label: 'Heading 7',
              value: 'h7'
            }, {
              label: 'Paragraph',
              value: 'p'
            }, {
              label: 'Predefined',
              value: 'pre'
            }, {
              label: 'Standard',
              value: 'div'
            }, {
              label: 'default',
              value: 'default'
            }];
            this.fontSizes = [{
              label: '1',
              value: '1'
            }, {
              label: '2',
              value: '2'
            }, {
              label: '3',
              value: '3'
            }, {
              label: '4',
              value: '4'
            }, {
              label: '5',
              value: '5'
            }, {
              label: '6',
              value: '6'
            }, {
              label: '7',
              value: '7'
            }];
            this.customClassId = '-1';
            this.customClassList = [{
              label: '',
              value: ''
            }]; // uploadUrl: string;

            this.tagMap = {
              BLOCKQUOTE: 'indent',
              A: 'link'
            };
            this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
            this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
            this.fonts = [{
              label: '',
              value: ''
            }];
            this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }

          _createClass(AngularEditorToolbarComponent, [{
            key: "customClasses",
            set: function set(classes) {
              if (classes) {
                this._customClasses = classes;
                this.customClassList = this._customClasses.map(function (x, i) {
                  return {
                    label: x.name,
                    value: i.toString()
                  };
                });
                this.customClassList.unshift({
                  label: 'Clear Class',
                  value: '-1'
                });
              }
            }
          }, {
            key: "defaultFontName",
            set: function set(value) {
              if (value) {
                this.fontName = value;
              }
            }
          }, {
            key: "defaultFontSize",
            set: function set(value) {
              if (value) {
                this.fontSize = value;
              }
            }
          }, {
            key: "isLinkButtonDisabled",
            get: function get() {
              return this.htmlMode || !Boolean(this.editorService.selectedText);
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              //jscolor.init();
              //debugger;
              this.colorPicker = new _eastdesire_jscolor__WEBPACK_IMPORTED_MODULE_2__(this.fgInput.nativeElement, {
                container: this.er.nativeElement,
                closeButton: true,
                format: 'hex',
                height: 80,
                onChange: this.updateFgColor.bind(this),
                onUpdate: this.updateFgColor.bind(this),
                palette: '#fff #808080 #000 #996e36 #f55525 #ffe438 #88dd20 #22e0cd #269aff #bb1cd4',
                paletteCols: 11,
                position: 'bottom'
              });
            }
            /**
             * Trigger command from editor header buttons
             * @param command string from toolbar buttons
             */

          }, {
            key: "triggerCommand",
            value: function triggerCommand(command) {
              this.execute.emit(command);
            }
            /**
             * highlight editor buttons when cursor moved or positioning
             */

          }, {
            key: "triggerButtons",
            value: function triggerButtons() {
              var _this = this;

              if (!this.showToolbar) {
                return;
              }

              this.buttons.forEach(function (e) {
                var result = _this.doc.queryCommandState(e);

                var elementById = _this.doc.getElementById(e + '-' + _this.id);

                if (result) {
                  _this.r.addClass(elementById, 'active');
                } else {
                  _this.r.removeClass(elementById, 'active');
                }
              });
            }
            /**
             * trigger highlight editor buttons when cursor moved or positioning in block
             */

          }, {
            key: "triggerBlocks",
            value: function triggerBlocks(nodes) {
              var _this2 = this;

              if (!this.showToolbar) {
                return;
              }

              this.linkSelected = nodes.findIndex(function (x) {
                return x.nodeName === 'A';
              }) > -1;
              var found = false;
              this.select.forEach(function (y) {
                var node = nodes.find(function (x) {
                  return x.nodeName === y;
                });

                if (node !== undefined && y === node.nodeName) {
                  if (found === false) {
                    _this2.block = node.nodeName.toLowerCase();
                    found = true;
                  }
                } else if (found === false) {
                  _this2.block = 'default';
                }
              });
              found = false;

              if (this._customClasses) {
                this._customClasses.forEach(function (y, index) {
                  var node = nodes.find(function (x) {
                    if (x instanceof Element) {
                      return x.className === y["class"];
                    }
                  });

                  if (node !== undefined) {
                    if (found === false) {
                      _this2.customClassId = index.toString();
                      found = true;
                    }
                  } else if (found === false) {
                    _this2.customClassId = '-1';
                  }
                });
              }

              Object.keys(this.tagMap).map(function (e) {
                var elementById = _this2.doc.getElementById(_this2.tagMap[e] + '-' + _this2.id);

                var node = nodes.find(function (x) {
                  return x.nodeName === e;
                });

                if (node !== undefined && e === node.nodeName) {
                  _this2.r.addClass(elementById, 'active');
                } else {
                  _this2.r.removeClass(elementById, 'active');
                }
              });
              this.foreColour = this.doc.queryCommandValue('ForeColor');
              this.fontSize = this.doc.queryCommandValue('FontSize');
              this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
              this.backColor = this.doc.queryCommandValue('backColor');
            }
            /**
             * insert URL link
             */

          }, {
            key: "insertUrl",
            value: function insertUrl() {
              var url = 'https:\/\/';
              var selection = this.editorService.savedSelection;

              if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
                var parent = selection.commonAncestorContainer.parentElement;

                if (parent.href !== '') {
                  url = parent.href;
                }
              }

              url = prompt('Insert URL link', url);

              if (url && url !== '' && url !== 'https://') {
                this.editorService.createLink(url);
              }
            }
            /**
             * insert Video link
             */

          }, {
            key: "insertVideo",
            value: function insertVideo() {
              this.execute.emit('');
              var url = prompt('Insert Video link', "https://");

              if (url && url !== '' && url !== "https://") {
                this.editorService.insertVideo(url);
              }
            }
            /** insert color */

          }, {
            key: "insertColor",
            value: function insertColor(color, where) {
              this.editorService.insertColor(color, where);
              this.execute.emit('');
            }
            /**
             * set font Name/family
             * @param foreColor string
             */

          }, {
            key: "setFontName",
            value: function setFontName(foreColor) {
              this.editorService.setFontName(foreColor);
              this.execute.emit('');
            }
            /**
             * set font Size
             * @param fontSize string
             */

          }, {
            key: "setFontSize",
            value: function setFontSize(fontSize) {
              this.editorService.setFontSize(fontSize);
              this.execute.emit('');
            }
            /**
             * toggle editor mode (WYSIWYG or SOURCE)
             * @param m boolean
             */

          }, {
            key: "setEditorMode",
            value: function setEditorMode(m) {
              var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);

              if (m) {
                this.r.addClass(toggleEditorModeButton, 'active');
              } else {
                this.r.removeClass(toggleEditorModeButton, 'active');
              }

              this.htmlMode = m;
            }
            /**
             * Upload image when file is selected.
             */

          }, {
            key: "onFileChanged",
            value: function onFileChanged(event) {
              var _this3 = this;

              var file = event.target.files[0];

              if (file.type.includes('image/')) {
                if (this.upload) {
                  this.upload(file).subscribe(function () {
                    return _this3.watchUploadImage;
                  });
                } else if (this.uploadUrl) {
                  this.editorService.uploadImage(file).subscribe(function () {
                    return _this3.watchUploadImage;
                  });
                } else {
                  var reader = new FileReader();

                  reader.onload = function (e) {
                    var fr = e.currentTarget;

                    _this3.editorService.insertImage(fr.result.toString());
                  };

                  reader.readAsDataURL(file);
                }
              }
            }
          }, {
            key: "watchUploadImage",
            value: function watchUploadImage(response, event) {
              var imageUrl = response.body.imageUrl;
              this.editorService.insertImage(imageUrl);
              event.srcElement.value = null;
            }
            /**
             * Set custom class
             */

          }, {
            key: "setCustomClass",
            value: function setCustomClass(classId) {
              if (classId === '-1') {
                this.execute.emit('clear');
              } else {
                this.editorService.createCustomClass(this._customClasses[+classId]);
              }
            }
          }, {
            key: "isButtonHidden",
            value: function isButtonHidden(name) {
              if (!name) {
                return false;
              }

              if (!(this.hiddenButtons instanceof Array)) {
                return false;
              }

              var result;

              var _iterator = _createForOfIteratorHelper(this.hiddenButtons),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var arr = _step.value;

                  if (arr instanceof Array) {
                    result = arr.find(function (item) {
                      return item === name;
                    });
                  }

                  if (result) {
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return result !== undefined;
            }
          }, {
            key: "focus",
            value: function focus() {
              this.execute.emit('focus');
              console.log('focused');
            }
          }, {
            key: "updateFgColor",
            value: function updateFgColor() {
              this.insertColor(this.fgInput.nativeElement.value, 'textColor');
            }
          }, {
            key: "showColorPicker",
            value: function showColorPicker() {
              this.colorPicker.show();
            }
          }]);

          return AngularEditorToolbarComponent;
        }();

        AngularEditorToolbarComponent.ɵfac = function AngularEditorToolbarComponent_Factory(t) {
          return new (t || AngularEditorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_editor_service__WEBPACK_IMPORTED_MODULE_3__["AngularEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        AngularEditorToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AngularEditorToolbarComponent,
          selectors: [["angular-editor-toolbar"]],
          viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputFile = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fgInput = _t.first);
            }
          },
          inputs: {
            id: "id",
            uploadUrl: "uploadUrl",
            upload: "upload",
            showToolbar: "showToolbar",
            fonts: "fonts",
            customClasses: "customClasses",
            defaultFontName: "defaultFontName",
            defaultFontSize: "defaultFontSize",
            hiddenButtons: "hiddenButtons"
          },
          outputs: {
            execute: "execute"
          },
          decls: 1,
          vars: 1,
          consts: [["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font-size", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], [2, "display", "none"], ["fgInput", ""], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["type", "color", 2, "display", "none", 3, "change"], ["bgInput", ""], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "hidden", "click"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"]],
          template: function AngularEditorToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AngularEditorToolbarComponent_div_0_Template, 75, 83, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToolbar);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ae_select_ae_select_component__WEBPACK_IMPORTED_MODULE_4__["AeSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
          styles: ["@charset \"UTF-8\";\n\n\n@font-face {\n  font-family: \"FontAwesome\";\n  src: url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0\");\n  src: url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fa-lg[_ngcontent-%COMP%] {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-3x[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.fa-4x[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n.fa-5x[_ngcontent-%COMP%] {\n  font-size: 5em;\n}\n.fa-fw[_ngcontent-%COMP%] {\n  width: 1.2857142857em;\n  text-align: center;\n}\n.fa-ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 2.1428571429em;\n  list-style-type: none;\n}\n.fa-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fa-li[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2.1428571429em;\n  width: 2.1428571429em;\n  top: 0.1428571429em;\n  text-align: center;\n}\n.fa-li.fa-lg[_ngcontent-%COMP%] {\n  left: -1.8571428571em;\n}\n.fa-border[_ngcontent-%COMP%] {\n  padding: 0.2em 0.25em 0.15em;\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n}\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.fa.fa-pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa.pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n.fa-spin[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%] {\n  filter: none;\n}\n.fa-stack[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n.fa-stack-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-inverse[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fa-glass[_ngcontent-%COMP%]:before {\n  content: \"\uF000\";\n}\n.fa-music[_ngcontent-%COMP%]:before {\n  content: \"\uF001\";\n}\n.fa-search[_ngcontent-%COMP%]:before {\n  content: \"\uF002\";\n}\n.fa-envelope-o[_ngcontent-%COMP%]:before {\n  content: \"\uF003\";\n}\n.fa-heart[_ngcontent-%COMP%]:before {\n  content: \"\uF004\";\n}\n.fa-star[_ngcontent-%COMP%]:before {\n  content: \"\uF005\";\n}\n.fa-star-o[_ngcontent-%COMP%]:before {\n  content: \"\uF006\";\n}\n.fa-user[_ngcontent-%COMP%]:before {\n  content: \"\uF007\";\n}\n.fa-film[_ngcontent-%COMP%]:before {\n  content: \"\uF008\";\n}\n.fa-th-large[_ngcontent-%COMP%]:before {\n  content: \"\uF009\";\n}\n.fa-th[_ngcontent-%COMP%]:before {\n  content: \"\uF00A\";\n}\n.fa-th-list[_ngcontent-%COMP%]:before {\n  content: \"\uF00B\";\n}\n.fa-check[_ngcontent-%COMP%]:before {\n  content: \"\uF00C\";\n}\n.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before {\n  content: \"\uF00D\";\n}\n.fa-search-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF00E\";\n}\n.fa-search-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF010\";\n}\n.fa-power-off[_ngcontent-%COMP%]:before {\n  content: \"\uF011\";\n}\n.fa-signal[_ngcontent-%COMP%]:before {\n  content: \"\uF012\";\n}\n.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before {\n  content: \"\uF013\";\n}\n.fa-trash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF014\";\n}\n.fa-home[_ngcontent-%COMP%]:before {\n  content: \"\uF015\";\n}\n.fa-file-o[_ngcontent-%COMP%]:before {\n  content: \"\uF016\";\n}\n.fa-clock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF017\";\n}\n.fa-road[_ngcontent-%COMP%]:before {\n  content: \"\uF018\";\n}\n.fa-download[_ngcontent-%COMP%]:before {\n  content: \"\uF019\";\n}\n.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF01A\";\n}\n.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF01B\";\n}\n.fa-inbox[_ngcontent-%COMP%]:before {\n  content: \"\uF01C\";\n}\n.fa-play-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF01D\";\n}\n.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before {\n  content: \"\uF01E\";\n}\n.fa-refresh[_ngcontent-%COMP%]:before {\n  content: \"\uF021\";\n}\n.fa-list-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF022\";\n}\n.fa-lock[_ngcontent-%COMP%]:before {\n  content: \"\uF023\";\n}\n.fa-flag[_ngcontent-%COMP%]:before {\n  content: \"\uF024\";\n}\n.fa-headphones[_ngcontent-%COMP%]:before {\n  content: \"\uF025\";\n}\n.fa-volume-off[_ngcontent-%COMP%]:before {\n  content: \"\uF026\";\n}\n.fa-volume-down[_ngcontent-%COMP%]:before {\n  content: \"\uF027\";\n}\n.fa-volume-up[_ngcontent-%COMP%]:before {\n  content: \"\uF028\";\n}\n.fa-qrcode[_ngcontent-%COMP%]:before {\n  content: \"\uF029\";\n}\n.fa-barcode[_ngcontent-%COMP%]:before {\n  content: \"\uF02A\";\n}\n.fa-tag[_ngcontent-%COMP%]:before {\n  content: \"\uF02B\";\n}\n.fa-tags[_ngcontent-%COMP%]:before {\n  content: \"\uF02C\";\n}\n.fa-book[_ngcontent-%COMP%]:before {\n  content: \"\uF02D\";\n}\n.fa-bookmark[_ngcontent-%COMP%]:before {\n  content: \"\uF02E\";\n}\n.fa-print[_ngcontent-%COMP%]:before {\n  content: \"\uF02F\";\n}\n.fa-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF030\";\n}\n.fa-font[_ngcontent-%COMP%]:before {\n  content: \"\uF031\";\n}\n.fa-bold[_ngcontent-%COMP%]:before {\n  content: \"\uF032\";\n}\n.fa-italic[_ngcontent-%COMP%]:before {\n  content: \"\uF033\";\n}\n.fa-text-height[_ngcontent-%COMP%]:before {\n  content: \"\uF034\";\n}\n.fa-text-width[_ngcontent-%COMP%]:before {\n  content: \"\uF035\";\n}\n.fa-align-left[_ngcontent-%COMP%]:before {\n  content: \"\uF036\";\n}\n.fa-align-center[_ngcontent-%COMP%]:before {\n  content: \"\uF037\";\n}\n.fa-align-right[_ngcontent-%COMP%]:before {\n  content: \"\uF038\";\n}\n.fa-align-justify[_ngcontent-%COMP%]:before {\n  content: \"\uF039\";\n}\n.fa-list[_ngcontent-%COMP%]:before {\n  content: \"\uF03A\";\n}\n.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before {\n  content: \"\uF03B\";\n}\n.fa-indent[_ngcontent-%COMP%]:before {\n  content: \"\uF03C\";\n}\n.fa-video-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF03D\";\n}\n.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before {\n  content: \"\uF03E\";\n}\n.fa-pencil[_ngcontent-%COMP%]:before {\n  content: \"\uF040\";\n}\n.fa-map-marker[_ngcontent-%COMP%]:before {\n  content: \"\uF041\";\n}\n.fa-adjust[_ngcontent-%COMP%]:before {\n  content: \"\uF042\";\n}\n.fa-tint[_ngcontent-%COMP%]:before {\n  content: \"\uF043\";\n}\n.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF044\";\n}\n.fa-share-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF045\";\n}\n.fa-check-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF046\";\n}\n.fa-arrows[_ngcontent-%COMP%]:before {\n  content: \"\uF047\";\n}\n.fa-step-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF048\";\n}\n.fa-fast-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF049\";\n}\n.fa-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF04A\";\n}\n.fa-play[_ngcontent-%COMP%]:before {\n  content: \"\uF04B\";\n}\n.fa-pause[_ngcontent-%COMP%]:before {\n  content: \"\uF04C\";\n}\n.fa-stop[_ngcontent-%COMP%]:before {\n  content: \"\uF04D\";\n}\n.fa-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF04E\";\n}\n.fa-fast-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF050\";\n}\n.fa-step-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF051\";\n}\n.fa-eject[_ngcontent-%COMP%]:before {\n  content: \"\uF052\";\n}\n.fa-chevron-left[_ngcontent-%COMP%]:before {\n  content: \"\uF053\";\n}\n.fa-chevron-right[_ngcontent-%COMP%]:before {\n  content: \"\uF054\";\n}\n.fa-plus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF055\";\n}\n.fa-minus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF056\";\n}\n.fa-times-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF057\";\n}\n.fa-check-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF058\";\n}\n.fa-question-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF059\";\n}\n.fa-info-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF05A\";\n}\n.fa-crosshairs[_ngcontent-%COMP%]:before {\n  content: \"\uF05B\";\n}\n.fa-times-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05C\";\n}\n.fa-check-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05D\";\n}\n.fa-ban[_ngcontent-%COMP%]:before {\n  content: \"\uF05E\";\n}\n.fa-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF060\";\n}\n.fa-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF061\";\n}\n.fa-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF062\";\n}\n.fa-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF063\";\n}\n.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before {\n  content: \"\uF064\";\n}\n.fa-expand[_ngcontent-%COMP%]:before {\n  content: \"\uF065\";\n}\n.fa-compress[_ngcontent-%COMP%]:before {\n  content: \"\uF066\";\n}\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF067\";\n}\n.fa-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF068\";\n}\n.fa-asterisk[_ngcontent-%COMP%]:before {\n  content: \"\uF069\";\n}\n.fa-exclamation-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF06A\";\n}\n.fa-gift[_ngcontent-%COMP%]:before {\n  content: \"\uF06B\";\n}\n.fa-leaf[_ngcontent-%COMP%]:before {\n  content: \"\uF06C\";\n}\n.fa-fire[_ngcontent-%COMP%]:before {\n  content: \"\uF06D\";\n}\n.fa-eye[_ngcontent-%COMP%]:before {\n  content: \"\uF06E\";\n}\n.fa-eye-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF070\";\n}\n.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before {\n  content: \"\uF071\";\n}\n.fa-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF072\";\n}\n.fa-calendar[_ngcontent-%COMP%]:before {\n  content: \"\uF073\";\n}\n.fa-random[_ngcontent-%COMP%]:before {\n  content: \"\uF074\";\n}\n.fa-comment[_ngcontent-%COMP%]:before {\n  content: \"\uF075\";\n}\n.fa-magnet[_ngcontent-%COMP%]:before {\n  content: \"\uF076\";\n}\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  content: \"\uF077\";\n}\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\uF078\";\n}\n.fa-retweet[_ngcontent-%COMP%]:before {\n  content: \"\uF079\";\n}\n.fa-shopping-cart[_ngcontent-%COMP%]:before {\n  content: \"\uF07A\";\n}\n.fa-folder[_ngcontent-%COMP%]:before {\n  content: \"\uF07B\";\n}\n.fa-folder-open[_ngcontent-%COMP%]:before {\n  content: \"\uF07C\";\n}\n.fa-arrows-v[_ngcontent-%COMP%]:before {\n  content: \"\uF07D\";\n}\n.fa-arrows-h[_ngcontent-%COMP%]:before {\n  content: \"\uF07E\";\n}\n.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF080\";\n}\n.fa-twitter-square[_ngcontent-%COMP%]:before {\n  content: \"\uF081\";\n}\n.fa-facebook-square[_ngcontent-%COMP%]:before {\n  content: \"\uF082\";\n}\n.fa-camera-retro[_ngcontent-%COMP%]:before {\n  content: \"\uF083\";\n}\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\uF084\";\n}\n.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before {\n  content: \"\uF085\";\n}\n.fa-comments[_ngcontent-%COMP%]:before {\n  content: \"\uF086\";\n}\n.fa-thumbs-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF087\";\n}\n.fa-thumbs-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF088\";\n}\n.fa-star-half[_ngcontent-%COMP%]:before {\n  content: \"\uF089\";\n}\n.fa-heart-o[_ngcontent-%COMP%]:before {\n  content: \"\uF08A\";\n}\n.fa-sign-out[_ngcontent-%COMP%]:before {\n  content: \"\uF08B\";\n}\n.fa-linkedin-square[_ngcontent-%COMP%]:before {\n  content: \"\uF08C\";\n}\n.fa-thumb-tack[_ngcontent-%COMP%]:before {\n  content: \"\uF08D\";\n}\n.fa-external-link[_ngcontent-%COMP%]:before {\n  content: \"\uF08E\";\n}\n.fa-sign-in[_ngcontent-%COMP%]:before {\n  content: \"\uF090\";\n}\n.fa-trophy[_ngcontent-%COMP%]:before {\n  content: \"\uF091\";\n}\n.fa-github-square[_ngcontent-%COMP%]:before {\n  content: \"\uF092\";\n}\n.fa-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF093\";\n}\n.fa-lemon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF094\";\n}\n.fa-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF095\";\n}\n.fa-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF096\";\n}\n.fa-bookmark-o[_ngcontent-%COMP%]:before {\n  content: \"\uF097\";\n}\n.fa-phone-square[_ngcontent-%COMP%]:before {\n  content: \"\uF098\";\n}\n.fa-twitter[_ngcontent-%COMP%]:before {\n  content: \"\uF099\";\n}\n.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before {\n  content: \"\uF09A\";\n}\n.fa-github[_ngcontent-%COMP%]:before {\n  content: \"\uF09B\";\n}\n.fa-unlock[_ngcontent-%COMP%]:before {\n  content: \"\uF09C\";\n}\n.fa-credit-card[_ngcontent-%COMP%]:before {\n  content: \"\uF09D\";\n}\n.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before {\n  content: \"\uF09E\";\n}\n.fa-hdd-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A0\";\n}\n.fa-bullhorn[_ngcontent-%COMP%]:before {\n  content: \"\uF0A1\";\n}\n.fa-bell[_ngcontent-%COMP%]:before {\n  content: \"\uF0F3\";\n}\n.fa-certificate[_ngcontent-%COMP%]:before {\n  content: \"\uF0A3\";\n}\n.fa-hand-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A4\";\n}\n.fa-hand-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A5\";\n}\n.fa-hand-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0A6\";\n}\n.fa-hand-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0A7\";\n}\n.fa-arrow-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A8\";\n}\n.fa-arrow-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A9\";\n}\n.fa-arrow-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0AA\";\n}\n.fa-arrow-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0AB\";\n}\n.fa-globe[_ngcontent-%COMP%]:before {\n  content: \"\uF0AC\";\n}\n.fa-wrench[_ngcontent-%COMP%]:before {\n  content: \"\uF0AD\";\n}\n.fa-tasks[_ngcontent-%COMP%]:before {\n  content: \"\uF0AE\";\n}\n.fa-filter[_ngcontent-%COMP%]:before {\n  content: \"\uF0B0\";\n}\n.fa-briefcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0B1\";\n}\n.fa-arrows-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF0B2\";\n}\n.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before {\n  content: \"\uF0C0\";\n}\n.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before {\n  content: \"\uF0C1\";\n}\n.fa-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uF0C2\";\n}\n.fa-flask[_ngcontent-%COMP%]:before {\n  content: \"\uF0C3\";\n}\n.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before {\n  content: \"\uF0C4\";\n}\n.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C5\";\n}\n.fa-paperclip[_ngcontent-%COMP%]:before {\n  content: \"\uF0C6\";\n}\n.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C7\";\n}\n.fa-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0C8\";\n}\n.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before {\n  content: \"\uF0C9\";\n}\n.fa-list-ul[_ngcontent-%COMP%]:before {\n  content: \"\uF0CA\";\n}\n.fa-list-ol[_ngcontent-%COMP%]:before {\n  content: \"\uF0CB\";\n}\n.fa-strikethrough[_ngcontent-%COMP%]:before {\n  content: \"\uF0CC\";\n}\n.fa-underline[_ngcontent-%COMP%]:before {\n  content: \"\uF0CD\";\n}\n.fa-table[_ngcontent-%COMP%]:before {\n  content: \"\uF0CE\";\n}\n.fa-magic[_ngcontent-%COMP%]:before {\n  content: \"\uF0D0\";\n}\n.fa-truck[_ngcontent-%COMP%]:before {\n  content: \"\uF0D1\";\n}\n.fa-pinterest[_ngcontent-%COMP%]:before {\n  content: \"\uF0D2\";\n}\n.fa-pinterest-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D3\";\n}\n.fa-google-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D4\";\n}\n.fa-google-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF0D5\";\n}\n.fa-money[_ngcontent-%COMP%]:before {\n  content: \"\uF0D6\";\n}\n.fa-caret-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0D7\";\n}\n.fa-caret-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0D8\";\n}\n.fa-caret-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0D9\";\n}\n.fa-caret-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0DA\";\n}\n.fa-columns[_ngcontent-%COMP%]:before {\n  content: \"\uF0DB\";\n}\n.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before {\n  content: \"\uF0DC\";\n}\n.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DD\";\n}\n.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DE\";\n}\n.fa-envelope[_ngcontent-%COMP%]:before {\n  content: \"\uF0E0\";\n}\n.fa-linkedin[_ngcontent-%COMP%]:before {\n  content: \"\uF0E1\";\n}\n.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before {\n  content: \"\uF0E2\";\n}\n.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before {\n  content: \"\uF0E3\";\n}\n.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before {\n  content: \"\uF0E4\";\n}\n.fa-comment-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E5\";\n}\n.fa-comments-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E6\";\n}\n.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before {\n  content: \"\uF0E7\";\n}\n.fa-sitemap[_ngcontent-%COMP%]:before {\n  content: \"\uF0E8\";\n}\n.fa-umbrella[_ngcontent-%COMP%]:before {\n  content: \"\uF0E9\";\n}\n.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before {\n  content: \"\uF0EA\";\n}\n.fa-lightbulb-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0EB\";\n}\n.fa-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF0EC\";\n}\n.fa-cloud-download[_ngcontent-%COMP%]:before {\n  content: \"\uF0ED\";\n}\n.fa-cloud-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF0EE\";\n}\n.fa-user-md[_ngcontent-%COMP%]:before {\n  content: \"\uF0F0\";\n}\n.fa-stethoscope[_ngcontent-%COMP%]:before {\n  content: \"\uF0F1\";\n}\n.fa-suitcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0F2\";\n}\n.fa-bell-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A2\";\n}\n.fa-coffee[_ngcontent-%COMP%]:before {\n  content: \"\uF0F4\";\n}\n.fa-cutlery[_ngcontent-%COMP%]:before {\n  content: \"\uF0F5\";\n}\n.fa-file-text-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F6\";\n}\n.fa-building-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F7\";\n}\n.fa-hospital-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F8\";\n}\n.fa-ambulance[_ngcontent-%COMP%]:before {\n  content: \"\uF0F9\";\n}\n.fa-medkit[_ngcontent-%COMP%]:before {\n  content: \"\uF0FA\";\n}\n.fa-fighter-jet[_ngcontent-%COMP%]:before {\n  content: \"\uF0FB\";\n}\n.fa-beer[_ngcontent-%COMP%]:before {\n  content: \"\uF0FC\";\n}\n.fa-h-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FD\";\n}\n.fa-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FE\";\n}\n.fa-angle-double-left[_ngcontent-%COMP%]:before {\n  content: \"\uF100\";\n}\n.fa-angle-double-right[_ngcontent-%COMP%]:before {\n  content: \"\uF101\";\n}\n.fa-angle-double-up[_ngcontent-%COMP%]:before {\n  content: \"\uF102\";\n}\n.fa-angle-double-down[_ngcontent-%COMP%]:before {\n  content: \"\uF103\";\n}\n.fa-angle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF104\";\n}\n.fa-angle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF105\";\n}\n.fa-angle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF106\";\n}\n.fa-angle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF107\";\n}\n.fa-desktop[_ngcontent-%COMP%]:before {\n  content: \"\uF108\";\n}\n.fa-laptop[_ngcontent-%COMP%]:before {\n  content: \"\uF109\";\n}\n.fa-tablet[_ngcontent-%COMP%]:before {\n  content: \"\uF10A\";\n}\n.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before {\n  content: \"\uF10B\";\n}\n.fa-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF10C\";\n}\n.fa-quote-left[_ngcontent-%COMP%]:before {\n  content: \"\uF10D\";\n}\n.fa-quote-right[_ngcontent-%COMP%]:before {\n  content: \"\uF10E\";\n}\n.fa-spinner[_ngcontent-%COMP%]:before {\n  content: \"\uF110\";\n}\n.fa-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF111\";\n}\n.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before {\n  content: \"\uF112\";\n}\n.fa-github-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF113\";\n}\n.fa-folder-o[_ngcontent-%COMP%]:before {\n  content: \"\uF114\";\n}\n.fa-folder-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF115\";\n}\n.fa-smile-o[_ngcontent-%COMP%]:before {\n  content: \"\uF118\";\n}\n.fa-frown-o[_ngcontent-%COMP%]:before {\n  content: \"\uF119\";\n}\n.fa-meh-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11A\";\n}\n.fa-gamepad[_ngcontent-%COMP%]:before {\n  content: \"\uF11B\";\n}\n.fa-keyboard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11C\";\n}\n.fa-flag-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11D\";\n}\n.fa-flag-checkered[_ngcontent-%COMP%]:before {\n  content: \"\uF11E\";\n}\n.fa-terminal[_ngcontent-%COMP%]:before {\n  content: \"\uF120\";\n}\n.fa-code[_ngcontent-%COMP%]:before {\n  content: \"\uF121\";\n}\n.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before {\n  content: \"\uF122\";\n}\n.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before {\n  content: \"\uF123\";\n}\n.fa-location-arrow[_ngcontent-%COMP%]:before {\n  content: \"\uF124\";\n}\n.fa-crop[_ngcontent-%COMP%]:before {\n  content: \"\uF125\";\n}\n.fa-code-fork[_ngcontent-%COMP%]:before {\n  content: \"\uF126\";\n}\n.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before {\n  content: \"\uF127\";\n}\n.fa-question[_ngcontent-%COMP%]:before {\n  content: \"\uF128\";\n}\n.fa-info[_ngcontent-%COMP%]:before {\n  content: \"\uF129\";\n}\n.fa-exclamation[_ngcontent-%COMP%]:before {\n  content: \"\uF12A\";\n}\n.fa-superscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12B\";\n}\n.fa-subscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12C\";\n}\n.fa-eraser[_ngcontent-%COMP%]:before {\n  content: \"\uF12D\";\n}\n.fa-puzzle-piece[_ngcontent-%COMP%]:before {\n  content: \"\uF12E\";\n}\n.fa-microphone[_ngcontent-%COMP%]:before {\n  content: \"\uF130\";\n}\n.fa-microphone-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF131\";\n}\n.fa-shield[_ngcontent-%COMP%]:before {\n  content: \"\uF132\";\n}\n.fa-calendar-o[_ngcontent-%COMP%]:before {\n  content: \"\uF133\";\n}\n.fa-fire-extinguisher[_ngcontent-%COMP%]:before {\n  content: \"\uF134\";\n}\n.fa-rocket[_ngcontent-%COMP%]:before {\n  content: \"\uF135\";\n}\n.fa-maxcdn[_ngcontent-%COMP%]:before {\n  content: \"\uF136\";\n}\n.fa-chevron-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF137\";\n}\n.fa-chevron-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF138\";\n}\n.fa-chevron-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF139\";\n}\n.fa-chevron-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF13A\";\n}\n.fa-html5[_ngcontent-%COMP%]:before {\n  content: \"\uF13B\";\n}\n.fa-css3[_ngcontent-%COMP%]:before {\n  content: \"\uF13C\";\n}\n.fa-anchor[_ngcontent-%COMP%]:before {\n  content: \"\uF13D\";\n}\n.fa-unlock-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF13E\";\n}\n.fa-bullseye[_ngcontent-%COMP%]:before {\n  content: \"\uF140\";\n}\n.fa-ellipsis-h[_ngcontent-%COMP%]:before {\n  content: \"\uF141\";\n}\n.fa-ellipsis-v[_ngcontent-%COMP%]:before {\n  content: \"\uF142\";\n}\n.fa-rss-square[_ngcontent-%COMP%]:before {\n  content: \"\uF143\";\n}\n.fa-play-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF144\";\n}\n.fa-ticket[_ngcontent-%COMP%]:before {\n  content: \"\uF145\";\n}\n.fa-minus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF146\";\n}\n.fa-minus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF147\";\n}\n.fa-level-up[_ngcontent-%COMP%]:before {\n  content: \"\uF148\";\n}\n.fa-level-down[_ngcontent-%COMP%]:before {\n  content: \"\uF149\";\n}\n.fa-check-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14A\";\n}\n.fa-pencil-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14B\";\n}\n.fa-external-link-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14C\";\n}\n.fa-share-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14D\";\n}\n.fa-compass[_ngcontent-%COMP%]:before {\n  content: \"\uF14E\";\n}\n.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF150\";\n}\n.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF151\";\n}\n.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF152\";\n}\n.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before {\n  content: \"\uF153\";\n}\n.fa-gbp[_ngcontent-%COMP%]:before {\n  content: \"\uF154\";\n}\n.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before {\n  content: \"\uF155\";\n}\n.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before {\n  content: \"\uF156\";\n}\n.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before {\n  content: \"\uF157\";\n}\n.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before {\n  content: \"\uF158\";\n}\n.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before {\n  content: \"\uF159\";\n}\n.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before {\n  content: \"\uF15A\";\n}\n.fa-file[_ngcontent-%COMP%]:before {\n  content: \"\uF15B\";\n}\n.fa-file-text[_ngcontent-%COMP%]:before {\n  content: \"\uF15C\";\n}\n.fa-sort-alpha-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF15D\";\n}\n.fa-sort-alpha-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF15E\";\n}\n.fa-sort-amount-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF160\";\n}\n.fa-sort-amount-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF161\";\n}\n.fa-sort-numeric-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF162\";\n}\n.fa-sort-numeric-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF163\";\n}\n.fa-thumbs-up[_ngcontent-%COMP%]:before {\n  content: \"\uF164\";\n}\n.fa-thumbs-down[_ngcontent-%COMP%]:before {\n  content: \"\uF165\";\n}\n.fa-youtube-square[_ngcontent-%COMP%]:before {\n  content: \"\uF166\";\n}\n.fa-youtube[_ngcontent-%COMP%]:before {\n  content: \"\uF167\";\n}\n.fa-xing[_ngcontent-%COMP%]:before {\n  content: \"\uF168\";\n}\n.fa-xing-square[_ngcontent-%COMP%]:before {\n  content: \"\uF169\";\n}\n.fa-youtube-play[_ngcontent-%COMP%]:before {\n  content: \"\uF16A\";\n}\n.fa-dropbox[_ngcontent-%COMP%]:before {\n  content: \"\uF16B\";\n}\n.fa-stack-overflow[_ngcontent-%COMP%]:before {\n  content: \"\uF16C\";\n}\n.fa-instagram[_ngcontent-%COMP%]:before {\n  content: \"\uF16D\";\n}\n.fa-flickr[_ngcontent-%COMP%]:before {\n  content: \"\uF16E\";\n}\n.fa-adn[_ngcontent-%COMP%]:before {\n  content: \"\uF170\";\n}\n.fa-bitbucket[_ngcontent-%COMP%]:before {\n  content: \"\uF171\";\n}\n.fa-bitbucket-square[_ngcontent-%COMP%]:before {\n  content: \"\uF172\";\n}\n.fa-tumblr[_ngcontent-%COMP%]:before {\n  content: \"\uF173\";\n}\n.fa-tumblr-square[_ngcontent-%COMP%]:before {\n  content: \"\uF174\";\n}\n.fa-long-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF175\";\n}\n.fa-long-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF176\";\n}\n.fa-long-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF177\";\n}\n.fa-long-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF178\";\n}\n.fa-apple[_ngcontent-%COMP%]:before {\n  content: \"\uF179\";\n}\n.fa-windows[_ngcontent-%COMP%]:before {\n  content: \"\uF17A\";\n}\n.fa-android[_ngcontent-%COMP%]:before {\n  content: \"\uF17B\";\n}\n.fa-linux[_ngcontent-%COMP%]:before {\n  content: \"\uF17C\";\n}\n.fa-dribbble[_ngcontent-%COMP%]:before {\n  content: \"\uF17D\";\n}\n.fa-skype[_ngcontent-%COMP%]:before {\n  content: \"\uF17E\";\n}\n.fa-foursquare[_ngcontent-%COMP%]:before {\n  content: \"\uF180\";\n}\n.fa-trello[_ngcontent-%COMP%]:before {\n  content: \"\uF181\";\n}\n.fa-female[_ngcontent-%COMP%]:before {\n  content: \"\uF182\";\n}\n.fa-male[_ngcontent-%COMP%]:before {\n  content: \"\uF183\";\n}\n.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before {\n  content: \"\uF184\";\n}\n.fa-sun-o[_ngcontent-%COMP%]:before {\n  content: \"\uF185\";\n}\n.fa-moon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF186\";\n}\n.fa-archive[_ngcontent-%COMP%]:before {\n  content: \"\uF187\";\n}\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\uF188\";\n}\n.fa-vk[_ngcontent-%COMP%]:before {\n  content: \"\uF189\";\n}\n.fa-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF18A\";\n}\n.fa-renren[_ngcontent-%COMP%]:before {\n  content: \"\uF18B\";\n}\n.fa-pagelines[_ngcontent-%COMP%]:before {\n  content: \"\uF18C\";\n}\n.fa-stack-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF18D\";\n}\n.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF18E\";\n}\n.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF190\";\n}\n.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF191\";\n}\n.fa-dot-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF192\";\n}\n.fa-wheelchair[_ngcontent-%COMP%]:before {\n  content: \"\uF193\";\n}\n.fa-vimeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF194\";\n}\n.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before {\n  content: \"\uF195\";\n}\n.fa-plus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF196\";\n}\n.fa-space-shuttle[_ngcontent-%COMP%]:before {\n  content: \"\uF197\";\n}\n.fa-slack[_ngcontent-%COMP%]:before {\n  content: \"\uF198\";\n}\n.fa-envelope-square[_ngcontent-%COMP%]:before {\n  content: \"\uF199\";\n}\n.fa-wordpress[_ngcontent-%COMP%]:before {\n  content: \"\uF19A\";\n}\n.fa-openid[_ngcontent-%COMP%]:before {\n  content: \"\uF19B\";\n}\n.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before {\n  content: \"\uF19C\";\n}\n.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before {\n  content: \"\uF19D\";\n}\n.fa-yahoo[_ngcontent-%COMP%]:before {\n  content: \"\uF19E\";\n}\n.fa-google[_ngcontent-%COMP%]:before {\n  content: \"\uF1A0\";\n}\n.fa-reddit[_ngcontent-%COMP%]:before {\n  content: \"\uF1A1\";\n}\n.fa-reddit-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1A2\";\n}\n.fa-stumbleupon-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF1A3\";\n}\n.fa-stumbleupon[_ngcontent-%COMP%]:before {\n  content: \"\uF1A4\";\n}\n.fa-delicious[_ngcontent-%COMP%]:before {\n  content: \"\uF1A5\";\n}\n.fa-digg[_ngcontent-%COMP%]:before {\n  content: \"\uF1A6\";\n}\n.fa-pied-piper-pp[_ngcontent-%COMP%]:before {\n  content: \"\uF1A7\";\n}\n.fa-pied-piper-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1A8\";\n}\n.fa-drupal[_ngcontent-%COMP%]:before {\n  content: \"\uF1A9\";\n}\n.fa-joomla[_ngcontent-%COMP%]:before {\n  content: \"\uF1AA\";\n}\n.fa-language[_ngcontent-%COMP%]:before {\n  content: \"\uF1AB\";\n}\n.fa-fax[_ngcontent-%COMP%]:before {\n  content: \"\uF1AC\";\n}\n.fa-building[_ngcontent-%COMP%]:before {\n  content: \"\uF1AD\";\n}\n.fa-child[_ngcontent-%COMP%]:before {\n  content: \"\uF1AE\";\n}\n.fa-paw[_ngcontent-%COMP%]:before {\n  content: \"\uF1B0\";\n}\n.fa-spoon[_ngcontent-%COMP%]:before {\n  content: \"\uF1B1\";\n}\n.fa-cube[_ngcontent-%COMP%]:before {\n  content: \"\uF1B2\";\n}\n.fa-cubes[_ngcontent-%COMP%]:before {\n  content: \"\uF1B3\";\n}\n.fa-behance[_ngcontent-%COMP%]:before {\n  content: \"\uF1B4\";\n}\n.fa-behance-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B5\";\n}\n.fa-steam[_ngcontent-%COMP%]:before {\n  content: \"\uF1B6\";\n}\n.fa-steam-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B7\";\n}\n.fa-recycle[_ngcontent-%COMP%]:before {\n  content: \"\uF1B8\";\n}\n.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before {\n  content: \"\uF1B9\";\n}\n.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before {\n  content: \"\uF1BA\";\n}\n.fa-tree[_ngcontent-%COMP%]:before {\n  content: \"\uF1BB\";\n}\n.fa-spotify[_ngcontent-%COMP%]:before {\n  content: \"\uF1BC\";\n}\n.fa-deviantart[_ngcontent-%COMP%]:before {\n  content: \"\uF1BD\";\n}\n.fa-soundcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF1BE\";\n}\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\uF1C0\";\n}\n.fa-file-pdf-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C1\";\n}\n.fa-file-word-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C2\";\n}\n.fa-file-excel-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C3\";\n}\n.fa-file-powerpoint-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C4\";\n}\n.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C5\";\n}\n.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C6\";\n}\n.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C7\";\n}\n.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C8\";\n}\n.fa-file-code-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C9\";\n}\n.fa-vine[_ngcontent-%COMP%]:before {\n  content: \"\uF1CA\";\n}\n.fa-codepen[_ngcontent-%COMP%]:before {\n  content: \"\uF1CB\";\n}\n.fa-jsfiddle[_ngcontent-%COMP%]:before {\n  content: \"\uF1CC\";\n}\n.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before {\n  content: \"\uF1CD\";\n}\n.fa-circle-o-notch[_ngcontent-%COMP%]:before {\n  content: \"\uF1CE\";\n}\n.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before {\n  content: \"\uF1D0\";\n}\n.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before {\n  content: \"\uF1D1\";\n}\n.fa-git-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1D2\";\n}\n.fa-git[_ngcontent-%COMP%]:before {\n  content: \"\uF1D3\";\n}\n.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before {\n  content: \"\uF1D4\";\n}\n.fa-tencent-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF1D5\";\n}\n.fa-qq[_ngcontent-%COMP%]:before {\n  content: \"\uF1D6\";\n}\n.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before {\n  content: \"\uF1D7\";\n}\n.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF1D8\";\n}\n.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1D9\";\n}\n.fa-history[_ngcontent-%COMP%]:before {\n  content: \"\uF1DA\";\n}\n.fa-circle-thin[_ngcontent-%COMP%]:before {\n  content: \"\uF1DB\";\n}\n.fa-header[_ngcontent-%COMP%]:before {\n  content: \"\uF1DC\";\n}\n.fa-paragraph[_ngcontent-%COMP%]:before {\n  content: \"\uF1DD\";\n}\n.fa-sliders[_ngcontent-%COMP%]:before {\n  content: \"\uF1DE\";\n}\n.fa-share-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1E0\";\n}\n.fa-share-alt-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1E1\";\n}\n.fa-bomb[_ngcontent-%COMP%]:before {\n  content: \"\uF1E2\";\n}\n.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1E3\";\n}\n.fa-tty[_ngcontent-%COMP%]:before {\n  content: \"\uF1E4\";\n}\n.fa-binoculars[_ngcontent-%COMP%]:before {\n  content: \"\uF1E5\";\n}\n.fa-plug[_ngcontent-%COMP%]:before {\n  content: \"\uF1E6\";\n}\n.fa-slideshare[_ngcontent-%COMP%]:before {\n  content: \"\uF1E7\";\n}\n.fa-twitch[_ngcontent-%COMP%]:before {\n  content: \"\uF1E8\";\n}\n.fa-yelp[_ngcontent-%COMP%]:before {\n  content: \"\uF1E9\";\n}\n.fa-newspaper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1EA\";\n}\n.fa-wifi[_ngcontent-%COMP%]:before {\n  content: \"\uF1EB\";\n}\n.fa-calculator[_ngcontent-%COMP%]:before {\n  content: \"\uF1EC\";\n}\n.fa-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1ED\";\n}\n.fa-google-wallet[_ngcontent-%COMP%]:before {\n  content: \"\uF1EE\";\n}\n.fa-cc-visa[_ngcontent-%COMP%]:before {\n  content: \"\uF1F0\";\n}\n.fa-cc-mastercard[_ngcontent-%COMP%]:before {\n  content: \"\uF1F1\";\n}\n.fa-cc-discover[_ngcontent-%COMP%]:before {\n  content: \"\uF1F2\";\n}\n.fa-cc-amex[_ngcontent-%COMP%]:before {\n  content: \"\uF1F3\";\n}\n.fa-cc-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1F4\";\n}\n.fa-cc-stripe[_ngcontent-%COMP%]:before {\n  content: \"\uF1F5\";\n}\n.fa-bell-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F6\";\n}\n.fa-bell-slash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1F7\";\n}\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F8\";\n}\n.fa-copyright[_ngcontent-%COMP%]:before {\n  content: \"\uF1F9\";\n}\n.fa-at[_ngcontent-%COMP%]:before {\n  content: \"\uF1FA\";\n}\n.fa-eyedropper[_ngcontent-%COMP%]:before {\n  content: \"\uF1FB\";\n}\n.fa-paint-brush[_ngcontent-%COMP%]:before {\n  content: \"\uF1FC\";\n}\n.fa-birthday-cake[_ngcontent-%COMP%]:before {\n  content: \"\uF1FD\";\n}\n.fa-area-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF1FE\";\n}\n.fa-pie-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF200\";\n}\n.fa-line-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF201\";\n}\n.fa-lastfm[_ngcontent-%COMP%]:before {\n  content: \"\uF202\";\n}\n.fa-lastfm-square[_ngcontent-%COMP%]:before {\n  content: \"\uF203\";\n}\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\uF204\";\n}\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\uF205\";\n}\n.fa-bicycle[_ngcontent-%COMP%]:before {\n  content: \"\uF206\";\n}\n.fa-bus[_ngcontent-%COMP%]:before {\n  content: \"\uF207\";\n}\n.fa-ioxhost[_ngcontent-%COMP%]:before {\n  content: \"\uF208\";\n}\n.fa-angellist[_ngcontent-%COMP%]:before {\n  content: \"\uF209\";\n}\n.fa-cc[_ngcontent-%COMP%]:before {\n  content: \"\uF20A\";\n}\n.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before {\n  content: \"\uF20B\";\n}\n.fa-meanpath[_ngcontent-%COMP%]:before {\n  content: \"\uF20C\";\n}\n.fa-buysellads[_ngcontent-%COMP%]:before {\n  content: \"\uF20D\";\n}\n.fa-connectdevelop[_ngcontent-%COMP%]:before {\n  content: \"\uF20E\";\n}\n.fa-dashcube[_ngcontent-%COMP%]:before {\n  content: \"\uF210\";\n}\n.fa-forumbee[_ngcontent-%COMP%]:before {\n  content: \"\uF211\";\n}\n.fa-leanpub[_ngcontent-%COMP%]:before {\n  content: \"\uF212\";\n}\n.fa-sellsy[_ngcontent-%COMP%]:before {\n  content: \"\uF213\";\n}\n.fa-shirtsinbulk[_ngcontent-%COMP%]:before {\n  content: \"\uF214\";\n}\n.fa-simplybuilt[_ngcontent-%COMP%]:before {\n  content: \"\uF215\";\n}\n.fa-skyatlas[_ngcontent-%COMP%]:before {\n  content: \"\uF216\";\n}\n.fa-cart-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF217\";\n}\n.fa-cart-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF218\";\n}\n.fa-diamond[_ngcontent-%COMP%]:before {\n  content: \"\uF219\";\n}\n.fa-ship[_ngcontent-%COMP%]:before {\n  content: \"\uF21A\";\n}\n.fa-user-secret[_ngcontent-%COMP%]:before {\n  content: \"\uF21B\";\n}\n.fa-motorcycle[_ngcontent-%COMP%]:before {\n  content: \"\uF21C\";\n}\n.fa-street-view[_ngcontent-%COMP%]:before {\n  content: \"\uF21D\";\n}\n.fa-heartbeat[_ngcontent-%COMP%]:before {\n  content: \"\uF21E\";\n}\n.fa-venus[_ngcontent-%COMP%]:before {\n  content: \"\uF221\";\n}\n.fa-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF222\";\n}\n.fa-mercury[_ngcontent-%COMP%]:before {\n  content: \"\uF223\";\n}\n.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before {\n  content: \"\uF224\";\n}\n.fa-transgender-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF225\";\n}\n.fa-venus-double[_ngcontent-%COMP%]:before {\n  content: \"\uF226\";\n}\n.fa-mars-double[_ngcontent-%COMP%]:before {\n  content: \"\uF227\";\n}\n.fa-venus-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF228\";\n}\n.fa-mars-stroke[_ngcontent-%COMP%]:before {\n  content: \"\uF229\";\n}\n.fa-mars-stroke-v[_ngcontent-%COMP%]:before {\n  content: \"\uF22A\";\n}\n.fa-mars-stroke-h[_ngcontent-%COMP%]:before {\n  content: \"\uF22B\";\n}\n.fa-neuter[_ngcontent-%COMP%]:before {\n  content: \"\uF22C\";\n}\n.fa-genderless[_ngcontent-%COMP%]:before {\n  content: \"\uF22D\";\n}\n.fa-facebook-official[_ngcontent-%COMP%]:before {\n  content: \"\uF230\";\n}\n.fa-pinterest-p[_ngcontent-%COMP%]:before {\n  content: \"\uF231\";\n}\n.fa-whatsapp[_ngcontent-%COMP%]:before {\n  content: \"\uF232\";\n}\n.fa-server[_ngcontent-%COMP%]:before {\n  content: \"\uF233\";\n}\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF234\";\n}\n.fa-user-times[_ngcontent-%COMP%]:before {\n  content: \"\uF235\";\n}\n.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before {\n  content: \"\uF236\";\n}\n.fa-viacoin[_ngcontent-%COMP%]:before {\n  content: \"\uF237\";\n}\n.fa-train[_ngcontent-%COMP%]:before {\n  content: \"\uF238\";\n}\n.fa-subway[_ngcontent-%COMP%]:before {\n  content: \"\uF239\";\n}\n.fa-medium[_ngcontent-%COMP%]:before {\n  content: \"\uF23A\";\n}\n.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before {\n  content: \"\uF23B\";\n}\n.fa-optin-monster[_ngcontent-%COMP%]:before {\n  content: \"\uF23C\";\n}\n.fa-opencart[_ngcontent-%COMP%]:before {\n  content: \"\uF23D\";\n}\n.fa-expeditedssl[_ngcontent-%COMP%]:before {\n  content: \"\uF23E\";\n}\n.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before {\n  content: \"\uF240\";\n}\n.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF241\";\n}\n.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before {\n  content: \"\uF242\";\n}\n.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF243\";\n}\n.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF244\";\n}\n.fa-mouse-pointer[_ngcontent-%COMP%]:before {\n  content: \"\uF245\";\n}\n.fa-i-cursor[_ngcontent-%COMP%]:before {\n  content: \"\uF246\";\n}\n.fa-object-group[_ngcontent-%COMP%]:before {\n  content: \"\uF247\";\n}\n.fa-object-ungroup[_ngcontent-%COMP%]:before {\n  content: \"\uF248\";\n}\n.fa-sticky-note[_ngcontent-%COMP%]:before {\n  content: \"\uF249\";\n}\n.fa-sticky-note-o[_ngcontent-%COMP%]:before {\n  content: \"\uF24A\";\n}\n.fa-cc-jcb[_ngcontent-%COMP%]:before {\n  content: \"\uF24B\";\n}\n.fa-cc-diners-club[_ngcontent-%COMP%]:before {\n  content: \"\uF24C\";\n}\n.fa-clone[_ngcontent-%COMP%]:before {\n  content: \"\uF24D\";\n}\n.fa-balance-scale[_ngcontent-%COMP%]:before {\n  content: \"\uF24E\";\n}\n.fa-hourglass-o[_ngcontent-%COMP%]:before {\n  content: \"\uF250\";\n}\n.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before {\n  content: \"\uF251\";\n}\n.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before {\n  content: \"\uF252\";\n}\n.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before {\n  content: \"\uF253\";\n}\n.fa-hourglass[_ngcontent-%COMP%]:before {\n  content: \"\uF254\";\n}\n.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF255\";\n}\n.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF256\";\n}\n.fa-hand-scissors-o[_ngcontent-%COMP%]:before {\n  content: \"\uF257\";\n}\n.fa-hand-lizard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF258\";\n}\n.fa-hand-spock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF259\";\n}\n.fa-hand-pointer-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25A\";\n}\n.fa-hand-peace-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25B\";\n}\n.fa-trademark[_ngcontent-%COMP%]:before {\n  content: \"\uF25C\";\n}\n.fa-registered[_ngcontent-%COMP%]:before {\n  content: \"\uF25D\";\n}\n.fa-creative-commons[_ngcontent-%COMP%]:before {\n  content: \"\uF25E\";\n}\n.fa-gg[_ngcontent-%COMP%]:before {\n  content: \"\uF260\";\n}\n.fa-gg-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF261\";\n}\n.fa-tripadvisor[_ngcontent-%COMP%]:before {\n  content: \"\uF262\";\n}\n.fa-odnoklassniki[_ngcontent-%COMP%]:before {\n  content: \"\uF263\";\n}\n.fa-odnoklassniki-square[_ngcontent-%COMP%]:before {\n  content: \"\uF264\";\n}\n.fa-get-pocket[_ngcontent-%COMP%]:before {\n  content: \"\uF265\";\n}\n.fa-wikipedia-w[_ngcontent-%COMP%]:before {\n  content: \"\uF266\";\n}\n.fa-safari[_ngcontent-%COMP%]:before {\n  content: \"\uF267\";\n}\n.fa-chrome[_ngcontent-%COMP%]:before {\n  content: \"\uF268\";\n}\n.fa-firefox[_ngcontent-%COMP%]:before {\n  content: \"\uF269\";\n}\n.fa-opera[_ngcontent-%COMP%]:before {\n  content: \"\uF26A\";\n}\n.fa-internet-explorer[_ngcontent-%COMP%]:before {\n  content: \"\uF26B\";\n}\n.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before {\n  content: \"\uF26C\";\n}\n.fa-contao[_ngcontent-%COMP%]:before {\n  content: \"\uF26D\";\n}\n.fa-500px[_ngcontent-%COMP%]:before {\n  content: \"\uF26E\";\n}\n.fa-amazon[_ngcontent-%COMP%]:before {\n  content: \"\uF270\";\n}\n.fa-calendar-plus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF271\";\n}\n.fa-calendar-minus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF272\";\n}\n.fa-calendar-times-o[_ngcontent-%COMP%]:before {\n  content: \"\uF273\";\n}\n.fa-calendar-check-o[_ngcontent-%COMP%]:before {\n  content: \"\uF274\";\n}\n.fa-industry[_ngcontent-%COMP%]:before {\n  content: \"\uF275\";\n}\n.fa-map-pin[_ngcontent-%COMP%]:before {\n  content: \"\uF276\";\n}\n.fa-map-signs[_ngcontent-%COMP%]:before {\n  content: \"\uF277\";\n}\n.fa-map-o[_ngcontent-%COMP%]:before {\n  content: \"\uF278\";\n}\n.fa-map[_ngcontent-%COMP%]:before {\n  content: \"\uF279\";\n}\n.fa-commenting[_ngcontent-%COMP%]:before {\n  content: \"\uF27A\";\n}\n.fa-commenting-o[_ngcontent-%COMP%]:before {\n  content: \"\uF27B\";\n}\n.fa-houzz[_ngcontent-%COMP%]:before {\n  content: \"\uF27C\";\n}\n.fa-vimeo[_ngcontent-%COMP%]:before {\n  content: \"\uF27D\";\n}\n.fa-black-tie[_ngcontent-%COMP%]:before {\n  content: \"\uF27E\";\n}\n.fa-fonticons[_ngcontent-%COMP%]:before {\n  content: \"\uF280\";\n}\n.fa-reddit-alien[_ngcontent-%COMP%]:before {\n  content: \"\uF281\";\n}\n.fa-edge[_ngcontent-%COMP%]:before {\n  content: \"\uF282\";\n}\n.fa-credit-card-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF283\";\n}\n.fa-codiepie[_ngcontent-%COMP%]:before {\n  content: \"\uF284\";\n}\n.fa-modx[_ngcontent-%COMP%]:before {\n  content: \"\uF285\";\n}\n.fa-fort-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF286\";\n}\n.fa-usb[_ngcontent-%COMP%]:before {\n  content: \"\uF287\";\n}\n.fa-product-hunt[_ngcontent-%COMP%]:before {\n  content: \"\uF288\";\n}\n.fa-mixcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF289\";\n}\n.fa-scribd[_ngcontent-%COMP%]:before {\n  content: \"\uF28A\";\n}\n.fa-pause-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28B\";\n}\n.fa-pause-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28C\";\n}\n.fa-stop-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28D\";\n}\n.fa-stop-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28E\";\n}\n.fa-shopping-bag[_ngcontent-%COMP%]:before {\n  content: \"\uF290\";\n}\n.fa-shopping-basket[_ngcontent-%COMP%]:before {\n  content: \"\uF291\";\n}\n.fa-hashtag[_ngcontent-%COMP%]:before {\n  content: \"\uF292\";\n}\n.fa-bluetooth[_ngcontent-%COMP%]:before {\n  content: \"\uF293\";\n}\n.fa-bluetooth-b[_ngcontent-%COMP%]:before {\n  content: \"\uF294\";\n}\n.fa-percent[_ngcontent-%COMP%]:before {\n  content: \"\uF295\";\n}\n.fa-gitlab[_ngcontent-%COMP%]:before {\n  content: \"\uF296\";\n}\n.fa-wpbeginner[_ngcontent-%COMP%]:before {\n  content: \"\uF297\";\n}\n.fa-wpforms[_ngcontent-%COMP%]:before {\n  content: \"\uF298\";\n}\n.fa-envira[_ngcontent-%COMP%]:before {\n  content: \"\uF299\";\n}\n.fa-universal-access[_ngcontent-%COMP%]:before {\n  content: \"\uF29A\";\n}\n.fa-wheelchair-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF29B\";\n}\n.fa-question-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF29C\";\n}\n.fa-blind[_ngcontent-%COMP%]:before {\n  content: \"\uF29D\";\n}\n.fa-audio-description[_ngcontent-%COMP%]:before {\n  content: \"\uF29E\";\n}\n.fa-volume-control-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF2A0\";\n}\n.fa-braille[_ngcontent-%COMP%]:before {\n  content: \"\uF2A1\";\n}\n.fa-assistive-listening-systems[_ngcontent-%COMP%]:before {\n  content: \"\uF2A2\";\n}\n.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before {\n  content: \"\uF2A3\";\n}\n.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before {\n  content: \"\uF2A4\";\n}\n.fa-glide[_ngcontent-%COMP%]:before {\n  content: \"\uF2A5\";\n}\n.fa-glide-g[_ngcontent-%COMP%]:before {\n  content: \"\uF2A6\";\n}\n.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before {\n  content: \"\uF2A7\";\n}\n.fa-low-vision[_ngcontent-%COMP%]:before {\n  content: \"\uF2A8\";\n}\n.fa-viadeo[_ngcontent-%COMP%]:before {\n  content: \"\uF2A9\";\n}\n.fa-viadeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AA\";\n}\n.fa-snapchat[_ngcontent-%COMP%]:before {\n  content: \"\uF2AB\";\n}\n.fa-snapchat-ghost[_ngcontent-%COMP%]:before {\n  content: \"\uF2AC\";\n}\n.fa-snapchat-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AD\";\n}\n.fa-pied-piper[_ngcontent-%COMP%]:before {\n  content: \"\uF2AE\";\n}\n.fa-first-order[_ngcontent-%COMP%]:before {\n  content: \"\uF2B0\";\n}\n.fa-yoast[_ngcontent-%COMP%]:before {\n  content: \"\uF2B1\";\n}\n.fa-themeisle[_ngcontent-%COMP%]:before {\n  content: \"\uF2B2\";\n}\n.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before {\n  content: \"\uF2B3\";\n}\n.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF2B4\";\n}\n.fa-handshake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B5\";\n}\n.fa-envelope-open[_ngcontent-%COMP%]:before {\n  content: \"\uF2B6\";\n}\n.fa-envelope-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B7\";\n}\n.fa-linode[_ngcontent-%COMP%]:before {\n  content: \"\uF2B8\";\n}\n.fa-address-book[_ngcontent-%COMP%]:before {\n  content: \"\uF2B9\";\n}\n.fa-address-book-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BA\";\n}\n.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2BB\";\n}\n.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BC\";\n}\n.fa-user-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF2BD\";\n}\n.fa-user-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BE\";\n}\n.fa-user-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C0\";\n}\n.fa-id-badge[_ngcontent-%COMP%]:before {\n  content: \"\uF2C1\";\n}\n.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2C2\";\n}\n.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C3\";\n}\n.fa-quora[_ngcontent-%COMP%]:before {\n  content: \"\uF2C4\";\n}\n.fa-free-code-camp[_ngcontent-%COMP%]:before {\n  content: \"\uF2C5\";\n}\n.fa-telegram[_ngcontent-%COMP%]:before {\n  content: \"\uF2C6\";\n}\n.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before {\n  content: \"\uF2C7\";\n}\n.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF2C8\";\n}\n.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before {\n  content: \"\uF2C9\";\n}\n.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF2CA\";\n}\n.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF2CB\";\n}\n.fa-shower[_ngcontent-%COMP%]:before {\n  content: \"\uF2CC\";\n}\n.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before {\n  content: \"\uF2CD\";\n}\n.fa-podcast[_ngcontent-%COMP%]:before {\n  content: \"\uF2CE\";\n}\n.fa-window-maximize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D0\";\n}\n.fa-window-minimize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D1\";\n}\n.fa-window-restore[_ngcontent-%COMP%]:before {\n  content: \"\uF2D2\";\n}\n.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before {\n  content: \"\uF2D3\";\n}\n.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2D4\";\n}\n.fa-bandcamp[_ngcontent-%COMP%]:before {\n  content: \"\uF2D5\";\n}\n.fa-grav[_ngcontent-%COMP%]:before {\n  content: \"\uF2D6\";\n}\n.fa-etsy[_ngcontent-%COMP%]:before {\n  content: \"\uF2D7\";\n}\n.fa-imdb[_ngcontent-%COMP%]:before {\n  content: \"\uF2D8\";\n}\n.fa-ravelry[_ngcontent-%COMP%]:before {\n  content: \"\uF2D9\";\n}\n.fa-eercast[_ngcontent-%COMP%]:before {\n  content: \"\uF2DA\";\n}\n.fa-microchip[_ngcontent-%COMP%]:before {\n  content: \"\uF2DB\";\n}\n.fa-snowflake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2DC\";\n}\n.fa-superpowers[_ngcontent-%COMP%]:before {\n  content: \"\uF2DD\";\n}\n.fa-wpexplorer[_ngcontent-%COMP%]:before {\n  content: \"\uF2DE\";\n}\n.fa-meetup[_ngcontent-%COMP%]:before {\n  content: \"\uF2E0\";\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.angular-editor-textarea[_ngcontent-%COMP%] {\n  min-height: 150px;\n  overflow: auto;\n  margin-top: 5px;\n  resize: vertical;\n}\n.angular-editor-textarea[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  width: 8px;\n  height: 8px;\n  cursor: nwse-resize;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.angular-editor-toolbar[_ngcontent-%COMP%] {\n  font: 100 14px/15px Roboto, Arial, sans-serif;\n  background-color: #f5f5f5;\n  font-size: 0.8rem;\n  padding: 0.2rem;\n  border: 1px solid #ddd;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 5px;\n  vertical-align: baseline;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%] {\n  background-color: white;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n  padding: 0.4rem;\n  min-width: 2rem;\n  float: left;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%] {\n  outline: 0;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after {\n  background: #555555;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label.background[_ngcontent-%COMP%] {\n  background: #555555;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%] {\n  background: #fff5b9;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover {\n  background-color: #fffa98;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 90px;\n  vertical-align: middle;\n  background-color: transparent;\n  border: 0.5px solid rgba(255, 255, 255, 0);\n  border-radius: 5px;\n  outline: none;\n  padding: 0.4rem;\n  cursor: pointer;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%] {\n    \n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  font-size: smaller;\n  background: #1b1b1b;\n  color: white;\n  padding: 3px;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  left: -1px;\n  top: auto;\n  bottom: -3px;\n  right: auto;\n  width: 15px;\n  height: 2px;\n  z-index: 0;\n  background: #1b1b1b;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]) {\n  display: inline-block;\n}\n.select-button[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.select-button.disabled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX3BhdGguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fY29yZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19sYXJnZXIuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fZml4ZWQtd2lkdGguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fbGlzdC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fYm9yZGVyZWQtcHVsbGVkLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX2FuaW1hdGVkLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX3JvdGF0ZWQtZmxpcHBlZC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fc3RhY2tlZC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19pY29ucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19zY3JlZW4tcmVhZGVyLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7O0VBQUE7QUNBQTsrQkFBQTtBQUdBO0VBQ0UsMEJBQUE7RUFDQSxvR0FBQTtFQUNBLGltQkFBQTtFQU1BLG1CQUFBO0VBQ0Esa0JBQUE7QUZBRjtBR1ZBO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FIWUY7QUlsQkEsNkRBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBSnFCRjtBSW5CQTtFQUF3QixjQUFBO0FKdUJ4QjtBSXRCQTtFQUF3QixjQUFBO0FKMEJ4QjtBSXpCQTtFQUF3QixjQUFBO0FKNkJ4QjtBSTVCQTtFQUF3QixjQUFBO0FKZ0N4QjtBSzFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUw2Q0Y7QU05Q0E7RUFDRSxlQUFBO0VBQ0EsMkJDTW9CO0VETHBCLHFCQUFBO0FOaURGO0FNaERFO0VBQU8sa0JBQUE7QU5tRFQ7QU1qREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJDRG9CO0VERXBCLG1CQUFBO0VBQ0Esa0JBQUE7QU5vREY7QU1uREU7RUFDRSxxQkFBQTtBTnFESjtBUWxFQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBUnFFRjtBUWxFQTtFQUErQixXQUFBO0FSc0UvQjtBUXJFQTtFQUFnQyxZQUFBO0FSeUVoQztBUXRFRTtFQUFnQyxtQkFBQTtBUjBFbEM7QVF6RUU7RUFBaUMsa0JBQUE7QVI0RW5DO0FRekVBLDJCQUFBO0FBQ0E7RUFBYyxZQUFBO0FSNkVkO0FRNUVBO0VBQWEsV0FBQTtBUmdGYjtBUTdFRTtFQUFjLG1CQUFBO0FSaUZoQjtBUWhGRTtFQUFlLGtCQUFBO0FSbUZqQjtBU3ZHQTtFQUNFLDZDQUFBO0VBQ1EscUNBQUE7QVQwR1Y7QVN2R0E7RUFDRSwrQ0FBQTtFQUNRLHVDQUFBO0FUMEdWO0FTdkdBO0VBQ0U7SUFFVSx1QkFBQTtFVDBHVjtFU3hHQTtJQUVVLHlCQUFBO0VUMEdWO0FBQ0Y7QVN2R0E7RUFDRTtJQUVVLHVCQUFBO0VUeUdWO0VTdkdBO0lBRVUseUJBQUE7RVR5R1Y7QUFDRjtBVXRJQTtFQ1dFLHNFQUFBO0VBR1Esd0JBQUE7QVg4SFY7QVUzSUE7RUNVRSxzRUFBQTtFQUdRLHlCQUFBO0FYcUlWO0FVakpBO0VDU0Usc0VBQUE7RUFHUSx5QkFBQTtBWDRJVjtBVXRKQTtFQ2NFLGdGQUFBO0VBR1EsdUJBQUE7QVg0SVY7QVU1SkE7RUNhRSxnRkFBQTtFQUdRLHVCQUFBO0FYbUpWO0FVOUpBOzs7OztFQUtFLFlBQUE7QVZpS0Y7QVloTEE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FabUxGO0FZakxBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0Fab0xGO0FZbExBO0VBQThCLG9CQUFBO0Fac0w5QjtBWXJMQTtFQUE4QixjQUFBO0FaeUw5QjtBWXhMQTtFQUE2QixXTFRQO0FQcU10QjtBYS9NQTttRUFBQTtBQUdBO0VBQWtDLFlOd1VuQjtBUHRIZjtBYWpOQTtFQUFrQyxZTjJkbkI7QVB0UWY7QWFwTkE7RUFBbUMsWU4wakJuQjtBUGxXaEI7QWF2TkE7RUFBdUMsWU5zT25CO0FQWHBCO0FhMU5BO0VBQWtDLFlOdVduQjtBUHpJZjtBYTdOQTtFQUFpQyxZTmtuQm5CO0FQalpkO0FhaE9BO0VBQW1DLFlOc25CbkI7QVBsWmhCO0Fhbk9BO0VBQWlDLFlOeXRCbkI7QVBsZmQ7QWF0T0E7RUFBaUMsWU5tUm5CO0FQekNkO0Fhek9BO0VBQXFDLFlOdXBCbkI7QVAxYWxCO0FhNU9BO0VBQStCLFlOcXBCbkI7QVByYVo7QWEvT0E7RUFBb0MsWU5zcEJuQjtBUG5hakI7QWFsUEE7RUFBa0MsWU55SW5CO0FQNkdmO0FhclBBOzs7RUFFa0MsWU5xcUJuQjtBUDVhZjtBYXhQQTtFQUF3QyxZTjhpQm5CO0FQbFRyQjtBYTNQQTtFQUF5QyxZTjRpQm5CO0FQN1N0QjtBYTlQQTtFQUFzQyxZTjRmbkI7QVAxUG5CO0FhalFBO0VBQW1DLFlOaWtCbkI7QVA1VGhCO0FhcFFBOztFQUNnQyxZTmdLbkI7QVB3R2I7QWF2UUE7RUFBb0MsWU4rcUJuQjtBUHBhakI7QWExUUE7RUFBaUMsWU53Vm5CO0FQMUVkO0FhN1FBO0VBQW1DLFlOdVBuQjtBUDBCaEI7QWFoUkE7RUFBb0MsWU5nSm5CO0FQb0lqQjtBYW5SQTtFQUFpQyxZTm1oQm5CO0FQNVBkO0FhdFJBO0VBQXFDLFlOZ01uQjtBUDBGbEI7QWF6UkE7RUFBZ0QsWU5ZbkI7QVBpUjdCO0FhNVJBO0VBQThDLFlOY25CO0FQa1IzQjtBYS9SQTtFQUFrQyxZTnFXbkI7QVBsRWY7QWFsU0E7RUFBMEMsWU53ZW5CO0FQbE12QjtBYXJTQTs7RUFDbUMsWU5zZ0JuQjtBUDdOaEI7QWF4U0E7RUFBb0MsWU5nZ0JuQjtBUHBOakI7QWEzU0E7RUFBcUMsWU53WW5CO0FQekZsQjtBYTlTQTtFQUFpQyxZTjJZbkI7QVB6RmQ7QWFqVEE7RUFBaUMsWU40UG5CO0FQeURkO0FhcFRBO0VBQXVDLFlOb1VuQjtBUFpwQjtBYXZUQTtFQUF1QyxZTml0Qm5CO0FQdFpwQjtBYTFUQTtFQUF3QyxZTitzQm5CO0FQalpyQjtBYTdUQTtFQUFzQyxZTmd0Qm5CO0FQL1luQjtBYWhVQTtFQUFtQyxZTnllbkI7QVByS2hCO0FhblVBO0VBQW9DLFlOd0JuQjtBUCtTakI7QWF0VUE7RUFBZ0MsWU55bUJuQjtBUC9SYjtBYXpVQTtFQUFpQyxZTnltQm5CO0FQNVJkO0FhNVVBO0VBQWlDLFlOeURuQjtBUHVSZDtBYS9VQTtFQUFxQyxZTnlEbkI7QVAwUmxCO0FhbFZBO0VBQWtDLFlOK2RuQjtBUHpJZjtBYXJWQTtFQUFtQyxZTjJFbkI7QVA4UWhCO0FheFZBO0VBQWlDLFlOMFBuQjtBUGtHZDtBYTNWQTtFQUFpQyxZTmlEbkI7QVA4U2Q7QWE5VkE7RUFBbUMsWU4wVm5CO0FQUWhCO0FhaldBO0VBQXdDLFlOd21CbkI7QVBuUXJCO0FhcFdBO0VBQXVDLFlOd21CbkI7QVBoUXBCO0FhdldBO0VBQXVDLFlOcENuQjtBUCtZcEI7QWExV0E7RUFBeUMsWU52Q25CO0FQcVp0QjtBYTdXQTtFQUF3QyxZTnJDbkI7QVBzWnJCO0FhaFhBO0VBQTBDLFlOeENuQjtBUDRadkI7QWFuWEE7RUFBaUMsWU4rV25CO0FQUWQ7QWF0WEE7O0VBQ29DLFlOMmFuQjtBUGpEakI7QWF6WEE7RUFBbUMsWU5zVW5CO0FQdURoQjtBYTVYQTtFQUF5QyxZTmtyQm5CO0FQbFR0QjtBYS9YQTs7O0VBRXNDLFlOMGJuQjtBUHZEbkI7QWFsWUE7RUFBbUMsWU5rYm5CO0FQNUNoQjtBYXJZQTtFQUF1QyxZTndYbkI7QVBpQnBCO0FheFlBO0VBQW1DLFlOdERuQjtBUGtjaEI7QWEzWUE7RUFBaUMsWU5tbkJuQjtBUHBPZDtBYTlZQTs7RUFDNEMsWU4rYW5CO0FQN0J6QjtBYWpaQTtFQUEyQyxZTjhmbkI7QVB6R3hCO0FhcFpBO0VBQTJDLFlOK0VuQjtBUHlVeEI7QWF2WkE7RUFBbUMsWU56Qm5CO0FQb2JoQjtBYTFaQTtFQUEwQyxZTm1qQm5CO0FQckp2QjtBYTdaQTtFQUEwQyxZTnFMbkI7QVA0T3ZCO0FhaGFBO0VBQXFDLFlObEJuQjtBUHNibEI7QWFuYUE7RUFBaUMsWU5zYm5CO0FQZmQ7QWF0YUE7RUFBa0MsWU5nYW5CO0FQVWY7QWF6YUE7RUFBaUMsWU5takJuQjtBUHRJZDtBYTVhQTtFQUFvQyxZTitObkI7QVBpTmpCO0FhL2FBO0VBQXlDLFlOZ0xuQjtBUG1RdEI7QWFsYkE7RUFBeUMsWU40aUJuQjtBUHRIdEI7QWFyYkE7RUFBa0MsWU4rSW5CO0FQMFNmO0FheGJBO0VBQXlDLFlOeUVuQjtBUG1YdEI7QWEzYkE7RUFBMEMsWU55RW5CO0FQc1h2QjtBYTliQTtFQUF3QyxZTmtibkI7QVBnQnJCO0FhamNBO0VBQXlDLFlOdVhuQjtBUDhFdEI7QWFwY0E7RUFBeUMsWU4ybEJuQjtBUG5KdEI7QWF2Y0E7RUFBeUMsWU4yRG5CO0FQZ1p0QjtBYTFjQTtFQUE0QyxZTnlibkI7QVBxQnpCO0FhN2NBO0VBQXdDLFlOMFNuQjtBUHVLckI7QWFoZEE7RUFBdUMsWU4wR25CO0FQMFdwQjtBYW5kQTtFQUEyQyxZTnVsQm5CO0FQaEl4QjtBYXRkQTtFQUEyQyxZTnVEbkI7QVBtYXhCO0FhemRBO0VBQWdDLFlObkNuQjtBUGdnQmI7QWE1ZEE7RUFBdUMsWU5uRG5CO0FQbWhCcEI7QWEvZEE7RUFBd0MsWU5uRG5CO0FQc2hCckI7QWFsZUE7RUFBcUMsWU5uRG5CO0FQeWhCbEI7QWFyZUE7RUFBdUMsWU52RG5CO0FQZ2lCcEI7QWF4ZUE7O0VBQ2tDLFlONGRuQjtBUGdCZjtBYTNlQTtFQUFtQyxZTjhJbkI7QVBpV2hCO0FhOWVBO0VBQXFDLFlOc0ZuQjtBUDRabEI7QWFqZkE7RUFBaUMsWU4rWm5CO0FQc0ZkO0FhcGZBO0VBQWtDLFlOb1duQjtBUG9KZjtBYXZmQTtFQUFxQyxZTnBEbkI7QVAraUJsQjtBYTFmQTtFQUErQyxZTnVJbkI7QVB1WDVCO0FhN2ZBO0VBQWlDLFlOa05uQjtBUCtTZDtBYWhnQkE7RUFBaUMsWU4wU25CO0FQME5kO0FhbmdCQTtFQUFpQyxZTjZLbkI7QVAwVmQ7QWF0Z0JBO0VBQWdDLFlOeUluQjtBUGlZYjtBYXpnQkE7RUFBc0MsWU55SW5CO0FQb1luQjtBYTVnQkE7O0VBQ2lELFlOaUluQjtBUCtZOUI7QWEvZ0JBO0VBQWtDLFlOK1luQjtBUG9JZjtBYWxoQkE7RUFBcUMsWUFBQTtBYnNoQnJDO0FhcmhCQTtFQUFtQyxZTm9hbkI7QVBxSGhCO0FheGhCQTtFQUFvQyxZTmdFbkI7QVA0ZGpCO0FhM2hCQTtFQUFtQyxZTjZUbkI7QVBrT2hCO0FhOWhCQTtFQUF1QyxZTnVDbkI7QVAyZnBCO0FhamlCQTtFQUF5QyxZTm1DbkI7QVBrZ0J0QjtBYXBpQkE7RUFBb0MsWU4rYW5CO0FQeUhqQjtBYXZpQkE7RUFBMEMsWU5rZG5CO0FQeUZ2QjtBYTFpQkE7RUFBbUMsWU4wS25CO0FQb1loQjtBYTdpQkE7RUFBd0MsWU4yS25CO0FQc1lyQjtBYWhqQkE7RUFBcUMsWU4zRW5CO0FQK25CbEI7QWFuakJBO0VBQXFDLFlON0VuQjtBUG9vQmxCO0FhdGpCQTs7RUFDc0MsWU5sRW5CO0FQNG5CbkI7QWF6akJBO0VBQTJDLFlOK2tCbkI7QVBsQnhCO0FhNWpCQTtFQUE0QyxZTjRIbkI7QVBvY3pCO0FhL2pCQTtFQUF5QyxZTlRuQjtBUDRrQnRCO0FhbGtCQTtFQUFnQyxZTjJRbkI7QVAyVGI7QWFya0JBOztFQUNpQyxZTjZDbkI7QVA0aEJkO0FheGtCQTtFQUFxQyxZTmtEbkI7QVAwaEJsQjtBYTNrQkE7RUFBd0MsWU5zaUJuQjtBUHlDckI7QWE5a0JBO0VBQTBDLFlOb2lCbkI7QVA4Q3ZCO0FhamxCQTtFQUFzQyxZTjJlbkI7QVAwR25CO0FhcGxCQTtFQUFvQyxZTjhObkI7QVAwWGpCO0FhdmxCQTtFQUFxQyxZTm9jbkI7QVB1SmxCO0FhMWxCQTtFQUE0QyxZTnVSbkI7QVB1VXpCO0FhN2xCQTtFQUF1QyxZTjZoQm5CO0FQb0VwQjtBYWhtQkE7RUFBMEMsWU5zR25CO0FQOGZ2QjtBYW5tQkE7RUFBb0MsWU44Ym5CO0FQeUtqQjtBYXRtQkE7RUFBbUMsWU5xakJuQjtBUHFEaEI7QWF6bUJBO0VBQTBDLFlOZ0xuQjtBUDZidkI7QWE1bUJBO0VBQW1DLFlOdWtCbkI7QVB5Q2hCO0FhL21CQTtFQUFvQyxZTnFRbkI7QVA4V2pCO0FhbG5CQTtFQUFrQyxZTmlXbkI7QVBxUmY7QWFybkJBO0VBQXFDLFlOMmRuQjtBUDhKbEI7QWF4bkJBO0VBQXVDLFlOakRuQjtBUDZxQnBCO0FhM25CQTtFQUF5QyxZTitWbkI7QVBnU3RCO0FhOW5CQTtFQUFvQyxZTnNqQm5CO0FQNEVqQjtBYWpvQkE7O0VBQ3FDLFlOZ0duQjtBUHFpQmxCO0FhcG9CQTtFQUFtQyxZTm9LbkI7QVBvZWhCO0Fhdm9CQTtFQUFtQyxZTjBqQm5CO0FQaUZoQjtBYTFvQkE7RUFBd0MsWU5vQ25CO0FQMG1CckI7QWE3b0JBOztFQUNnQyxZTitZbkI7QVBrUWI7QWFocEJBO0VBQWtDLFlOb01uQjtBUGdkZjtBYW5wQkE7RUFBcUMsWU5yRG5CO0FQNHNCbEI7QWF0cEJBO0VBQWlDLFlOaEZuQjtBUDB1QmQ7QWF6cEJBO0VBQXdDLFlOckJuQjtBUGtyQnJCO0FhNXBCQTtFQUF5QyxZTm9MbkI7QVA0ZXRCO0FhL3BCQTtFQUF3QyxZTmtMbkI7QVBpZnJCO0FhbHFCQTtFQUFzQyxZTm1MbkI7QVBtZm5CO0FhcnFCQTtFQUF3QyxZTitLbkI7QVAwZnJCO0FheHFCQTtFQUE4QyxZTnJJbkI7QVBpekIzQjtBYTNxQkE7RUFBK0MsWU5qSW5CO0FQZ3pCNUI7QWE5cUJBO0VBQTRDLFlOakluQjtBUG16QnpCO0FhanJCQTtFQUE4QyxZTnpJbkI7QVA4ekIzQjtBYXByQkE7RUFBa0MsWU4ySm5CO0FQNmhCZjtBYXZyQkE7RUFBbUMsWU42bEJuQjtBUDhGaEI7QWExckJBO0VBQWtDLFlOcWVuQjtBUHlOZjtBYTdyQkE7RUFBbUMsWU55R25CO0FQd2xCaEI7QWFoc0JBO0VBQXNDLFlOekVuQjtBUDZ3Qm5CO0FhbnNCQTtFQUF1QyxZTmxJbkI7QVB5MEJwQjtBYXRzQkE7O0VBQ2tDLFlOaWpCbkI7QVB5SmY7QWF6c0JBOztFQUNpQyxZTjRPbkI7QVBpZWQ7QWE1c0JBO0VBQWtDLFlOZG5CO0FQOHRCZjtBYS9zQkE7RUFBa0MsWU4wR25CO0FQeW1CZjtBYWx0QkE7O0VBQ3FDLFlONlhuQjtBUHlWbEI7QWFydEJBOztFQUNvQyxZTjJGbkI7QVA4bkJqQjtBYXh0QkE7RUFBc0MsWU42U25CO0FQK2FuQjtBYTN0QkE7O0VBQ3FDLFlOcUduQjtBUDBuQmxCO0FhOXRCQTtFQUFtQyxZTmdibkI7QVBrVGhCO0FhanVCQTs7O0VBRWlDLFlObEluQjtBUHUyQmQ7QWFwdUJBO0VBQW9DLFlOc09uQjtBUGtnQmpCO0FhdnVCQTtFQUFvQyxZTm9PbkI7QVB1Z0JqQjtBYTF1QkE7RUFBMEMsWU4rYm5CO0FQK1N2QjtBYTd1QkE7RUFBc0MsWU4yZ0JuQjtBUHNPbkI7QWFodkJBO0VBQWtDLFlOdWNuQjtBUDZTZjtBYW52QkE7RUFBa0MsWU55T25CO0FQOGdCZjtBYXR2QkE7RUFBa0MsWU42Zm5CO0FQNlBmO0FhenZCQTtFQUFzQyxZTm1UbkI7QVAwY25CO0FhNXZCQTtFQUE2QyxZTm9UbkI7QVA0YzFCO0FhL3ZCQTtFQUErQyxZTmdJbkI7QVBtb0I1QjtBYWx3QkE7RUFBd0MsWU40SG5CO0FQMG9CckI7QWFyd0JBO0VBQWtDLFlOcVFuQjtBUG9nQmY7QWF4d0JBO0VBQXVDLFlOcEZuQjtBUGcyQnBCO0FhM3dCQTtFQUFxQyxZTjlFbkI7QVA2MUJsQjtBYTl3QkE7RUFBdUMsWU5yRm5CO0FQdTJCcEI7QWFqeEJBO0VBQXdDLFlOckZuQjtBUDAyQnJCO0FhcHhCQTtFQUFvQyxZTmhDbkI7QVB3ekJqQjtBYXZ4QkE7O0VBQ2lDLFlOMFluQjtBUGlaZDtBYTF4QkE7O0VBQ3NDLFlOOFluQjtBUGdabkI7QWE3eEJBOztFQUNxQyxZTjJZbkI7QVBzWmxCO0FhaHlCQTtFQUFxQyxZTlVuQjtBUDB4QmxCO0FhbnlCQTtFQUFxQyxZTnVNbkI7QVBnbUJsQjtBYXR5QkE7O0VBQ2lDLFlOcWZuQjtBUHFUZDtBYXp5QkE7O0VBQ2tDLFlOb0ZuQjtBUHl0QmY7QWE1eUJBOztFQUN1QyxZTithbkI7QVBpWXBCO0FhL3lCQTtFQUFzQyxZTjdDbkI7QVBnMkJuQjtBYWx6QkE7RUFBdUMsWU4xQ25CO0FQZzJCcEI7QWFyekJBOztFQUNpQyxZTnBJbkI7QVA2N0JkO0FheHpCQTtFQUFvQyxZTjZXbkI7QVArY2pCO0FhM3pCQTtFQUFxQyxZTnllbkI7QVBzVmxCO0FhOXpCQTs7RUFDc0MsWU5yRW5CO0FQdTRCbkI7QWFqMEJBO0VBQXdDLFlOcUxuQjtBUGdwQnJCO0FhcDBCQTtFQUFxQyxZTkduQjtBUHEwQmxCO0FhdjBCQTtFQUEyQyxZTm5FbkI7QVA4NEJ4QjtBYTEwQkE7RUFBeUMsWU5uRW5CO0FQaTVCdEI7QWE3MEJBO0VBQW9DLFlOaWZuQjtBUGdXakI7QWFoMUJBO0VBQXdDLFlOOFluQjtBUHNjckI7QWFuMUJBO0VBQXFDLFlOeVpuQjtBUDhibEI7QWF0MUJBO0VBQW1DLFlOOUpuQjtBUHcvQmhCO0FhejFCQTtFQUFtQyxZTmxFbkI7QVArNUJoQjtBYTUxQkE7RUFBb0MsWU4xQ25CO0FQMDRCakI7QWEvMUJBO0VBQXdDLFlOOEJuQjtBUHEwQnJCO0FhbDJCQTtFQUF1QyxZTjFJbkI7QVBnL0JwQjtBYXIyQkE7RUFBdUMsWU5zSG5CO0FQbXZCcEI7QWF4MkJBO0VBQXNDLFlOck9uQjtBUGlsQ25CO0FhMzJCQTtFQUFtQyxZTjRNbkI7QVBtcUJoQjtBYTkyQkE7RUFBd0MsWU5VbkI7QVB3MkJyQjtBYWozQkE7RUFBaUMsWU4zS25CO0FQZ2lDZDtBYXAzQkE7RUFBcUMsWU51Rm5CO0FQaXlCbEI7QWF2M0JBO0VBQXdDLFlOMlFuQjtBUGduQnJCO0FhMTNCQTtFQUE4QyxZTnJPbkI7QVBtbUMzQjtBYTczQkE7RUFBK0MsWU5yT25CO0FQc21DNUI7QWFoNEJBO0VBQTRDLFlOck9uQjtBUHltQ3pCO0FhbjRCQTtFQUE4QyxZTnpPbkI7QVBnbkMzQjtBYXQ0QkE7RUFBdUMsWU5yT25CO0FQK21DcEI7QWF6NEJBO0VBQXdDLFlOck9uQjtBUGtuQ3JCO0FhNTRCQTtFQUFxQyxZTnJPbkI7QVBxbkNsQjtBYS80QkE7RUFBdUMsWU56T25CO0FQNG5DcEI7QWFsNUJBO0VBQW9DLFlOcERuQjtBUDA4QmpCO0FhcjVCQTtFQUFtQyxZTjRJbkI7QVA2d0JoQjtBYXg1QkE7RUFBbUMsWU53WW5CO0FQb2hCaEI7QWEzNUJBOztFQUNtQyxZTnVNbkI7QVB3dEJoQjtBYTk1QkE7RUFBcUMsWU56R25CO0FQMmdDbEI7QWFqNkJBO0VBQXVDLFlOeVFuQjtBUDRwQnBCO0FhcDZCQTtFQUF3QyxZTnlRbkI7QVArcEJyQjtBYXY2QkE7RUFBb0MsWU4rVm5CO0FQNGtCakI7QWExNkJBO0VBQW1DLFlOOUduQjtBUDRoQ2hCO0FhNzZCQTs7RUFDa0MsWU5vUm5CO0FQNnBCZjtBYWg3QkE7RUFBdUMsWU4rQ25CO0FQcTRCcEI7QWFuN0JBO0VBQXFDLFlObUJuQjtBUG82QmxCO0FhdDdCQTtFQUEwQyxZTm9CbkI7QVBzNkJ2QjtBYXo3QkE7RUFBb0MsWU5xVW5CO0FQd25CakI7QWE1N0JBO0VBQW9DLFlOMkJuQjtBUHE2QmpCO0FhLzdCQTtFQUFrQyxZTmdMbkI7QVBteEJmO0FhbDhCQTtFQUFvQyxZTjJCbkI7QVAyNkJqQjtBYXI4QkE7RUFBdUMsWU51SG5CO0FQazFCcEI7QWF4OEJBO0VBQW1DLFlOTW5CO0FQczhCaEI7QWEzOEJBO0VBQTJDLFlOSW5CO0FQMjhCeEI7QWE5OEJBO0VBQXFDLFlONlhuQjtBUHFsQmxCO0FhajlCQTtFQUFpQyxZTmhIbkI7QVBxa0NkO0FhcDlCQTs7RUFDc0MsWU51UW5CO0FQaXRCbkI7QWF2OUJBOzs7RUFFd0MsWU5zVm5CO0FQcW9CckI7QWExOUJBO0VBQTJDLFlOd0luQjtBUHMxQnhCO0FhNzlCQTtFQUFpQyxZTmhHbkI7QVBpa0NkO0FhaCtCQTtFQUFzQyxZTnZIbkI7QVAybENuQjtBYW4rQkE7O0VBQ3lDLFlOdEpuQjtBUDZuQ3RCO0FhdCtCQTtFQUFxQyxZTnlPbkI7QVBpd0JsQjtBYXorQkE7RUFBaUMsWU4wRm5CO0FQbTVCZDtBYTUrQkE7RUFBd0MsWU4xRG5CO0FQMGlDckI7QWEvK0JBO0VBQXdDLFlOa1duQjtBUGlwQnJCO0FhbC9CQTtFQUFzQyxZTjRWbkI7QVAwcEJuQjtBYXIvQkE7RUFBbUMsWU5sRW5CO0FQMmpDaEI7QWF4L0JBO0VBQXlDLFlOZ09uQjtBUDR4QnRCO0FhMy9CQTtFQUF1QyxZTjJKbkI7QVBvMkJwQjtBYTkvQkE7RUFBNkMsWU4ySm5CO0FQdTJCMUI7QWFqZ0NBO0VBQW1DLFlOc1JuQjtBUCt1QmhCO0FhcGdDQTtFQUF1QyxZTjVMbkI7QVBvc0NwQjtBYXZnQ0E7RUFBOEMsWU54Qm5CO0FQbWlDM0I7QWExZ0NBO0VBQW1DLFlOdVBuQjtBUHV4QmhCO0FhN2dDQTtFQUFtQyxZTjZJbkI7QVBvNEJoQjtBYWhoQ0E7RUFBZ0QsWU45Sm5CO0FQa3JDN0I7QWFuaENBO0VBQWlELFlOOUpuQjtBUHFyQzlCO0FhdGhDQTtFQUE4QyxZTjlKbkI7QVB3ckMzQjtBYXpoQ0E7RUFBZ0QsWU5sS25CO0FQK3JDN0I7QWE1aENBO0VBQWtDLFlOOERuQjtBUGsrQmY7QWEvaENBO0VBQWlDLFlOckhuQjtBUHdwQ2Q7QWFsaUNBO0VBQW1DLFlOdlNuQjtBUDYwQ2hCO0FhcmlDQTtFQUF1QyxZTjJabkI7QVA4b0JwQjtBYXhpQ0E7RUFBcUMsWU5oTm5CO0FQNHZDbEI7QWEzaUNBO0VBQXVDLFlON0ZuQjtBUDRvQ3BCO0FhOWlDQTtFQUF1QyxZTjdGbkI7QVArb0NwQjtBYWpqQ0E7RUFBdUMsWU4rT25CO0FQczBCcEI7QWFwakNBO0VBQXdDLFlOaU1uQjtBUHUzQnJCO0FhdmpDQTtFQUFtQyxZTjZXbkI7QVA4c0JoQjtBYTFqQ0E7RUFBeUMsWU4wSW5CO0FQbzdCdEI7QWE3akNBO0VBQTJDLFlOMEluQjtBUHU3QnhCO0FhaGtDQTtFQUFxQyxZTnFGbkI7QVArK0JsQjtBYW5rQ0E7RUFBdUMsWU5tRm5CO0FQby9CcEI7QWF0a0NBO0VBQXlDLFlObkxuQjtBUDZ2Q3RCO0FhemtDQTtFQUEwQyxZTjBLbkI7QVBtNkJ2QjtBYTVrQ0E7RUFBaUQsWU5wRm5CO0FQb3FDOUI7QWEva0NBO0VBQXlDLFlOd1BuQjtBUDIxQnRCO0FhbGxDQTtFQUFvQyxZTmpKbkI7QVB1dUNqQjtBYXJsQ0E7O0VBQ2dELFlOL01uQjtBUHd5QzdCO0FheGxDQTs7RUFDOEMsWU45TW5CO0FQMHlDM0I7QWEzbENBOztFQUNpRCxZTmpObkI7QVBnekM5QjtBYTlsQ0E7O0VBQ2dDLFlOdkduQjtBUHlzQ2I7QWFqbUNBO0VBQWdDLFlOaENuQjtBUHFvQ2I7QWFwbUNBOztFQUNnQyxZTnFZbkI7QVBtdUJiO0Fhdm1DQTs7RUFDZ0MsWU40Q25CO0FQK2pDYjtBYTFtQ0E7Ozs7RUFHZ0MsWU5nRG5CO0FQOGpDYjtBYTdtQ0E7OztFQUVnQyxZTmlObkI7QVBnNkJiO0FhaG5DQTs7RUFDZ0MsWU4rQ25CO0FQcWtDYjtBYW5uQ0E7O0VBQ2dDLFlOM1BuQjtBUGszQ2I7QWF0bkNBO0VBQWlDLFlOaEduQjtBUDB0Q2Q7QWF6bkNBO0VBQXNDLFlOcEZuQjtBUGl0Q25CO0FhNW5DQTtFQUEyQyxZTjBQbkI7QVBzNEJ4QjtBYS9uQ0E7RUFBNEMsWU4wUG5CO0FQeTRCekI7QWFsb0NBO0VBQTRDLFlOMFBuQjtBUDQ0QnpCO0Fhcm9DQTtFQUE2QyxZTjBQbkI7QVArNEIxQjtBYXhvQ0E7RUFBNkMsWU42UG5CO0FQKzRCMUI7QWEzb0NBO0VBQThDLFlONlBuQjtBUGs1QjNCO0FhOW9DQTtFQUFzQyxZTmtVbkI7QVBnMUJuQjtBYWpwQ0E7RUFBd0MsWU44VG5CO0FQdTFCckI7QWFwcENBO0VBQTJDLFlOeWFuQjtBUCt1QnhCO0FhdnBDQTtFQUFvQyxZTnNhbkI7QVBxdkJqQjtBYTFwQ0E7RUFBaUMsWU4yWm5CO0FQbXdCZDtBYTdwQ0E7RUFBd0MsWU4yWm5CO0FQc3dCckI7QWFocUNBO0VBQXlDLFlOb2FuQjtBUGd3QnRCO0FhbnFDQTtFQUFvQyxZTnhKbkI7QVArekNqQjtBYXRxQ0E7RUFBMkMsWU44UG5CO0FQNDZCeEI7QWF6cUNBO0VBQXNDLFlOZ0JuQjtBUDZwQ25CO0FhNXFDQTtFQUFtQyxZTnBGbkI7QVBvd0NoQjtBYS9xQ0E7RUFBZ0MsWU4zV25CO0FQOGhEYjtBYWxyQ0E7RUFBc0MsWU4vUm5CO0FQcTlDbkI7QWFyckNBO0VBQTZDLFlOL1JuQjtBUHc5QzFCO0FheHJDQTtFQUFtQyxZTitVbkI7QVA2MkJoQjtBYTNyQ0E7RUFBMEMsWU4rVW5CO0FQZzNCdkI7QWE5ckNBO0VBQTRDLFlOZ0RuQjtBUGtwQ3pCO0FhanNDQTtFQUEwQyxZTmtEbkI7QVBtcEN2QjtBYXBzQ0E7RUFBNEMsWU4rQ25CO0FQeXBDekI7QWF2c0NBO0VBQTZDLFlOK0NuQjtBUDRwQzFCO0FhMXNDQTtFQUFrQyxZTmpXbkI7QVAraURmO0FhN3NDQTtFQUFvQyxZTm1ZbkI7QVA4MEJqQjtBYWh0Q0E7RUFBb0MsWU43V25CO0FQaWtEakI7QWFudENBO0VBQWtDLFlOa0NuQjtBUHFyQ2Y7QWF0dENBO0VBQXFDLFlONUtuQjtBUHM0Q2xCO0FhenRDQTtFQUFrQyxZTmdObkI7QVA2Z0NmO0FhNXRDQTtFQUF1QyxZTnhGbkI7QVB3ekNwQjtBYS90Q0E7RUFBbUMsWU40VG5CO0FQdTZCaEI7QWFsdUNBO0VBQW1DLFlOdEluQjtBUDQyQ2hCO0FhcnVDQTtFQUFpQyxZTjZDbkI7QVA0ckNkO0FheHVDQTs7RUFDcUMsWU41RG5CO0FQd3lDbEI7QWEzdUNBO0VBQWtDLFlOOFBuQjtBUGkvQmY7QWE5dUNBO0VBQW1DLFlOdUVuQjtBUDJxQ2hCO0FhanZDQTtFQUFvQyxZTjlXbkI7QVBtbURqQjtBYXB2Q0E7RUFBZ0MsWU50U25CO0FQOGhEYjtBYXZ2Q0E7RUFBK0IsWU5pV25CO0FQMDVCWjtBYTF2Q0E7RUFBa0MsWU51V25CO0FQdTVCZjtBYTd2Q0E7RUFBbUMsWU4rSW5CO0FQa25DaEI7QWFod0NBO0VBQXNDLFlOa0ZuQjtBUGtyQ25CO0FhbndDQTtFQUEyQyxZTjZObkI7QVAwaUN4QjtBYXR3Q0E7RUFBaUQsWU4vV25CO0FQeW5EOUI7QWF6d0NBO0VBQWdELFlOalhuQjtBUDhuRDdCO0FhNXdDQTs7RUFDZ0QsWU56Um5CO0FQeWlEN0I7QWEvd0NBO0VBQXlDLFlObk1uQjtBUHM5Q3RCO0FhbHhDQTtFQUF1QyxZTmlXbkI7QVBxN0JwQjtBYXJ4Q0E7RUFBeUMsWU5vVm5CO0FQcThCdEI7QWF4eENBOztFQUNnQyxZTjBTbkI7QVBrL0JiO0FhM3hDQTtFQUEwQyxZTjBHbkI7QVBxckN2QjtBYTl4Q0E7RUFBMEMsWU40TW5CO0FQc2xDdkI7QWFqeUNBO0VBQWtDLFlOc0xuQjtBUCttQ2Y7QWFweUNBO0VBQTRDLFlOekxuQjtBUGkrQ3pCO0FhdnlDQTtFQUFzQyxZTm9XbkI7QVB1OEJuQjtBYTF5Q0E7RUFBbUMsWU44RG5CO0FQZ3ZDaEI7QWE3eUNBOzs7RUFFdUMsWU44U25CO0FQbWdDcEI7QWFoekNBOztFQUMyQyxZTjFGbkI7QVA4NEN4QjtBYW56Q0E7RUFBa0MsWU5zV25CO0FQaTlCZjtBYXR6Q0E7RUFBbUMsWU5sR25CO0FQNDVDaEI7QWF6ekNBO0VBQW1DLFlOZ0huQjtBUDZzQ2hCO0FhNXpDQTtFQUEwQyxZTmlIbkI7QVArc0N2QjtBYS96Q0E7RUFBK0MsWU55Tm5CO0FQMG1DNUI7QWFsMENBO0VBQXdDLFlOdU5uQjtBUCttQ3JCO0FhcjBDQTtFQUFzQyxZTi9ObkI7QVB3aURuQjtBYXgwQ0E7RUFBaUMsWU41Tm5CO0FQd2lEZDtBYTMwQ0E7RUFBMEMsWU4yRW5CO0FQb3dDdkI7QWE5MENBO0VBQTJDLFlOeUVuQjtBUHl3Q3hCO0FhajFDQTtFQUFtQyxZTnZObkI7QVA0aURoQjtBYXAxQ0E7RUFBbUMsWU56Q25CO0FQaTRDaEI7QWF2MUNBO0VBQXFDLFlOcENuQjtBUCszQ2xCO0FhMTFDQTtFQUFnQyxZTnRMbkI7QVBvaERiO0FhNzFDQTtFQUFxQyxZTjdVbkI7QVA4cURsQjtBYWgyQ0E7RUFBa0MsWU4xUm5CO0FQOG5EZjtBYW4yQ0E7RUFBZ0MsWU5zRG5CO0FQaXpDYjtBYXQyQ0E7RUFBa0MsWU5tTG5CO0FQdXJDZjtBYXoyQ0E7RUFBaUMsWU5yUG5CO0FQa21EZDtBYTUyQ0E7RUFBa0MsWU5yUG5CO0FQcW1EZjtBYS8yQ0E7RUFBb0MsWU43V25CO0FQZ3VEakI7QWFsM0NBO0VBQTJDLFlON1duQjtBUG11RHhCO0FhcjNDQTtFQUFrQyxZTjBMbkI7QVArckNmO0FheDNDQTtFQUF5QyxZTjBMbkI7QVBrc0N0QjtBYTMzQ0E7RUFBb0MsWU55Rm5CO0FQc3lDakI7QWE5M0NBOztFQUNnQyxZTnpVbkI7QVAyc0RiO0FhajRDQTs7RUFDaUMsWU4rTW5CO0FQc3JDZDtBYXA0Q0E7RUFBaUMsWU40UG5CO0FQNG9DZDtBYXY0Q0E7RUFBb0MsWU51S25CO0FQb3VDakI7QWExNENBO0VBQXVDLFlOdFBuQjtBUG9vRHBCO0FhNzRDQTtFQUF1QyxZTmlLbkI7QVBndkNwQjtBYWg1Q0E7RUFBcUMsWU45UG5CO0FQa3BEbEI7QWFuNUNBO0VBQXVDLFlOL0xuQjtBUHNsRHBCO0FhdDVDQTtFQUF3QyxZTnhMbkI7QVBrbERyQjtBYXo1Q0E7RUFBeUMsWU5yTW5CO0FQa21EdEI7QWE1NUNBO0VBQThDLFlOL0xuQjtBUCtsRDNCO0FhLzVDQTs7O0VBRXlDLFlOeE1uQjtBUDJtRHRCO0FhbDZDQTs7RUFDMkMsWU45TW5CO0FQb25EeEI7QWFyNkNBOztFQUN5QyxZTi9NbkI7QVB3bkR0QjtBYXg2Q0E7O0VBQ3lDLFlOcE1uQjtBUGduRHRCO0FhMzZDQTtFQUF3QyxZTmpObkI7QVBnb0RyQjtBYTk2Q0E7RUFBaUMsWU51Um5CO0FQMnBDZDtBYWo3Q0E7RUFBb0MsWU41U25CO0FQaXVEakI7QWFwN0NBO0VBQXFDLFlOOUVuQjtBUHNnRGxCO0FhdjdDQTs7Ozs7RUFJc0MsWU5uRW5CO0FQOC9DbkI7QWExN0NBO0VBQTJDLFlOL1RuQjtBUDZ2RHhCO0FhNzdDQTs7O0VBRWtDLFlOcURuQjtBUDQ0Q2Y7QWFoOENBOztFQUNtQyxZTm5RbkI7QVB1c0RoQjtBYW44Q0E7RUFBdUMsWU56S25CO0FQZ25EcEI7QWF0OENBO0VBQWdDLFlOM0tuQjtBUHFuRGI7QWF6OENBOzs7RUFFd0MsWU54Sm5CO0FQcW1EckI7QWE1OENBO0VBQTBDLFlOMktuQjtBUHF5Q3ZCO0FhLzhDQTtFQUErQixZTmlDbkI7QVBrN0NaO0FhbDlDQTs7RUFDbUMsWU4wUW5CO0FQNHNDaEI7QWFyOUNBOztFQUN3QyxZTlZuQjtBUG0rQ3JCO0FheDlDQTs7RUFDMEMsWU5YbkI7QVB1K0N2QjtBYTM5Q0E7RUFBb0MsWU4xSW5CO0FQeW1EakI7QWE5OUNBO0VBQXdDLFlObFZuQjtBUG96RHJCO0FhaitDQTtFQUFtQyxZTmpKbkI7QVBzbkRoQjtBYXArQ0E7RUFBc0MsWU5ibkI7QVBxL0NuQjtBYXYrQ0E7RUFBb0MsWU4rRm5CO0FQNDRDakI7QWExK0NBO0VBQXNDLFlOdUVuQjtBUHU2Q25CO0FhNytDQTtFQUE2QyxZTnVFbkI7QVAwNkMxQjtBYWgvQ0E7RUFBaUMsWU56Wm5CO0FQNjREZDtBYW4vQ0E7O0VBQ3FDLFlONU1uQjtBUG1zRGxCO0FhdC9DQTtFQUFnQyxZTjBNbkI7QVBnekNiO0Fhei9DQTtFQUF1QyxZTnhhbkI7QVBxNkRwQjtBYTUvQ0E7RUFBaUMsWU5JbkI7QVA0L0NkO0FhLy9DQTtFQUF1QyxZTnVGbkI7QVA0NkNwQjtBYWxnREE7RUFBbUMsWU4yTW5CO0FQMnpDaEI7QWFyZ0RBO0VBQWlDLFlOK1FuQjtBUDB2Q2Q7QWF4Z0RBO0VBQXdDLFlOekNuQjtBUHFqRHJCO0FhM2dEQTtFQUFpQyxZTndQbkI7QVB1eENkO0FhOWdEQTtFQUF1QyxZTnJabkI7QVB1NkRwQjtBYWpoREE7RUFBbUMsWU52Qm5CO0FQNGlEaEI7QWFwaERBO0VBQTBDLFlOM0xuQjtBUG10RHZCO0FhdmhEQTtFQUFvQyxZTjVYbkI7QVB1NURqQjtBYTFoREE7RUFBMEMsWU5oWW5CO0FQODVEdkI7QWE3aERBO0VBQXdDLFlOblluQjtBUG82RHJCO0FhaGlEQTtFQUFvQyxZTnRZbkI7QVAwNkRqQjtBYW5pREE7RUFBc0MsWU5sWW5CO0FQeTZEbkI7QWF0aURBO0VBQXNDLFlObFluQjtBUDQ2RG5CO0FhemlEQTtFQUF1QyxZTjNibkI7QVB3K0RwQjtBYTVpREE7RUFBeUMsWU4zYm5CO0FQMitEdEI7QWEvaURBO0VBQWtDLFlOK0tuQjtBUG80Q2Y7QWFsakRBO0VBQXNDLFlOblZuQjtBUHk0RG5CO0FhcmpEQTtFQUErQixZTjlkbkI7QVB1aEVaO0FheGpEQTtFQUF1QyxZTjVSbkI7QVB3MURwQjtBYTNqREE7RUFBd0MsWU4vQ25CO0FQOG1EckI7QWE5akRBO0VBQTBDLFlOOWJuQjtBUGdnRXZCO0FhamtEQTtFQUF1QyxZTnRmbkI7QVAyakVwQjtBYXBrREE7RUFBc0MsWU4vQm5CO0FQdW1EbkI7QWF2a0RBO0VBQXVDLFlOekhuQjtBUG9zRHBCO0FhMWtEQTtFQUFtQyxZTnZJbkI7QVBxdERoQjtBYTdrREE7RUFBMEMsWU52SW5CO0FQd3REdkI7QWFobERBO0VBQXVDLFlONEpuQjtBUHc3Q3BCO0FhbmxEQTtFQUFzQyxZTjRKbkI7QVAyN0NuQjtBYXRsREE7RUFBb0MsWU54Y25CO0FQa2lFakI7QWF6bERBO0VBQWdDLFlOamJuQjtBUDhnRWI7QWE1bERBO0VBQW9DLFlOdkpuQjtBUHV2RGpCO0FhL2xEQTtFQUFzQyxZTjNnQm5CO0FQOG1FbkI7QWFsbURBO0VBQStCLFlON1puQjtBUG1nRVo7QWFybURBOzs7RUFFZ0MsWU56S25CO0FQa3hEYjtBYXhtREE7RUFBcUMsWU5wR25CO0FQZ3REbEI7QWEzbURBO0VBQXVDLFlOeGJuQjtBUHVpRXBCO0FhOW1EQTtFQUEyQyxZTjVXbkI7QVA4OUR4QjtBYWpuREE7RUFBcUMsWU45Vm5CO0FQbTlEbEI7QWFwbkRBO0VBQXFDLFlOOVBuQjtBUHMzRGxCO0Fhdm5EQTtFQUFvQyxZTnJKbkI7QVBneERqQjtBYTFuREE7RUFBbUMsWU5lbkI7QVArbURoQjtBYTduREE7RUFBeUMsWU4yQm5CO0FQc21EdEI7QWFob0RBO0VBQXdDLFlOb0NuQjtBUGdtRHJCO0Fhbm9EQTtFQUFxQyxZTnFDbkI7QVBrbURsQjtBYXRvREE7RUFBc0MsWU41YW5CO0FQc2pFbkI7QWF6b0RBO0VBQTRDLFlOOWFuQjtBUDJqRXpCO0FhNW9EQTtFQUFvQyxZTi9WbkI7QVArK0RqQjtBYS9vREE7RUFBaUMsWU5vQm5CO0FQK25EZDtBYWxwREE7RUFBd0MsWU44S25CO0FQdytDckI7QWFycERBO0VBQXVDLFlOL0ZuQjtBUHd2RHBCO0FheHBEQTtFQUF3QyxZTjZFbkI7QVAra0RyQjtBYTNwREE7RUFBc0MsWU45TW5CO0FQNjJEbkI7QWE5cERBO0VBQWtDLFlOK0tuQjtBUG0vQ2Y7QWFqcURBO0VBQWlDLFlON0huQjtBUGt5RGQ7QWFwcURBO0VBQW9DLFlObkhuQjtBUDJ4RGpCO0FhdnFEQTs7RUFDd0MsWU5rSW5CO0FQeWlEckI7QWExcURBO0VBQTRDLFlOa0luQjtBUDRpRHpCO0FhN3FEQTtFQUF5QyxZTjBLbkI7QVB1Z0R0QjtBYWhyREE7RUFBd0MsWU5sSW5CO0FQc3pEckI7QWFuckRBO0VBQXVDLFlOeUtuQjtBUDhnRHBCO0FhdHJEQTtFQUF3QyxZTm5JbkI7QVA2ekRyQjtBYXpyREE7RUFBMEMsWU5sSW5CO0FQK3pEdkI7QWE1ckRBO0VBQTBDLFlOcEluQjtBUG8wRHZCO0FhL3JEQTtFQUFtQyxZTjFHbkI7QVA2eURoQjtBYWxzREE7RUFBdUMsWU43UW5CO0FQbTlEcEI7QWFyc0RBO0VBQThDLFlOMVVuQjtBUG1oRTNCO0FheHNEQTtFQUF3QyxZTnpFbkI7QVBxeERyQjtBYTNzREE7RUFBcUMsWU5rTG5CO0FQNmhEbEI7QWE5c0RBO0VBQW1DLFlOWG5CO0FQNnREaEI7QWFqdERBO0VBQXNDLFlOdUpuQjtBUDhqRG5CO0FhcHREQTtFQUF1QyxZTndKbkI7QVBna0RwQjtBYXZ0REE7O0VBQ2dDLFlOL2ZuQjtBUDB0RWI7QWExdERBO0VBQW9DLFlONEpuQjtBUGtrRGpCO0FhN3REQTtFQUFrQyxZTjhHbkI7QVBtbkRmO0FhaHVEQTtFQUFtQyxZTndEbkI7QVA0cURoQjtBYW51REE7RUFBbUMsWU45SW5CO0FQcTNEaEI7QWF0dURBOztFQUN5QyxZTjBMbkI7QVBnakR0QjtBYXp1REE7RUFBMEMsWU5qSG5CO0FQODFEdkI7QWE1dURBO0VBQXFDLFlOckhuQjtBUHEyRGxCO0FhL3VEQTtFQUF5QyxZTm5XbkI7QVBzbEV0QjtBYWx2REE7OztFQUV5QyxZTi9nQm5CO0FQcXdFdEI7QWFydkRBOztFQUNtRCxZTjlnQm5CO0FQdXdFaEM7QWF4dkRBOztFQUN5QyxZTmxoQm5CO0FQOHdFdEI7QWEzdkRBOztFQUM0QyxZTm5oQm5CO0FQa3hFekI7QWE5dkRBOztFQUMwQyxZTnhoQm5CO0FQMHhFdkI7QWFqd0RBO0VBQTBDLFlOM0luQjtBUGc1RHZCO0FhcHdEQTtFQUFxQyxZTjNPbkI7QVBtL0RsQjtBYXZ3REE7RUFBeUMsWU54SW5CO0FQbTVEdEI7QWExd0RBO0VBQTJDLFlOeEluQjtBUHM1RHhCO0FhN3dEQTtFQUF3QyxZTndCbkI7QVB5dkRyQjtBYWh4REE7RUFBMEMsWU53Qm5CO0FQNHZEdkI7QWFueERBO0VBQW1DLFlOL2RuQjtBUHN2RWhCO0FhdHhEQTtFQUEyQyxZTmxlbkI7QVA0dkV4QjtBYXp4REE7RUFBa0MsWU5wY25CO0FQaXVFZjtBYTV4REE7RUFBMEMsWU5sakJuQjtBUGsxRXZCO0FhL3hEQTtFQUF3QyxZTnhQbkI7QVAyaEVyQjtBYWx5REE7O0VBQzRDLFlOelBuQjtBUCtoRXpCO0FhcnlEQTs7RUFDMkMsWU43UG5CO0FQc2lFeEI7QWF4eURBOztFQUMwQyxZTmhRbkI7QVA0aUV2QjtBYTN5REE7RUFBc0MsWU5yUW5CO0FQb2pFbkI7QWE5eURBOztFQUN3QyxZTnhSbkI7QVAwa0VyQjtBYWp6REE7O0VBQ3lDLFlON1JuQjtBUGtsRXRCO0FhcHpEQTtFQUE0QyxZTjFSbkI7QVBrbEV6QjtBYXZ6REE7RUFBMEMsWU5wU25CO0FQK2xFdkI7QWExekRBO0VBQXlDLFlOM1JuQjtBUHlsRXRCO0FhN3pEQTtFQUEyQyxZTi9SbkI7QVBnbUV4QjtBYWgwREE7RUFBeUMsWU5qU25CO0FQcW1FdEI7QWFuMERBO0VBQXNDLFlOK0RuQjtBUHd3RG5CO0FhdDBEQTtFQUF1QyxZTi9GbkI7QVB5NkRwQjtBYXowREE7RUFBNkMsWU4vYm5CO0FQNHdFMUI7QWE1MERBO0VBQStCLFlOdFVuQjtBUHNwRVo7QWEvMERBO0VBQXNDLFlOdFVuQjtBUHlwRW5CO0FhbDFEQTtFQUF3QyxZTmtFbkI7QVBveERyQjtBYXIxREE7RUFBMEMsWU5yS25CO0FQOC9EdkI7QWF4MURBO0VBQWlELFlOcktuQjtBUGlnRTlCO0FhMzFEQTtFQUF1QyxZTjVVbkI7QVAycUVwQjtBYTkxREE7RUFBd0MsWU53SG5CO0FQMHVEckI7QWFqMkRBO0VBQW1DLFlObkZuQjtBUHc3RGhCO0FhcDJEQTtFQUFtQyxZTnplbkI7QVBpMUVoQjtBYXYyREE7RUFBb0MsWU45V25CO0FQeXRFakI7QWExMkRBO0VBQWtDLFlOeEtuQjtBUHNoRWY7QWE3MkRBO0VBQThDLFlOcFFuQjtBUHFuRTNCO0FhaDNEQTs7RUFDdUMsWU5TbkI7QVAyMkRwQjtBYW4zREE7RUFBbUMsWU5qZG5CO0FQdzBFaEI7QWF0M0RBO0VBQWtDLFlOem9CbkI7QVBtZ0ZmO0FhejNEQTtFQUFtQyxZTi9uQm5CO0FQNC9FaEI7QWE1M0RBO0VBQTRDLFlOM2hCbkI7QVAyNUV6QjtBYS8zREE7RUFBNkMsWU45aEJuQjtBUGk2RTFCO0FhbDREQTtFQUE2QyxZTjVoQm5CO0FQazZFMUI7QWFyNERBO0VBQTZDLFlOamlCbkI7QVAwNkUxQjtBYXg0REE7RUFBcUMsWU5wUm5CO0FQZ3FFbEI7QWEzNERBO0VBQW9DLFlONU5uQjtBUDJtRWpCO0FhOTREQTtFQUFzQyxZTjVObkI7QVA4bUVuQjtBYWo1REE7RUFBa0MsWU4vTm5CO0FQb25FZjtBYXA1REE7RUFBZ0MsWU5sT25CO0FQMG5FYjtBYXY1REE7RUFBdUMsWU5wZW5CO0FQKzNFcEI7QWExNURBO0VBQXlDLFlOcGVuQjtBUGs0RXRCO0FhNzVEQTtFQUFrQyxZTnRTbkI7QVB1c0VmO0FhaDZEQTtFQUFrQyxZTmlGbkI7QVBtMURmO0FhbjZEQTtFQUFzQyxZTmxrQm5CO0FQeStFbkI7QWF0NkRBO0VBQXNDLFlOclhuQjtBUCt4RW5CO0FhejZEQTtFQUF5QyxZTnBJbkI7QVBpakV0QjtBYTU2REE7RUFBaUMsWU5wY25CO0FQbzNFZDtBYS82REE7RUFBNEMsWU5oZW5CO0FQbTVFekI7QWFsN0RBO0VBQXFDLFlOcGZuQjtBUDA2RWxCO0FhcjdEQTtFQUFpQyxZTmxObkI7QVAyb0VkO0FheDdEQTtFQUF5QyxZTjFYbkI7QVBzekV0QjtBYTM3REE7RUFBZ0MsWU5vRG5CO0FQMjREYjtBYTk3REE7RUFBeUMsWU4zSm5CO0FQNmxFdEI7QWFqOERBO0VBQXFDLFlOek5uQjtBUDhwRWxCO0FhcDhEQTtFQUFtQyxZTmxIbkI7QVAwakVoQjtBYXY4REE7RUFBeUMsWU43TG5CO0FQd29FdEI7QWExOERBO0VBQTJDLFlON0xuQjtBUDJvRXhCO0FhNzhEQTtFQUF3QyxZTjNDbkI7QVA0L0RyQjtBYWg5REE7RUFBMEMsWU4zQ25CO0FQKy9EdkI7QWFuOURBO0VBQXlDLFlOckduQjtBUDRqRXRCO0FhdDlEQTtFQUE0QyxZTnJHbkI7QVArakV6QjtBYXo5REE7RUFBb0MsWU43VW5CO0FQMHlFakI7QWE1OURBO0VBQXNDLFlObmxCbkI7QVBtakZuQjtBYS85REE7RUFBd0MsWU5ubEJuQjtBUHNqRnJCO0FhbCtEQTtFQUFvQyxZTi9MbkI7QVBxcUVqQjtBYXIrREE7RUFBbUMsWU5sWG5CO0FQMjFFaEI7QWF4K0RBO0VBQXVDLFlOa0ZuQjtBUDA1RHBCO0FhMytEQTtFQUFvQyxZTm1GbkI7QVA0NURqQjtBYTkrREE7RUFBbUMsWU45Y25CO0FQZzhFaEI7QWFqL0RBO0VBQTZDLFlOMkJuQjtBUDA5RDFCO0FhcC9EQTtFQUEyQyxZTm1FbkI7QVBxN0R4QjtBYXYvREE7RUFBOEMsWU54S25CO0FQbXFFM0I7QWExL0RBO0VBQWtDLFlOOWxCbkI7QVA0bEZmO0FhNy9EQTtFQUE4QyxZTnRvQm5CO0FQdW9GM0I7QWFoZ0VBO0VBQWlELFlOcURuQjtBUCs4RDlCO0FhbmdFQTtFQUFvQyxZTnhsQm5CO0FQK2xGakI7QWF0Z0VBO0VBQXdELFlONW9CbkI7QVBzcEZyQztBYXpnRUE7O0VBQ2dFLFlOOXFCbkI7QVAyckY3QztBYTVnRUE7OztFQUVpQyxZTnZmbkI7QVB1Z0ZkO0FhL2dFQTtFQUFrQyxZTmhZbkI7QVBtNUVmO0FhbGhFQTtFQUFvQyxZTmhZbkI7QVBzNUVqQjtBYXJoRUE7O0VBQzBDLFlOMUhuQjtBUG1wRXZCO0FheGhFQTtFQUF1QyxZTnpSbkI7QVBxekVwQjtBYTNoRUE7RUFBbUMsWU5pQ25CO0FQOC9EaEI7QWE5aEVBO0VBQTBDLFlOaUNuQjtBUGlnRXZCO0FhamlFQTtFQUFxQyxZTmxIbkI7QVB1cEVsQjtBYXBpRUE7RUFBMkMsWU5sSG5CO0FQMHBFeEI7QWF2aUVBO0VBQTRDLFlObEhuQjtBUDZwRXpCO0FhMWlFQTtFQUF1QyxZTnJObkI7QVBtd0VwQjtBYTdpRUE7RUFBd0MsWU5wYm5CO0FQcStFckI7QWFoakVBO0VBQWtDLFlObUVuQjtBUGkvRGY7QWFuakVBO0VBQXNDLFlOcERuQjtBUDJtRW5CO0FhdGpFQTs7RUFDaUQsWU56WW5CO0FQbThFOUI7QWF6akVBOztFQUN5QyxZTjdhbkI7QVAwK0V0QjtBYTVqRUE7RUFBd0MsWU50WG5CO0FQczdFckI7QWEvakVBO0VBQTBDLFlObGZuQjtBUHFqRnZCO0FhbGtFQTtFQUE0QyxZTmxmbkI7QVB3akZ6QjtBYXJrRUE7RUFBbUMsWU50VG5CO0FQKzNFaEI7QWF4a0VBO0VBQXlDLFlOcHRCbkI7QVBneUZ0QjtBYTNrRUE7RUFBMkMsWU5wdEJuQjtBUG15RnhCO0FhOWtFQTs7RUFDeUMsWU5ydEJuQjtBUHV5RnRCO0FhamxFQTs7RUFDMkMsWU50dEJuQjtBUDJ5RnhCO0FhcGxFQTtFQUF3QyxZTkpuQjtBUDRsRXJCO0FhdmxFQTtFQUEwQyxZTkpuQjtBUCtsRXZCO0FhMWxFQTtFQUFtQyxZTkhuQjtBUGltRWhCO0FhN2xFQTtFQUFxQyxZTjNXbkI7QVA0OEVsQjtBYWhtRUE7O0VBQ29DLFlONVduQjtBUGc5RWpCO0Fhbm1FQTs7RUFDc0MsWU43V25CO0FQbzlFbkI7QWF0bUVBO0VBQWtDLFlOdE5uQjtBUGcwRWY7QWF6bUVBO0VBQTJDLFlOM2JuQjtBUHdpRnhCO0FhNW1FQTtFQUFxQyxZTnRGbkI7QVBzc0VsQjtBYS9tRUE7OztFQUU2QyxZTnhFbkI7QVAyckUxQjtBYWxuRUE7O0VBQ3VELFlOdkVuQjtBUDZyRXBDO0Fhcm5FQTs7RUFDNkMsWU4zRW5CO0FQb3NFMUI7QWF4bkVBOztFQUNnRCxZTjVFbkI7QVB3c0U3QjtBYTNuRUE7O0VBQzhDLFlOakZuQjtBUGd0RTNCO0FhOW5FQTtFQUFtQyxZTjNLbkI7QVA2eUVoQjtBYWpvRUE7OztFQUVpQyxZTnpyQm5CO0FQOHpGZDtBYXBvRUE7RUFBb0MsWU5sUG5CO0FQMDNFakI7QWF2b0VBO0VBQTRDLFlOS25CO0FQc29FekI7QWExb0VBO0VBQTRDLFlOS25CO0FQeW9FekI7QWE3b0VBO0VBQTJDLFlOS25CO0FQNG9FeEI7QWFocEVBOztFQUN5QyxZTkRuQjtBUHFwRXRCO0FhbnBFQTs7RUFDMkMsWU5GbkI7QVB5cEV4QjtBYXRwRUE7RUFBcUMsWU54c0JuQjtBUGsyRmxCO0FhenBFQTtFQUFpQyxZTnBibkI7QVBpbEZkO0FhNXBFQTtFQUFpQyxZTjFoQm5CO0FQMHJGZDtBYS9wRUE7RUFBaUMsWU54WW5CO0FQMmlGZDtBYWxxRUE7RUFBb0MsWU4vT25CO0FQcTVFakI7QWFycUVBO0VBQW9DLFlOemlCbkI7QVBrdEZqQjtBYXhxRUE7RUFBc0MsWU5qVW5CO0FQNitFbkI7QWEzcUVBO0VBQXdDLFlON0tuQjtBUDQxRXJCO0FhOXFFQTtFQUF3QyxZTmhJbkI7QVBrekVyQjtBYWpyRUE7RUFBdUMsWU5KbkI7QVB5ckVwQjtBYXByRUE7RUFBbUMsWU54VW5CO0FQZ2dGaEI7QWN6OEZBO0VIOEJFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FYKzZGRjtBV3I2RkU7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBWHU2Rko7QWU3OUZBO0VBQ0UsZUFBQTtBZmcrRkY7QWU3OUZBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FmZytGRjtBZS85RkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QWZpK0ZKO0FlNzlGQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBZmcrRkY7QWU5OUZFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QWZnK0ZKO0FlLzlGSTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBZmkrRk47QWVuOUZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QWZxOUZSO0FlbDlGTTtFQUVFLFVBQUE7QWZtOUZSO0FlaDlGTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBZms5RlI7QWVoOUZRO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBZms5RlY7QWUvOEZZO0VBQ0UsbUJBQUE7QWZpOUZkO0FlNzhGVTtFQUNFLG1CQUFBO0FmKzhGWjtBZTE4Rk07RUFDRSxtQkFBQTtBZjQ4RlI7QWUxOEZRO0VBQ0UseUJBQUE7QWY0OEZWO0FldjhGSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QWZ5OEZOO0FldDhGSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBZnc4Rk47QWV2OEZNO0VBQ0U7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtFZXY4Rk07SUFDRSxlQUFBO0VmeThGUjtBQUNGO0FldDhGTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBZnc4RlI7QWVyOEZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QWZ1OEZSO0FlbjhGSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBZnE4Rk47QWVwOEZNO0VBQ0U7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0VmczhGUjtFZXA4Rk07SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0VmczhGUjtBQUNGO0FlbjhGTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBZnE4RlI7QWVsOEZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QWZvOEZSO0FlaDhGSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBZms4Rk47QWVqOEZNO0VBQ0U7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtFZWo4Rk07SUFDRSxlQUFBO0VmbThGUjtBQUNGO0FlaDhGTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBZms4RlI7QWUvN0ZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QWZpOEZSO0FlNzdGSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBZis3Rk47QWU5N0ZNO0VBSEY7SUFhSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTtFZjQ4Rk47RWVyOUZNO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtFZnU5RlI7RWVyOUZNO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFZnU5RlI7QUFDRjtBZS83Rk07RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QWZpOEZSO0FlOTdGTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FmZzhGUjtBZTU3Rkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QWY4N0ZOO0FlMzdGSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBZjY3Rk47QWV6N0ZNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FmMjdGUjtBZXY3RkU7RUFDRSxxQkFBQTtBZnk3Rko7QUFydkdBO0VBQ0UscUJBQUE7QUF3dkdGO0FBcHZHRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBc3ZHSiIsImZpbGUiOiJhbmd1bGFyLWVkaXRvci10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlXCI7XG5cbi5zZWxlY3QtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyBib3JkZXI6ICMwMDAwNjYgc29saWQ7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIC8vIHBhZGRpbmc6IGF1dG87XG4gICYuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgfVxufVxuIiwiLyohXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxuICovXG5cbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJtaXhpbnNcIjtcbkBpbXBvcnQgXCJwYXRoXCI7XG5AaW1wb3J0IFwiY29yZVwiO1xuQGltcG9ydCBcImxhcmdlclwiO1xuQGltcG9ydCBcImZpeGVkLXdpZHRoXCI7XG5AaW1wb3J0IFwibGlzdFwiO1xuQGltcG9ydCBcImJvcmRlcmVkLXB1bGxlZFwiO1xuQGltcG9ydCBcImFuaW1hdGVkXCI7XG5AaW1wb3J0IFwicm90YXRlZC1mbGlwcGVkXCI7XG5AaW1wb3J0IFwic3RhY2tlZFwiO1xuQGltcG9ydCBcImljb25zXCI7XG5AaW1wb3J0IFwic2NyZWVuLXJlYWRlclwiO1xuIiwiLyogRk9OVCBQQVRIXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gIHNyYzogdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9I3skZmEtdmVyc2lvbn0nKTtcbiAgc3JjOiB1cmwoJyN7JGZhLWZvbnQtcGF0aH0vZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj0jeyRmYS12ZXJzaW9ufScpIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoJyN7JGZhLWZvbnQtcGF0aH0vZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJyN7JGZhLWZvbnQtcGF0aH0vZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj0jeyRmYS12ZXJzaW9ufScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICB1cmwoJyN7JGZhLWZvbnQtcGF0aH0vZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj0jeyRmYS12ZXJzaW9ufSNmb250YXdlc29tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuLy8gIHNyYzogdXJsKCcjeyRmYS1mb250LXBhdGh9L0ZvbnRBd2Vzb21lLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTsgLy8gdXNlZCB3aGVuIGRldmVsb3BpbmcgZm9udHNcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIiwiLy8gQmFzZSBDbGFzcyBEZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi4jeyRmYS1jc3MtcHJlZml4fSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgI3skZmEtZm9udC1zaXplLWJhc2V9LyN7JGZhLWxpbmUtaGVpZ2h0LWJhc2V9IEZvbnRBd2Vzb21lOyAvLyBzaG9ydGVuaW5nIGZvbnQgZGVjbGFyYXRpb25cbiAgZm9udC1zaXplOiBpbmhlcml0OyAvLyBjYW4ndCBoYXZlIGZvbnQtc2l6ZSBpbmhlcml0IG9uIGxpbmUgYWJvdmUsIHNvIG5lZWQgdG8gb3ZlcnJpZGVcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87IC8vIG9wdGltaXplbGVnaWJpbGl0eSB0aHJvd3MgdGhpbmdzIG9mZiAjMTA5NFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxufVxuIiwiLy8gSWNvbiBTaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xuLiN7JGZhLWNzcy1wcmVmaXh9LWxnIHtcbiAgZm9udC1zaXplOiAoNGVtIC8gMyk7XG4gIGxpbmUtaGVpZ2h0OiAoM2VtIC8gNCk7XG4gIHZlcnRpY2FsLWFsaWduOiAtMTUlO1xufVxuLiN7JGZhLWNzcy1wcmVmaXh9LTJ4IHsgZm9udC1zaXplOiAyZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS0zeCB7IGZvbnQtc2l6ZTogM2VtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tNHggeyBmb250LXNpemU6IDRlbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTV4IHsgZm9udC1zaXplOiA1ZW07IH1cbiIsIi8vIEZpeGVkIFdpZHRoIEljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uI3skZmEtY3NzLXByZWZpeH0tZncge1xuICB3aWR0aDogKDE4ZW0gLyAxNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi8vIExpc3QgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogJGZhLWxpLXdpZHRoO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gID4gbGkgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbn1cbi4jeyRmYS1jc3MtcHJlZml4fS1saSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLSRmYS1saS13aWR0aDtcbiAgd2lkdGg6ICRmYS1saS13aWR0aDtcbiAgdG9wOiAoMmVtIC8gMTQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYuI3skZmEtY3NzLXByZWZpeH0tbGcge1xuICAgIGxlZnQ6IC0kZmEtbGktd2lkdGggKyAoNGVtIC8gMTQpO1xuICB9XG59XG4iLCIvLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRmYS1mb250LXBhdGg6ICAgICAgICBcIi4uL2ZvbnRzXCIgIWRlZmF1bHQ7XG4kZmEtZm9udC1zaXplLWJhc2U6ICAgMTRweCAhZGVmYXVsdDtcbiRmYS1saW5lLWhlaWdodC1iYXNlOiAxICFkZWZhdWx0O1xuLy8kZmEtZm9udC1wYXRoOiAgICAgICAgXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250c1wiICFkZWZhdWx0OyAvLyBmb3IgcmVmZXJlbmNpbmcgQm9vdHN0cmFwIENETiBmb250IGZpbGVzIGRpcmVjdGx5XG4kZmEtY3NzLXByZWZpeDogICAgICAgZmEgIWRlZmF1bHQ7XG4kZmEtdmVyc2lvbjogICAgICAgICAgXCI0LjcuMFwiICFkZWZhdWx0O1xuJGZhLWJvcmRlci1jb2xvcjogICAgICNlZWUgIWRlZmF1bHQ7XG4kZmEtaW52ZXJzZTogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRmYS1saS13aWR0aDogICAgICAgICAoMzBlbSAvIDE0KSAhZGVmYXVsdDtcblxuJGZhLXZhci01MDBweDogXCJcXGYyNmVcIjtcbiRmYS12YXItYWRkcmVzcy1ib29rOiBcIlxcZjJiOVwiO1xuJGZhLXZhci1hZGRyZXNzLWJvb2stbzogXCJcXGYyYmFcIjtcbiRmYS12YXItYWRkcmVzcy1jYXJkOiBcIlxcZjJiYlwiO1xuJGZhLXZhci1hZGRyZXNzLWNhcmQtbzogXCJcXGYyYmNcIjtcbiRmYS12YXItYWRqdXN0OiBcIlxcZjA0MlwiO1xuJGZhLXZhci1hZG46IFwiXFxmMTcwXCI7XG4kZmEtdmFyLWFsaWduLWNlbnRlcjogXCJcXGYwMzdcIjtcbiRmYS12YXItYWxpZ24tanVzdGlmeTogXCJcXGYwMzlcIjtcbiRmYS12YXItYWxpZ24tbGVmdDogXCJcXGYwMzZcIjtcbiRmYS12YXItYWxpZ24tcmlnaHQ6IFwiXFxmMDM4XCI7XG4kZmEtdmFyLWFtYXpvbjogXCJcXGYyNzBcIjtcbiRmYS12YXItYW1idWxhbmNlOiBcIlxcZjBmOVwiO1xuJGZhLXZhci1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzogXCJcXGYyYTNcIjtcbiRmYS12YXItYW5jaG9yOiBcIlxcZjEzZFwiO1xuJGZhLXZhci1hbmRyb2lkOiBcIlxcZjE3YlwiO1xuJGZhLXZhci1hbmdlbGxpc3Q6IFwiXFxmMjA5XCI7XG4kZmEtdmFyLWFuZ2xlLWRvdWJsZS1kb3duOiBcIlxcZjEwM1wiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtbGVmdDogXCJcXGYxMDBcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLXJpZ2h0OiBcIlxcZjEwMVwiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtdXA6IFwiXFxmMTAyXCI7XG4kZmEtdmFyLWFuZ2xlLWRvd246IFwiXFxmMTA3XCI7XG4kZmEtdmFyLWFuZ2xlLWxlZnQ6IFwiXFxmMTA0XCI7XG4kZmEtdmFyLWFuZ2xlLXJpZ2h0OiBcIlxcZjEwNVwiO1xuJGZhLXZhci1hbmdsZS11cDogXCJcXGYxMDZcIjtcbiRmYS12YXItYXBwbGU6IFwiXFxmMTc5XCI7XG4kZmEtdmFyLWFyY2hpdmU6IFwiXFxmMTg3XCI7XG4kZmEtdmFyLWFyZWEtY2hhcnQ6IFwiXFxmMWZlXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1kb3duOiBcIlxcZjBhYlwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtbGVmdDogXCJcXGYwYThcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tZG93bjogXCJcXGYwMWFcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tbGVmdDogXCJcXGYxOTBcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tcmlnaHQ6IFwiXFxmMThlXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLXVwOiBcIlxcZjAxYlwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtcmlnaHQ6IFwiXFxmMGE5XCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS11cDogXCJcXGYwYWFcIjtcbiRmYS12YXItYXJyb3ctZG93bjogXCJcXGYwNjNcIjtcbiRmYS12YXItYXJyb3ctbGVmdDogXCJcXGYwNjBcIjtcbiRmYS12YXItYXJyb3ctcmlnaHQ6IFwiXFxmMDYxXCI7XG4kZmEtdmFyLWFycm93LXVwOiBcIlxcZjA2MlwiO1xuJGZhLXZhci1hcnJvd3M6IFwiXFxmMDQ3XCI7XG4kZmEtdmFyLWFycm93cy1hbHQ6IFwiXFxmMGIyXCI7XG4kZmEtdmFyLWFycm93cy1oOiBcIlxcZjA3ZVwiO1xuJGZhLXZhci1hcnJvd3MtdjogXCJcXGYwN2RcIjtcbiRmYS12YXItYXNsLWludGVycHJldGluZzogXCJcXGYyYTNcIjtcbiRmYS12YXItYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOiBcIlxcZjJhMlwiO1xuJGZhLXZhci1hc3RlcmlzazogXCJcXGYwNjlcIjtcbiRmYS12YXItYXQ6IFwiXFxmMWZhXCI7XG4kZmEtdmFyLWF1ZGlvLWRlc2NyaXB0aW9uOiBcIlxcZjI5ZVwiO1xuJGZhLXZhci1hdXRvbW9iaWxlOiBcIlxcZjFiOVwiO1xuJGZhLXZhci1iYWNrd2FyZDogXCJcXGYwNGFcIjtcbiRmYS12YXItYmFsYW5jZS1zY2FsZTogXCJcXGYyNGVcIjtcbiRmYS12YXItYmFuOiBcIlxcZjA1ZVwiO1xuJGZhLXZhci1iYW5kY2FtcDogXCJcXGYyZDVcIjtcbiRmYS12YXItYmFuazogXCJcXGYxOWNcIjtcbiRmYS12YXItYmFyLWNoYXJ0OiBcIlxcZjA4MFwiO1xuJGZhLXZhci1iYXItY2hhcnQtbzogXCJcXGYwODBcIjtcbiRmYS12YXItYmFyY29kZTogXCJcXGYwMmFcIjtcbiRmYS12YXItYmFyczogXCJcXGYwYzlcIjtcbiRmYS12YXItYmF0aDogXCJcXGYyY2RcIjtcbiRmYS12YXItYmF0aHR1YjogXCJcXGYyY2RcIjtcbiRmYS12YXItYmF0dGVyeTogXCJcXGYyNDBcIjtcbiRmYS12YXItYmF0dGVyeS0wOiBcIlxcZjI0NFwiO1xuJGZhLXZhci1iYXR0ZXJ5LTE6IFwiXFxmMjQzXCI7XG4kZmEtdmFyLWJhdHRlcnktMjogXCJcXGYyNDJcIjtcbiRmYS12YXItYmF0dGVyeS0zOiBcIlxcZjI0MVwiO1xuJGZhLXZhci1iYXR0ZXJ5LTQ6IFwiXFxmMjQwXCI7XG4kZmEtdmFyLWJhdHRlcnktZW1wdHk6IFwiXFxmMjQ0XCI7XG4kZmEtdmFyLWJhdHRlcnktZnVsbDogXCJcXGYyNDBcIjtcbiRmYS12YXItYmF0dGVyeS1oYWxmOiBcIlxcZjI0MlwiO1xuJGZhLXZhci1iYXR0ZXJ5LXF1YXJ0ZXI6IFwiXFxmMjQzXCI7XG4kZmEtdmFyLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6IFwiXFxmMjQxXCI7XG4kZmEtdmFyLWJlZDogXCJcXGYyMzZcIjtcbiRmYS12YXItYmVlcjogXCJcXGYwZmNcIjtcbiRmYS12YXItYmVoYW5jZTogXCJcXGYxYjRcIjtcbiRmYS12YXItYmVoYW5jZS1zcXVhcmU6IFwiXFxmMWI1XCI7XG4kZmEtdmFyLWJlbGw6IFwiXFxmMGYzXCI7XG4kZmEtdmFyLWJlbGwtbzogXCJcXGYwYTJcIjtcbiRmYS12YXItYmVsbC1zbGFzaDogXCJcXGYxZjZcIjtcbiRmYS12YXItYmVsbC1zbGFzaC1vOiBcIlxcZjFmN1wiO1xuJGZhLXZhci1iaWN5Y2xlOiBcIlxcZjIwNlwiO1xuJGZhLXZhci1iaW5vY3VsYXJzOiBcIlxcZjFlNVwiO1xuJGZhLXZhci1iaXJ0aGRheS1jYWtlOiBcIlxcZjFmZFwiO1xuJGZhLXZhci1iaXRidWNrZXQ6IFwiXFxmMTcxXCI7XG4kZmEtdmFyLWJpdGJ1Y2tldC1zcXVhcmU6IFwiXFxmMTcyXCI7XG4kZmEtdmFyLWJpdGNvaW46IFwiXFxmMTVhXCI7XG4kZmEtdmFyLWJsYWNrLXRpZTogXCJcXGYyN2VcIjtcbiRmYS12YXItYmxpbmQ6IFwiXFxmMjlkXCI7XG4kZmEtdmFyLWJsdWV0b290aDogXCJcXGYyOTNcIjtcbiRmYS12YXItYmx1ZXRvb3RoLWI6IFwiXFxmMjk0XCI7XG4kZmEtdmFyLWJvbGQ6IFwiXFxmMDMyXCI7XG4kZmEtdmFyLWJvbHQ6IFwiXFxmMGU3XCI7XG4kZmEtdmFyLWJvbWI6IFwiXFxmMWUyXCI7XG4kZmEtdmFyLWJvb2s6IFwiXFxmMDJkXCI7XG4kZmEtdmFyLWJvb2ttYXJrOiBcIlxcZjAyZVwiO1xuJGZhLXZhci1ib29rbWFyay1vOiBcIlxcZjA5N1wiO1xuJGZhLXZhci1icmFpbGxlOiBcIlxcZjJhMVwiO1xuJGZhLXZhci1icmllZmNhc2U6IFwiXFxmMGIxXCI7XG4kZmEtdmFyLWJ0YzogXCJcXGYxNWFcIjtcbiRmYS12YXItYnVnOiBcIlxcZjE4OFwiO1xuJGZhLXZhci1idWlsZGluZzogXCJcXGYxYWRcIjtcbiRmYS12YXItYnVpbGRpbmctbzogXCJcXGYwZjdcIjtcbiRmYS12YXItYnVsbGhvcm46IFwiXFxmMGExXCI7XG4kZmEtdmFyLWJ1bGxzZXllOiBcIlxcZjE0MFwiO1xuJGZhLXZhci1idXM6IFwiXFxmMjA3XCI7XG4kZmEtdmFyLWJ1eXNlbGxhZHM6IFwiXFxmMjBkXCI7XG4kZmEtdmFyLWNhYjogXCJcXGYxYmFcIjtcbiRmYS12YXItY2FsY3VsYXRvcjogXCJcXGYxZWNcIjtcbiRmYS12YXItY2FsZW5kYXI6IFwiXFxmMDczXCI7XG4kZmEtdmFyLWNhbGVuZGFyLWNoZWNrLW86IFwiXFxmMjc0XCI7XG4kZmEtdmFyLWNhbGVuZGFyLW1pbnVzLW86IFwiXFxmMjcyXCI7XG4kZmEtdmFyLWNhbGVuZGFyLW86IFwiXFxmMTMzXCI7XG4kZmEtdmFyLWNhbGVuZGFyLXBsdXMtbzogXCJcXGYyNzFcIjtcbiRmYS12YXItY2FsZW5kYXItdGltZXMtbzogXCJcXGYyNzNcIjtcbiRmYS12YXItY2FtZXJhOiBcIlxcZjAzMFwiO1xuJGZhLXZhci1jYW1lcmEtcmV0cm86IFwiXFxmMDgzXCI7XG4kZmEtdmFyLWNhcjogXCJcXGYxYjlcIjtcbiRmYS12YXItY2FyZXQtZG93bjogXCJcXGYwZDdcIjtcbiRmYS12YXItY2FyZXQtbGVmdDogXCJcXGYwZDlcIjtcbiRmYS12YXItY2FyZXQtcmlnaHQ6IFwiXFxmMGRhXCI7XG4kZmEtdmFyLWNhcmV0LXNxdWFyZS1vLWRvd246IFwiXFxmMTUwXCI7XG4kZmEtdmFyLWNhcmV0LXNxdWFyZS1vLWxlZnQ6IFwiXFxmMTkxXCI7XG4kZmEtdmFyLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OiBcIlxcZjE1MlwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby11cDogXCJcXGYxNTFcIjtcbiRmYS12YXItY2FyZXQtdXA6IFwiXFxmMGQ4XCI7XG4kZmEtdmFyLWNhcnQtYXJyb3ctZG93bjogXCJcXGYyMThcIjtcbiRmYS12YXItY2FydC1wbHVzOiBcIlxcZjIxN1wiO1xuJGZhLXZhci1jYzogXCJcXGYyMGFcIjtcbiRmYS12YXItY2MtYW1leDogXCJcXGYxZjNcIjtcbiRmYS12YXItY2MtZGluZXJzLWNsdWI6IFwiXFxmMjRjXCI7XG4kZmEtdmFyLWNjLWRpc2NvdmVyOiBcIlxcZjFmMlwiO1xuJGZhLXZhci1jYy1qY2I6IFwiXFxmMjRiXCI7XG4kZmEtdmFyLWNjLW1hc3RlcmNhcmQ6IFwiXFxmMWYxXCI7XG4kZmEtdmFyLWNjLXBheXBhbDogXCJcXGYxZjRcIjtcbiRmYS12YXItY2Mtc3RyaXBlOiBcIlxcZjFmNVwiO1xuJGZhLXZhci1jYy12aXNhOiBcIlxcZjFmMFwiO1xuJGZhLXZhci1jZXJ0aWZpY2F0ZTogXCJcXGYwYTNcIjtcbiRmYS12YXItY2hhaW46IFwiXFxmMGMxXCI7XG4kZmEtdmFyLWNoYWluLWJyb2tlbjogXCJcXGYxMjdcIjtcbiRmYS12YXItY2hlY2s6IFwiXFxmMDBjXCI7XG4kZmEtdmFyLWNoZWNrLWNpcmNsZTogXCJcXGYwNThcIjtcbiRmYS12YXItY2hlY2stY2lyY2xlLW86IFwiXFxmMDVkXCI7XG4kZmEtdmFyLWNoZWNrLXNxdWFyZTogXCJcXGYxNGFcIjtcbiRmYS12YXItY2hlY2stc3F1YXJlLW86IFwiXFxmMDQ2XCI7XG4kZmEtdmFyLWNoZXZyb24tY2lyY2xlLWRvd246IFwiXFxmMTNhXCI7XG4kZmEtdmFyLWNoZXZyb24tY2lyY2xlLWxlZnQ6IFwiXFxmMTM3XCI7XG4kZmEtdmFyLWNoZXZyb24tY2lyY2xlLXJpZ2h0OiBcIlxcZjEzOFwiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS11cDogXCJcXGYxMzlcIjtcbiRmYS12YXItY2hldnJvbi1kb3duOiBcIlxcZjA3OFwiO1xuJGZhLXZhci1jaGV2cm9uLWxlZnQ6IFwiXFxmMDUzXCI7XG4kZmEtdmFyLWNoZXZyb24tcmlnaHQ6IFwiXFxmMDU0XCI7XG4kZmEtdmFyLWNoZXZyb24tdXA6IFwiXFxmMDc3XCI7XG4kZmEtdmFyLWNoaWxkOiBcIlxcZjFhZVwiO1xuJGZhLXZhci1jaHJvbWU6IFwiXFxmMjY4XCI7XG4kZmEtdmFyLWNpcmNsZTogXCJcXGYxMTFcIjtcbiRmYS12YXItY2lyY2xlLW86IFwiXFxmMTBjXCI7XG4kZmEtdmFyLWNpcmNsZS1vLW5vdGNoOiBcIlxcZjFjZVwiO1xuJGZhLXZhci1jaXJjbGUtdGhpbjogXCJcXGYxZGJcIjtcbiRmYS12YXItY2xpcGJvYXJkOiBcIlxcZjBlYVwiO1xuJGZhLXZhci1jbG9jay1vOiBcIlxcZjAxN1wiO1xuJGZhLXZhci1jbG9uZTogXCJcXGYyNGRcIjtcbiRmYS12YXItY2xvc2U6IFwiXFxmMDBkXCI7XG4kZmEtdmFyLWNsb3VkOiBcIlxcZjBjMlwiO1xuJGZhLXZhci1jbG91ZC1kb3dubG9hZDogXCJcXGYwZWRcIjtcbiRmYS12YXItY2xvdWQtdXBsb2FkOiBcIlxcZjBlZVwiO1xuJGZhLXZhci1jbnk6IFwiXFxmMTU3XCI7XG4kZmEtdmFyLWNvZGU6IFwiXFxmMTIxXCI7XG4kZmEtdmFyLWNvZGUtZm9yazogXCJcXGYxMjZcIjtcbiRmYS12YXItY29kZXBlbjogXCJcXGYxY2JcIjtcbiRmYS12YXItY29kaWVwaWU6IFwiXFxmMjg0XCI7XG4kZmEtdmFyLWNvZmZlZTogXCJcXGYwZjRcIjtcbiRmYS12YXItY29nOiBcIlxcZjAxM1wiO1xuJGZhLXZhci1jb2dzOiBcIlxcZjA4NVwiO1xuJGZhLXZhci1jb2x1bW5zOiBcIlxcZjBkYlwiO1xuJGZhLXZhci1jb21tZW50OiBcIlxcZjA3NVwiO1xuJGZhLXZhci1jb21tZW50LW86IFwiXFxmMGU1XCI7XG4kZmEtdmFyLWNvbW1lbnRpbmc6IFwiXFxmMjdhXCI7XG4kZmEtdmFyLWNvbW1lbnRpbmctbzogXCJcXGYyN2JcIjtcbiRmYS12YXItY29tbWVudHM6IFwiXFxmMDg2XCI7XG4kZmEtdmFyLWNvbW1lbnRzLW86IFwiXFxmMGU2XCI7XG4kZmEtdmFyLWNvbXBhc3M6IFwiXFxmMTRlXCI7XG4kZmEtdmFyLWNvbXByZXNzOiBcIlxcZjA2NlwiO1xuJGZhLXZhci1jb25uZWN0ZGV2ZWxvcDogXCJcXGYyMGVcIjtcbiRmYS12YXItY29udGFvOiBcIlxcZjI2ZFwiO1xuJGZhLXZhci1jb3B5OiBcIlxcZjBjNVwiO1xuJGZhLXZhci1jb3B5cmlnaHQ6IFwiXFxmMWY5XCI7XG4kZmEtdmFyLWNyZWF0aXZlLWNvbW1vbnM6IFwiXFxmMjVlXCI7XG4kZmEtdmFyLWNyZWRpdC1jYXJkOiBcIlxcZjA5ZFwiO1xuJGZhLXZhci1jcmVkaXQtY2FyZC1hbHQ6IFwiXFxmMjgzXCI7XG4kZmEtdmFyLWNyb3A6IFwiXFxmMTI1XCI7XG4kZmEtdmFyLWNyb3NzaGFpcnM6IFwiXFxmMDViXCI7XG4kZmEtdmFyLWNzczM6IFwiXFxmMTNjXCI7XG4kZmEtdmFyLWN1YmU6IFwiXFxmMWIyXCI7XG4kZmEtdmFyLWN1YmVzOiBcIlxcZjFiM1wiO1xuJGZhLXZhci1jdXQ6IFwiXFxmMGM0XCI7XG4kZmEtdmFyLWN1dGxlcnk6IFwiXFxmMGY1XCI7XG4kZmEtdmFyLWRhc2hib2FyZDogXCJcXGYwZTRcIjtcbiRmYS12YXItZGFzaGN1YmU6IFwiXFxmMjEwXCI7XG4kZmEtdmFyLWRhdGFiYXNlOiBcIlxcZjFjMFwiO1xuJGZhLXZhci1kZWFmOiBcIlxcZjJhNFwiO1xuJGZhLXZhci1kZWFmbmVzczogXCJcXGYyYTRcIjtcbiRmYS12YXItZGVkZW50OiBcIlxcZjAzYlwiO1xuJGZhLXZhci1kZWxpY2lvdXM6IFwiXFxmMWE1XCI7XG4kZmEtdmFyLWRlc2t0b3A6IFwiXFxmMTA4XCI7XG4kZmEtdmFyLWRldmlhbnRhcnQ6IFwiXFxmMWJkXCI7XG4kZmEtdmFyLWRpYW1vbmQ6IFwiXFxmMjE5XCI7XG4kZmEtdmFyLWRpZ2c6IFwiXFxmMWE2XCI7XG4kZmEtdmFyLWRvbGxhcjogXCJcXGYxNTVcIjtcbiRmYS12YXItZG90LWNpcmNsZS1vOiBcIlxcZjE5MlwiO1xuJGZhLXZhci1kb3dubG9hZDogXCJcXGYwMTlcIjtcbiRmYS12YXItZHJpYmJibGU6IFwiXFxmMTdkXCI7XG4kZmEtdmFyLWRyaXZlcnMtbGljZW5zZTogXCJcXGYyYzJcIjtcbiRmYS12YXItZHJpdmVycy1saWNlbnNlLW86IFwiXFxmMmMzXCI7XG4kZmEtdmFyLWRyb3Bib3g6IFwiXFxmMTZiXCI7XG4kZmEtdmFyLWRydXBhbDogXCJcXGYxYTlcIjtcbiRmYS12YXItZWRnZTogXCJcXGYyODJcIjtcbiRmYS12YXItZWRpdDogXCJcXGYwNDRcIjtcbiRmYS12YXItZWVyY2FzdDogXCJcXGYyZGFcIjtcbiRmYS12YXItZWplY3Q6IFwiXFxmMDUyXCI7XG4kZmEtdmFyLWVsbGlwc2lzLWg6IFwiXFxmMTQxXCI7XG4kZmEtdmFyLWVsbGlwc2lzLXY6IFwiXFxmMTQyXCI7XG4kZmEtdmFyLWVtcGlyZTogXCJcXGYxZDFcIjtcbiRmYS12YXItZW52ZWxvcGU6IFwiXFxmMGUwXCI7XG4kZmEtdmFyLWVudmVsb3BlLW86IFwiXFxmMDAzXCI7XG4kZmEtdmFyLWVudmVsb3BlLW9wZW46IFwiXFxmMmI2XCI7XG4kZmEtdmFyLWVudmVsb3BlLW9wZW4tbzogXCJcXGYyYjdcIjtcbiRmYS12YXItZW52ZWxvcGUtc3F1YXJlOiBcIlxcZjE5OVwiO1xuJGZhLXZhci1lbnZpcmE6IFwiXFxmMjk5XCI7XG4kZmEtdmFyLWVyYXNlcjogXCJcXGYxMmRcIjtcbiRmYS12YXItZXRzeTogXCJcXGYyZDdcIjtcbiRmYS12YXItZXVyOiBcIlxcZjE1M1wiO1xuJGZhLXZhci1ldXJvOiBcIlxcZjE1M1wiO1xuJGZhLXZhci1leGNoYW5nZTogXCJcXGYwZWNcIjtcbiRmYS12YXItZXhjbGFtYXRpb246IFwiXFxmMTJhXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uLWNpcmNsZTogXCJcXGYwNmFcIjtcbiRmYS12YXItZXhjbGFtYXRpb24tdHJpYW5nbGU6IFwiXFxmMDcxXCI7XG4kZmEtdmFyLWV4cGFuZDogXCJcXGYwNjVcIjtcbiRmYS12YXItZXhwZWRpdGVkc3NsOiBcIlxcZjIzZVwiO1xuJGZhLXZhci1leHRlcm5hbC1saW5rOiBcIlxcZjA4ZVwiO1xuJGZhLXZhci1leHRlcm5hbC1saW5rLXNxdWFyZTogXCJcXGYxNGNcIjtcbiRmYS12YXItZXllOiBcIlxcZjA2ZVwiO1xuJGZhLXZhci1leWUtc2xhc2g6IFwiXFxmMDcwXCI7XG4kZmEtdmFyLWV5ZWRyb3BwZXI6IFwiXFxmMWZiXCI7XG4kZmEtdmFyLWZhOiBcIlxcZjJiNFwiO1xuJGZhLXZhci1mYWNlYm9vazogXCJcXGYwOWFcIjtcbiRmYS12YXItZmFjZWJvb2stZjogXCJcXGYwOWFcIjtcbiRmYS12YXItZmFjZWJvb2stb2ZmaWNpYWw6IFwiXFxmMjMwXCI7XG4kZmEtdmFyLWZhY2Vib29rLXNxdWFyZTogXCJcXGYwODJcIjtcbiRmYS12YXItZmFzdC1iYWNrd2FyZDogXCJcXGYwNDlcIjtcbiRmYS12YXItZmFzdC1mb3J3YXJkOiBcIlxcZjA1MFwiO1xuJGZhLXZhci1mYXg6IFwiXFxmMWFjXCI7XG4kZmEtdmFyLWZlZWQ6IFwiXFxmMDllXCI7XG4kZmEtdmFyLWZlbWFsZTogXCJcXGYxODJcIjtcbiRmYS12YXItZmlnaHRlci1qZXQ6IFwiXFxmMGZiXCI7XG4kZmEtdmFyLWZpbGU6IFwiXFxmMTViXCI7XG4kZmEtdmFyLWZpbGUtYXJjaGl2ZS1vOiBcIlxcZjFjNlwiO1xuJGZhLXZhci1maWxlLWF1ZGlvLW86IFwiXFxmMWM3XCI7XG4kZmEtdmFyLWZpbGUtY29kZS1vOiBcIlxcZjFjOVwiO1xuJGZhLXZhci1maWxlLWV4Y2VsLW86IFwiXFxmMWMzXCI7XG4kZmEtdmFyLWZpbGUtaW1hZ2UtbzogXCJcXGYxYzVcIjtcbiRmYS12YXItZmlsZS1tb3ZpZS1vOiBcIlxcZjFjOFwiO1xuJGZhLXZhci1maWxlLW86IFwiXFxmMDE2XCI7XG4kZmEtdmFyLWZpbGUtcGRmLW86IFwiXFxmMWMxXCI7XG4kZmEtdmFyLWZpbGUtcGhvdG8tbzogXCJcXGYxYzVcIjtcbiRmYS12YXItZmlsZS1waWN0dXJlLW86IFwiXFxmMWM1XCI7XG4kZmEtdmFyLWZpbGUtcG93ZXJwb2ludC1vOiBcIlxcZjFjNFwiO1xuJGZhLXZhci1maWxlLXNvdW5kLW86IFwiXFxmMWM3XCI7XG4kZmEtdmFyLWZpbGUtdGV4dDogXCJcXGYxNWNcIjtcbiRmYS12YXItZmlsZS10ZXh0LW86IFwiXFxmMGY2XCI7XG4kZmEtdmFyLWZpbGUtdmlkZW8tbzogXCJcXGYxYzhcIjtcbiRmYS12YXItZmlsZS13b3JkLW86IFwiXFxmMWMyXCI7XG4kZmEtdmFyLWZpbGUtemlwLW86IFwiXFxmMWM2XCI7XG4kZmEtdmFyLWZpbGVzLW86IFwiXFxmMGM1XCI7XG4kZmEtdmFyLWZpbG06IFwiXFxmMDA4XCI7XG4kZmEtdmFyLWZpbHRlcjogXCJcXGYwYjBcIjtcbiRmYS12YXItZmlyZTogXCJcXGYwNmRcIjtcbiRmYS12YXItZmlyZS1leHRpbmd1aXNoZXI6IFwiXFxmMTM0XCI7XG4kZmEtdmFyLWZpcmVmb3g6IFwiXFxmMjY5XCI7XG4kZmEtdmFyLWZpcnN0LW9yZGVyOiBcIlxcZjJiMFwiO1xuJGZhLXZhci1mbGFnOiBcIlxcZjAyNFwiO1xuJGZhLXZhci1mbGFnLWNoZWNrZXJlZDogXCJcXGYxMWVcIjtcbiRmYS12YXItZmxhZy1vOiBcIlxcZjExZFwiO1xuJGZhLXZhci1mbGFzaDogXCJcXGYwZTdcIjtcbiRmYS12YXItZmxhc2s6IFwiXFxmMGMzXCI7XG4kZmEtdmFyLWZsaWNrcjogXCJcXGYxNmVcIjtcbiRmYS12YXItZmxvcHB5LW86IFwiXFxmMGM3XCI7XG4kZmEtdmFyLWZvbGRlcjogXCJcXGYwN2JcIjtcbiRmYS12YXItZm9sZGVyLW86IFwiXFxmMTE0XCI7XG4kZmEtdmFyLWZvbGRlci1vcGVuOiBcIlxcZjA3Y1wiO1xuJGZhLXZhci1mb2xkZXItb3Blbi1vOiBcIlxcZjExNVwiO1xuJGZhLXZhci1mb250OiBcIlxcZjAzMVwiO1xuJGZhLXZhci1mb250LWF3ZXNvbWU6IFwiXFxmMmI0XCI7XG4kZmEtdmFyLWZvbnRpY29uczogXCJcXGYyODBcIjtcbiRmYS12YXItZm9ydC1hd2Vzb21lOiBcIlxcZjI4NlwiO1xuJGZhLXZhci1mb3J1bWJlZTogXCJcXGYyMTFcIjtcbiRmYS12YXItZm9yd2FyZDogXCJcXGYwNGVcIjtcbiRmYS12YXItZm91cnNxdWFyZTogXCJcXGYxODBcIjtcbiRmYS12YXItZnJlZS1jb2RlLWNhbXA6IFwiXFxmMmM1XCI7XG4kZmEtdmFyLWZyb3duLW86IFwiXFxmMTE5XCI7XG4kZmEtdmFyLWZ1dGJvbC1vOiBcIlxcZjFlM1wiO1xuJGZhLXZhci1nYW1lcGFkOiBcIlxcZjExYlwiO1xuJGZhLXZhci1nYXZlbDogXCJcXGYwZTNcIjtcbiRmYS12YXItZ2JwOiBcIlxcZjE1NFwiO1xuJGZhLXZhci1nZTogXCJcXGYxZDFcIjtcbiRmYS12YXItZ2VhcjogXCJcXGYwMTNcIjtcbiRmYS12YXItZ2VhcnM6IFwiXFxmMDg1XCI7XG4kZmEtdmFyLWdlbmRlcmxlc3M6IFwiXFxmMjJkXCI7XG4kZmEtdmFyLWdldC1wb2NrZXQ6IFwiXFxmMjY1XCI7XG4kZmEtdmFyLWdnOiBcIlxcZjI2MFwiO1xuJGZhLXZhci1nZy1jaXJjbGU6IFwiXFxmMjYxXCI7XG4kZmEtdmFyLWdpZnQ6IFwiXFxmMDZiXCI7XG4kZmEtdmFyLWdpdDogXCJcXGYxZDNcIjtcbiRmYS12YXItZ2l0LXNxdWFyZTogXCJcXGYxZDJcIjtcbiRmYS12YXItZ2l0aHViOiBcIlxcZjA5YlwiO1xuJGZhLXZhci1naXRodWItYWx0OiBcIlxcZjExM1wiO1xuJGZhLXZhci1naXRodWItc3F1YXJlOiBcIlxcZjA5MlwiO1xuJGZhLXZhci1naXRsYWI6IFwiXFxmMjk2XCI7XG4kZmEtdmFyLWdpdHRpcDogXCJcXGYxODRcIjtcbiRmYS12YXItZ2xhc3M6IFwiXFxmMDAwXCI7XG4kZmEtdmFyLWdsaWRlOiBcIlxcZjJhNVwiO1xuJGZhLXZhci1nbGlkZS1nOiBcIlxcZjJhNlwiO1xuJGZhLXZhci1nbG9iZTogXCJcXGYwYWNcIjtcbiRmYS12YXItZ29vZ2xlOiBcIlxcZjFhMFwiO1xuJGZhLXZhci1nb29nbGUtcGx1czogXCJcXGYwZDVcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXMtY2lyY2xlOiBcIlxcZjJiM1wiO1xuJGZhLXZhci1nb29nbGUtcGx1cy1vZmZpY2lhbDogXCJcXGYyYjNcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXMtc3F1YXJlOiBcIlxcZjBkNFwiO1xuJGZhLXZhci1nb29nbGUtd2FsbGV0OiBcIlxcZjFlZVwiO1xuJGZhLXZhci1ncmFkdWF0aW9uLWNhcDogXCJcXGYxOWRcIjtcbiRmYS12YXItZ3JhdGlwYXk6IFwiXFxmMTg0XCI7XG4kZmEtdmFyLWdyYXY6IFwiXFxmMmQ2XCI7XG4kZmEtdmFyLWdyb3VwOiBcIlxcZjBjMFwiO1xuJGZhLXZhci1oLXNxdWFyZTogXCJcXGYwZmRcIjtcbiRmYS12YXItaGFja2VyLW5ld3M6IFwiXFxmMWQ0XCI7XG4kZmEtdmFyLWhhbmQtZ3JhYi1vOiBcIlxcZjI1NVwiO1xuJGZhLXZhci1oYW5kLWxpemFyZC1vOiBcIlxcZjI1OFwiO1xuJGZhLXZhci1oYW5kLW8tZG93bjogXCJcXGYwYTdcIjtcbiRmYS12YXItaGFuZC1vLWxlZnQ6IFwiXFxmMGE1XCI7XG4kZmEtdmFyLWhhbmQtby1yaWdodDogXCJcXGYwYTRcIjtcbiRmYS12YXItaGFuZC1vLXVwOiBcIlxcZjBhNlwiO1xuJGZhLXZhci1oYW5kLXBhcGVyLW86IFwiXFxmMjU2XCI7XG4kZmEtdmFyLWhhbmQtcGVhY2UtbzogXCJcXGYyNWJcIjtcbiRmYS12YXItaGFuZC1wb2ludGVyLW86IFwiXFxmMjVhXCI7XG4kZmEtdmFyLWhhbmQtcm9jay1vOiBcIlxcZjI1NVwiO1xuJGZhLXZhci1oYW5kLXNjaXNzb3JzLW86IFwiXFxmMjU3XCI7XG4kZmEtdmFyLWhhbmQtc3BvY2stbzogXCJcXGYyNTlcIjtcbiRmYS12YXItaGFuZC1zdG9wLW86IFwiXFxmMjU2XCI7XG4kZmEtdmFyLWhhbmRzaGFrZS1vOiBcIlxcZjJiNVwiO1xuJGZhLXZhci1oYXJkLW9mLWhlYXJpbmc6IFwiXFxmMmE0XCI7XG4kZmEtdmFyLWhhc2h0YWc6IFwiXFxmMjkyXCI7XG4kZmEtdmFyLWhkZC1vOiBcIlxcZjBhMFwiO1xuJGZhLXZhci1oZWFkZXI6IFwiXFxmMWRjXCI7XG4kZmEtdmFyLWhlYWRwaG9uZXM6IFwiXFxmMDI1XCI7XG4kZmEtdmFyLWhlYXJ0OiBcIlxcZjAwNFwiO1xuJGZhLXZhci1oZWFydC1vOiBcIlxcZjA4YVwiO1xuJGZhLXZhci1oZWFydGJlYXQ6IFwiXFxmMjFlXCI7XG4kZmEtdmFyLWhpc3Rvcnk6IFwiXFxmMWRhXCI7XG4kZmEtdmFyLWhvbWU6IFwiXFxmMDE1XCI7XG4kZmEtdmFyLWhvc3BpdGFsLW86IFwiXFxmMGY4XCI7XG4kZmEtdmFyLWhvdGVsOiBcIlxcZjIzNlwiO1xuJGZhLXZhci1ob3VyZ2xhc3M6IFwiXFxmMjU0XCI7XG4kZmEtdmFyLWhvdXJnbGFzcy0xOiBcIlxcZjI1MVwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtMjogXCJcXGYyNTJcIjtcbiRmYS12YXItaG91cmdsYXNzLTM6IFwiXFxmMjUzXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1lbmQ6IFwiXFxmMjUzXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1oYWxmOiBcIlxcZjI1MlwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtbzogXCJcXGYyNTBcIjtcbiRmYS12YXItaG91cmdsYXNzLXN0YXJ0OiBcIlxcZjI1MVwiO1xuJGZhLXZhci1ob3V6ejogXCJcXGYyN2NcIjtcbiRmYS12YXItaHRtbDU6IFwiXFxmMTNiXCI7XG4kZmEtdmFyLWktY3Vyc29yOiBcIlxcZjI0NlwiO1xuJGZhLXZhci1pZC1iYWRnZTogXCJcXGYyYzFcIjtcbiRmYS12YXItaWQtY2FyZDogXCJcXGYyYzJcIjtcbiRmYS12YXItaWQtY2FyZC1vOiBcIlxcZjJjM1wiO1xuJGZhLXZhci1pbHM6IFwiXFxmMjBiXCI7XG4kZmEtdmFyLWltYWdlOiBcIlxcZjAzZVwiO1xuJGZhLXZhci1pbWRiOiBcIlxcZjJkOFwiO1xuJGZhLXZhci1pbmJveDogXCJcXGYwMWNcIjtcbiRmYS12YXItaW5kZW50OiBcIlxcZjAzY1wiO1xuJGZhLXZhci1pbmR1c3RyeTogXCJcXGYyNzVcIjtcbiRmYS12YXItaW5mbzogXCJcXGYxMjlcIjtcbiRmYS12YXItaW5mby1jaXJjbGU6IFwiXFxmMDVhXCI7XG4kZmEtdmFyLWlucjogXCJcXGYxNTZcIjtcbiRmYS12YXItaW5zdGFncmFtOiBcIlxcZjE2ZFwiO1xuJGZhLXZhci1pbnN0aXR1dGlvbjogXCJcXGYxOWNcIjtcbiRmYS12YXItaW50ZXJuZXQtZXhwbG9yZXI6IFwiXFxmMjZiXCI7XG4kZmEtdmFyLWludGVyc2V4OiBcIlxcZjIyNFwiO1xuJGZhLXZhci1pb3hob3N0OiBcIlxcZjIwOFwiO1xuJGZhLXZhci1pdGFsaWM6IFwiXFxmMDMzXCI7XG4kZmEtdmFyLWpvb21sYTogXCJcXGYxYWFcIjtcbiRmYS12YXItanB5OiBcIlxcZjE1N1wiO1xuJGZhLXZhci1qc2ZpZGRsZTogXCJcXGYxY2NcIjtcbiRmYS12YXIta2V5OiBcIlxcZjA4NFwiO1xuJGZhLXZhci1rZXlib2FyZC1vOiBcIlxcZjExY1wiO1xuJGZhLXZhci1rcnc6IFwiXFxmMTU5XCI7XG4kZmEtdmFyLWxhbmd1YWdlOiBcIlxcZjFhYlwiO1xuJGZhLXZhci1sYXB0b3A6IFwiXFxmMTA5XCI7XG4kZmEtdmFyLWxhc3RmbTogXCJcXGYyMDJcIjtcbiRmYS12YXItbGFzdGZtLXNxdWFyZTogXCJcXGYyMDNcIjtcbiRmYS12YXItbGVhZjogXCJcXGYwNmNcIjtcbiRmYS12YXItbGVhbnB1YjogXCJcXGYyMTJcIjtcbiRmYS12YXItbGVnYWw6IFwiXFxmMGUzXCI7XG4kZmEtdmFyLWxlbW9uLW86IFwiXFxmMDk0XCI7XG4kZmEtdmFyLWxldmVsLWRvd246IFwiXFxmMTQ5XCI7XG4kZmEtdmFyLWxldmVsLXVwOiBcIlxcZjE0OFwiO1xuJGZhLXZhci1saWZlLWJvdXk6IFwiXFxmMWNkXCI7XG4kZmEtdmFyLWxpZmUtYnVveTogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlmZS1yaW5nOiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWZlLXNhdmVyOiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWdodGJ1bGItbzogXCJcXGYwZWJcIjtcbiRmYS12YXItbGluZS1jaGFydDogXCJcXGYyMDFcIjtcbiRmYS12YXItbGluazogXCJcXGYwYzFcIjtcbiRmYS12YXItbGlua2VkaW46IFwiXFxmMGUxXCI7XG4kZmEtdmFyLWxpbmtlZGluLXNxdWFyZTogXCJcXGYwOGNcIjtcbiRmYS12YXItbGlub2RlOiBcIlxcZjJiOFwiO1xuJGZhLXZhci1saW51eDogXCJcXGYxN2NcIjtcbiRmYS12YXItbGlzdDogXCJcXGYwM2FcIjtcbiRmYS12YXItbGlzdC1hbHQ6IFwiXFxmMDIyXCI7XG4kZmEtdmFyLWxpc3Qtb2w6IFwiXFxmMGNiXCI7XG4kZmEtdmFyLWxpc3QtdWw6IFwiXFxmMGNhXCI7XG4kZmEtdmFyLWxvY2F0aW9uLWFycm93OiBcIlxcZjEyNFwiO1xuJGZhLXZhci1sb2NrOiBcIlxcZjAyM1wiO1xuJGZhLXZhci1sb25nLWFycm93LWRvd246IFwiXFxmMTc1XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctbGVmdDogXCJcXGYxNzdcIjtcbiRmYS12YXItbG9uZy1hcnJvdy1yaWdodDogXCJcXGYxNzhcIjtcbiRmYS12YXItbG9uZy1hcnJvdy11cDogXCJcXGYxNzZcIjtcbiRmYS12YXItbG93LXZpc2lvbjogXCJcXGYyYThcIjtcbiRmYS12YXItbWFnaWM6IFwiXFxmMGQwXCI7XG4kZmEtdmFyLW1hZ25ldDogXCJcXGYwNzZcIjtcbiRmYS12YXItbWFpbC1mb3J3YXJkOiBcIlxcZjA2NFwiO1xuJGZhLXZhci1tYWlsLXJlcGx5OiBcIlxcZjExMlwiO1xuJGZhLXZhci1tYWlsLXJlcGx5LWFsbDogXCJcXGYxMjJcIjtcbiRmYS12YXItbWFsZTogXCJcXGYxODNcIjtcbiRmYS12YXItbWFwOiBcIlxcZjI3OVwiO1xuJGZhLXZhci1tYXAtbWFya2VyOiBcIlxcZjA0MVwiO1xuJGZhLXZhci1tYXAtbzogXCJcXGYyNzhcIjtcbiRmYS12YXItbWFwLXBpbjogXCJcXGYyNzZcIjtcbiRmYS12YXItbWFwLXNpZ25zOiBcIlxcZjI3N1wiO1xuJGZhLXZhci1tYXJzOiBcIlxcZjIyMlwiO1xuJGZhLXZhci1tYXJzLWRvdWJsZTogXCJcXGYyMjdcIjtcbiRmYS12YXItbWFycy1zdHJva2U6IFwiXFxmMjI5XCI7XG4kZmEtdmFyLW1hcnMtc3Ryb2tlLWg6IFwiXFxmMjJiXCI7XG4kZmEtdmFyLW1hcnMtc3Ryb2tlLXY6IFwiXFxmMjJhXCI7XG4kZmEtdmFyLW1heGNkbjogXCJcXGYxMzZcIjtcbiRmYS12YXItbWVhbnBhdGg6IFwiXFxmMjBjXCI7XG4kZmEtdmFyLW1lZGl1bTogXCJcXGYyM2FcIjtcbiRmYS12YXItbWVka2l0OiBcIlxcZjBmYVwiO1xuJGZhLXZhci1tZWV0dXA6IFwiXFxmMmUwXCI7XG4kZmEtdmFyLW1laC1vOiBcIlxcZjExYVwiO1xuJGZhLXZhci1tZXJjdXJ5OiBcIlxcZjIyM1wiO1xuJGZhLXZhci1taWNyb2NoaXA6IFwiXFxmMmRiXCI7XG4kZmEtdmFyLW1pY3JvcGhvbmU6IFwiXFxmMTMwXCI7XG4kZmEtdmFyLW1pY3JvcGhvbmUtc2xhc2g6IFwiXFxmMTMxXCI7XG4kZmEtdmFyLW1pbnVzOiBcIlxcZjA2OFwiO1xuJGZhLXZhci1taW51cy1jaXJjbGU6IFwiXFxmMDU2XCI7XG4kZmEtdmFyLW1pbnVzLXNxdWFyZTogXCJcXGYxNDZcIjtcbiRmYS12YXItbWludXMtc3F1YXJlLW86IFwiXFxmMTQ3XCI7XG4kZmEtdmFyLW1peGNsb3VkOiBcIlxcZjI4OVwiO1xuJGZhLXZhci1tb2JpbGU6IFwiXFxmMTBiXCI7XG4kZmEtdmFyLW1vYmlsZS1waG9uZTogXCJcXGYxMGJcIjtcbiRmYS12YXItbW9keDogXCJcXGYyODVcIjtcbiRmYS12YXItbW9uZXk6IFwiXFxmMGQ2XCI7XG4kZmEtdmFyLW1vb24tbzogXCJcXGYxODZcIjtcbiRmYS12YXItbW9ydGFyLWJvYXJkOiBcIlxcZjE5ZFwiO1xuJGZhLXZhci1tb3RvcmN5Y2xlOiBcIlxcZjIxY1wiO1xuJGZhLXZhci1tb3VzZS1wb2ludGVyOiBcIlxcZjI0NVwiO1xuJGZhLXZhci1tdXNpYzogXCJcXGYwMDFcIjtcbiRmYS12YXItbmF2aWNvbjogXCJcXGYwYzlcIjtcbiRmYS12YXItbmV1dGVyOiBcIlxcZjIyY1wiO1xuJGZhLXZhci1uZXdzcGFwZXItbzogXCJcXGYxZWFcIjtcbiRmYS12YXItb2JqZWN0LWdyb3VwOiBcIlxcZjI0N1wiO1xuJGZhLXZhci1vYmplY3QtdW5ncm91cDogXCJcXGYyNDhcIjtcbiRmYS12YXItb2Rub2tsYXNzbmlraTogXCJcXGYyNjNcIjtcbiRmYS12YXItb2Rub2tsYXNzbmlraS1zcXVhcmU6IFwiXFxmMjY0XCI7XG4kZmEtdmFyLW9wZW5jYXJ0OiBcIlxcZjIzZFwiO1xuJGZhLXZhci1vcGVuaWQ6IFwiXFxmMTliXCI7XG4kZmEtdmFyLW9wZXJhOiBcIlxcZjI2YVwiO1xuJGZhLXZhci1vcHRpbi1tb25zdGVyOiBcIlxcZjIzY1wiO1xuJGZhLXZhci1vdXRkZW50OiBcIlxcZjAzYlwiO1xuJGZhLXZhci1wYWdlbGluZXM6IFwiXFxmMThjXCI7XG4kZmEtdmFyLXBhaW50LWJydXNoOiBcIlxcZjFmY1wiO1xuJGZhLXZhci1wYXBlci1wbGFuZTogXCJcXGYxZDhcIjtcbiRmYS12YXItcGFwZXItcGxhbmUtbzogXCJcXGYxZDlcIjtcbiRmYS12YXItcGFwZXJjbGlwOiBcIlxcZjBjNlwiO1xuJGZhLXZhci1wYXJhZ3JhcGg6IFwiXFxmMWRkXCI7XG4kZmEtdmFyLXBhc3RlOiBcIlxcZjBlYVwiO1xuJGZhLXZhci1wYXVzZTogXCJcXGYwNGNcIjtcbiRmYS12YXItcGF1c2UtY2lyY2xlOiBcIlxcZjI4YlwiO1xuJGZhLXZhci1wYXVzZS1jaXJjbGUtbzogXCJcXGYyOGNcIjtcbiRmYS12YXItcGF3OiBcIlxcZjFiMFwiO1xuJGZhLXZhci1wYXlwYWw6IFwiXFxmMWVkXCI7XG4kZmEtdmFyLXBlbmNpbDogXCJcXGYwNDBcIjtcbiRmYS12YXItcGVuY2lsLXNxdWFyZTogXCJcXGYxNGJcIjtcbiRmYS12YXItcGVuY2lsLXNxdWFyZS1vOiBcIlxcZjA0NFwiO1xuJGZhLXZhci1wZXJjZW50OiBcIlxcZjI5NVwiO1xuJGZhLXZhci1waG9uZTogXCJcXGYwOTVcIjtcbiRmYS12YXItcGhvbmUtc3F1YXJlOiBcIlxcZjA5OFwiO1xuJGZhLXZhci1waG90bzogXCJcXGYwM2VcIjtcbiRmYS12YXItcGljdHVyZS1vOiBcIlxcZjAzZVwiO1xuJGZhLXZhci1waWUtY2hhcnQ6IFwiXFxmMjAwXCI7XG4kZmEtdmFyLXBpZWQtcGlwZXI6IFwiXFxmMmFlXCI7XG4kZmEtdmFyLXBpZWQtcGlwZXItYWx0OiBcIlxcZjFhOFwiO1xuJGZhLXZhci1waWVkLXBpcGVyLXBwOiBcIlxcZjFhN1wiO1xuJGZhLXZhci1waW50ZXJlc3Q6IFwiXFxmMGQyXCI7XG4kZmEtdmFyLXBpbnRlcmVzdC1wOiBcIlxcZjIzMVwiO1xuJGZhLXZhci1waW50ZXJlc3Qtc3F1YXJlOiBcIlxcZjBkM1wiO1xuJGZhLXZhci1wbGFuZTogXCJcXGYwNzJcIjtcbiRmYS12YXItcGxheTogXCJcXGYwNGJcIjtcbiRmYS12YXItcGxheS1jaXJjbGU6IFwiXFxmMTQ0XCI7XG4kZmEtdmFyLXBsYXktY2lyY2xlLW86IFwiXFxmMDFkXCI7XG4kZmEtdmFyLXBsdWc6IFwiXFxmMWU2XCI7XG4kZmEtdmFyLXBsdXM6IFwiXFxmMDY3XCI7XG4kZmEtdmFyLXBsdXMtY2lyY2xlOiBcIlxcZjA1NVwiO1xuJGZhLXZhci1wbHVzLXNxdWFyZTogXCJcXGYwZmVcIjtcbiRmYS12YXItcGx1cy1zcXVhcmUtbzogXCJcXGYxOTZcIjtcbiRmYS12YXItcG9kY2FzdDogXCJcXGYyY2VcIjtcbiRmYS12YXItcG93ZXItb2ZmOiBcIlxcZjAxMVwiO1xuJGZhLXZhci1wcmludDogXCJcXGYwMmZcIjtcbiRmYS12YXItcHJvZHVjdC1odW50OiBcIlxcZjI4OFwiO1xuJGZhLXZhci1wdXp6bGUtcGllY2U6IFwiXFxmMTJlXCI7XG4kZmEtdmFyLXFxOiBcIlxcZjFkNlwiO1xuJGZhLXZhci1xcmNvZGU6IFwiXFxmMDI5XCI7XG4kZmEtdmFyLXF1ZXN0aW9uOiBcIlxcZjEyOFwiO1xuJGZhLXZhci1xdWVzdGlvbi1jaXJjbGU6IFwiXFxmMDU5XCI7XG4kZmEtdmFyLXF1ZXN0aW9uLWNpcmNsZS1vOiBcIlxcZjI5Y1wiO1xuJGZhLXZhci1xdW9yYTogXCJcXGYyYzRcIjtcbiRmYS12YXItcXVvdGUtbGVmdDogXCJcXGYxMGRcIjtcbiRmYS12YXItcXVvdGUtcmlnaHQ6IFwiXFxmMTBlXCI7XG4kZmEtdmFyLXJhOiBcIlxcZjFkMFwiO1xuJGZhLXZhci1yYW5kb206IFwiXFxmMDc0XCI7XG4kZmEtdmFyLXJhdmVscnk6IFwiXFxmMmQ5XCI7XG4kZmEtdmFyLXJlYmVsOiBcIlxcZjFkMFwiO1xuJGZhLXZhci1yZWN5Y2xlOiBcIlxcZjFiOFwiO1xuJGZhLXZhci1yZWRkaXQ6IFwiXFxmMWExXCI7XG4kZmEtdmFyLXJlZGRpdC1hbGllbjogXCJcXGYyODFcIjtcbiRmYS12YXItcmVkZGl0LXNxdWFyZTogXCJcXGYxYTJcIjtcbiRmYS12YXItcmVmcmVzaDogXCJcXGYwMjFcIjtcbiRmYS12YXItcmVnaXN0ZXJlZDogXCJcXGYyNWRcIjtcbiRmYS12YXItcmVtb3ZlOiBcIlxcZjAwZFwiO1xuJGZhLXZhci1yZW5yZW46IFwiXFxmMThiXCI7XG4kZmEtdmFyLXJlb3JkZXI6IFwiXFxmMGM5XCI7XG4kZmEtdmFyLXJlcGVhdDogXCJcXGYwMWVcIjtcbiRmYS12YXItcmVwbHk6IFwiXFxmMTEyXCI7XG4kZmEtdmFyLXJlcGx5LWFsbDogXCJcXGYxMjJcIjtcbiRmYS12YXItcmVzaXN0YW5jZTogXCJcXGYxZDBcIjtcbiRmYS12YXItcmV0d2VldDogXCJcXGYwNzlcIjtcbiRmYS12YXItcm1iOiBcIlxcZjE1N1wiO1xuJGZhLXZhci1yb2FkOiBcIlxcZjAxOFwiO1xuJGZhLXZhci1yb2NrZXQ6IFwiXFxmMTM1XCI7XG4kZmEtdmFyLXJvdGF0ZS1sZWZ0OiBcIlxcZjBlMlwiO1xuJGZhLXZhci1yb3RhdGUtcmlnaHQ6IFwiXFxmMDFlXCI7XG4kZmEtdmFyLXJvdWJsZTogXCJcXGYxNThcIjtcbiRmYS12YXItcnNzOiBcIlxcZjA5ZVwiO1xuJGZhLXZhci1yc3Mtc3F1YXJlOiBcIlxcZjE0M1wiO1xuJGZhLXZhci1ydWI6IFwiXFxmMTU4XCI7XG4kZmEtdmFyLXJ1YmxlOiBcIlxcZjE1OFwiO1xuJGZhLXZhci1ydXBlZTogXCJcXGYxNTZcIjtcbiRmYS12YXItczE1OiBcIlxcZjJjZFwiO1xuJGZhLXZhci1zYWZhcmk6IFwiXFxmMjY3XCI7XG4kZmEtdmFyLXNhdmU6IFwiXFxmMGM3XCI7XG4kZmEtdmFyLXNjaXNzb3JzOiBcIlxcZjBjNFwiO1xuJGZhLXZhci1zY3JpYmQ6IFwiXFxmMjhhXCI7XG4kZmEtdmFyLXNlYXJjaDogXCJcXGYwMDJcIjtcbiRmYS12YXItc2VhcmNoLW1pbnVzOiBcIlxcZjAxMFwiO1xuJGZhLXZhci1zZWFyY2gtcGx1czogXCJcXGYwMGVcIjtcbiRmYS12YXItc2VsbHN5OiBcIlxcZjIxM1wiO1xuJGZhLXZhci1zZW5kOiBcIlxcZjFkOFwiO1xuJGZhLXZhci1zZW5kLW86IFwiXFxmMWQ5XCI7XG4kZmEtdmFyLXNlcnZlcjogXCJcXGYyMzNcIjtcbiRmYS12YXItc2hhcmU6IFwiXFxmMDY0XCI7XG4kZmEtdmFyLXNoYXJlLWFsdDogXCJcXGYxZTBcIjtcbiRmYS12YXItc2hhcmUtYWx0LXNxdWFyZTogXCJcXGYxZTFcIjtcbiRmYS12YXItc2hhcmUtc3F1YXJlOiBcIlxcZjE0ZFwiO1xuJGZhLXZhci1zaGFyZS1zcXVhcmUtbzogXCJcXGYwNDVcIjtcbiRmYS12YXItc2hla2VsOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1zaGVxZWw6IFwiXFxmMjBiXCI7XG4kZmEtdmFyLXNoaWVsZDogXCJcXGYxMzJcIjtcbiRmYS12YXItc2hpcDogXCJcXGYyMWFcIjtcbiRmYS12YXItc2hpcnRzaW5idWxrOiBcIlxcZjIxNFwiO1xuJGZhLXZhci1zaG9wcGluZy1iYWc6IFwiXFxmMjkwXCI7XG4kZmEtdmFyLXNob3BwaW5nLWJhc2tldDogXCJcXGYyOTFcIjtcbiRmYS12YXItc2hvcHBpbmctY2FydDogXCJcXGYwN2FcIjtcbiRmYS12YXItc2hvd2VyOiBcIlxcZjJjY1wiO1xuJGZhLXZhci1zaWduLWluOiBcIlxcZjA5MFwiO1xuJGZhLXZhci1zaWduLWxhbmd1YWdlOiBcIlxcZjJhN1wiO1xuJGZhLXZhci1zaWduLW91dDogXCJcXGYwOGJcIjtcbiRmYS12YXItc2lnbmFsOiBcIlxcZjAxMlwiO1xuJGZhLXZhci1zaWduaW5nOiBcIlxcZjJhN1wiO1xuJGZhLXZhci1zaW1wbHlidWlsdDogXCJcXGYyMTVcIjtcbiRmYS12YXItc2l0ZW1hcDogXCJcXGYwZThcIjtcbiRmYS12YXItc2t5YXRsYXM6IFwiXFxmMjE2XCI7XG4kZmEtdmFyLXNreXBlOiBcIlxcZjE3ZVwiO1xuJGZhLXZhci1zbGFjazogXCJcXGYxOThcIjtcbiRmYS12YXItc2xpZGVyczogXCJcXGYxZGVcIjtcbiRmYS12YXItc2xpZGVzaGFyZTogXCJcXGYxZTdcIjtcbiRmYS12YXItc21pbGUtbzogXCJcXGYxMThcIjtcbiRmYS12YXItc25hcGNoYXQ6IFwiXFxmMmFiXCI7XG4kZmEtdmFyLXNuYXBjaGF0LWdob3N0OiBcIlxcZjJhY1wiO1xuJGZhLXZhci1zbmFwY2hhdC1zcXVhcmU6IFwiXFxmMmFkXCI7XG4kZmEtdmFyLXNub3dmbGFrZS1vOiBcIlxcZjJkY1wiO1xuJGZhLXZhci1zb2NjZXItYmFsbC1vOiBcIlxcZjFlM1wiO1xuJGZhLXZhci1zb3J0OiBcIlxcZjBkY1wiO1xuJGZhLXZhci1zb3J0LWFscGhhLWFzYzogXCJcXGYxNWRcIjtcbiRmYS12YXItc29ydC1hbHBoYS1kZXNjOiBcIlxcZjE1ZVwiO1xuJGZhLXZhci1zb3J0LWFtb3VudC1hc2M6IFwiXFxmMTYwXCI7XG4kZmEtdmFyLXNvcnQtYW1vdW50LWRlc2M6IFwiXFxmMTYxXCI7XG4kZmEtdmFyLXNvcnQtYXNjOiBcIlxcZjBkZVwiO1xuJGZhLXZhci1zb3J0LWRlc2M6IFwiXFxmMGRkXCI7XG4kZmEtdmFyLXNvcnQtZG93bjogXCJcXGYwZGRcIjtcbiRmYS12YXItc29ydC1udW1lcmljLWFzYzogXCJcXGYxNjJcIjtcbiRmYS12YXItc29ydC1udW1lcmljLWRlc2M6IFwiXFxmMTYzXCI7XG4kZmEtdmFyLXNvcnQtdXA6IFwiXFxmMGRlXCI7XG4kZmEtdmFyLXNvdW5kY2xvdWQ6IFwiXFxmMWJlXCI7XG4kZmEtdmFyLXNwYWNlLXNodXR0bGU6IFwiXFxmMTk3XCI7XG4kZmEtdmFyLXNwaW5uZXI6IFwiXFxmMTEwXCI7XG4kZmEtdmFyLXNwb29uOiBcIlxcZjFiMVwiO1xuJGZhLXZhci1zcG90aWZ5OiBcIlxcZjFiY1wiO1xuJGZhLXZhci1zcXVhcmU6IFwiXFxmMGM4XCI7XG4kZmEtdmFyLXNxdWFyZS1vOiBcIlxcZjA5NlwiO1xuJGZhLXZhci1zdGFjay1leGNoYW5nZTogXCJcXGYxOGRcIjtcbiRmYS12YXItc3RhY2stb3ZlcmZsb3c6IFwiXFxmMTZjXCI7XG4kZmEtdmFyLXN0YXI6IFwiXFxmMDA1XCI7XG4kZmEtdmFyLXN0YXItaGFsZjogXCJcXGYwODlcIjtcbiRmYS12YXItc3Rhci1oYWxmLWVtcHR5OiBcIlxcZjEyM1wiO1xuJGZhLXZhci1zdGFyLWhhbGYtZnVsbDogXCJcXGYxMjNcIjtcbiRmYS12YXItc3Rhci1oYWxmLW86IFwiXFxmMTIzXCI7XG4kZmEtdmFyLXN0YXItbzogXCJcXGYwMDZcIjtcbiRmYS12YXItc3RlYW06IFwiXFxmMWI2XCI7XG4kZmEtdmFyLXN0ZWFtLXNxdWFyZTogXCJcXGYxYjdcIjtcbiRmYS12YXItc3RlcC1iYWNrd2FyZDogXCJcXGYwNDhcIjtcbiRmYS12YXItc3RlcC1mb3J3YXJkOiBcIlxcZjA1MVwiO1xuJGZhLXZhci1zdGV0aG9zY29wZTogXCJcXGYwZjFcIjtcbiRmYS12YXItc3RpY2t5LW5vdGU6IFwiXFxmMjQ5XCI7XG4kZmEtdmFyLXN0aWNreS1ub3RlLW86IFwiXFxmMjRhXCI7XG4kZmEtdmFyLXN0b3A6IFwiXFxmMDRkXCI7XG4kZmEtdmFyLXN0b3AtY2lyY2xlOiBcIlxcZjI4ZFwiO1xuJGZhLXZhci1zdG9wLWNpcmNsZS1vOiBcIlxcZjI4ZVwiO1xuJGZhLXZhci1zdHJlZXQtdmlldzogXCJcXGYyMWRcIjtcbiRmYS12YXItc3RyaWtldGhyb3VnaDogXCJcXGYwY2NcIjtcbiRmYS12YXItc3R1bWJsZXVwb246IFwiXFxmMWE0XCI7XG4kZmEtdmFyLXN0dW1ibGV1cG9uLWNpcmNsZTogXCJcXGYxYTNcIjtcbiRmYS12YXItc3Vic2NyaXB0OiBcIlxcZjEyY1wiO1xuJGZhLXZhci1zdWJ3YXk6IFwiXFxmMjM5XCI7XG4kZmEtdmFyLXN1aXRjYXNlOiBcIlxcZjBmMlwiO1xuJGZhLXZhci1zdW4tbzogXCJcXGYxODVcIjtcbiRmYS12YXItc3VwZXJwb3dlcnM6IFwiXFxmMmRkXCI7XG4kZmEtdmFyLXN1cGVyc2NyaXB0OiBcIlxcZjEyYlwiO1xuJGZhLXZhci1zdXBwb3J0OiBcIlxcZjFjZFwiO1xuJGZhLXZhci10YWJsZTogXCJcXGYwY2VcIjtcbiRmYS12YXItdGFibGV0OiBcIlxcZjEwYVwiO1xuJGZhLXZhci10YWNob21ldGVyOiBcIlxcZjBlNFwiO1xuJGZhLXZhci10YWc6IFwiXFxmMDJiXCI7XG4kZmEtdmFyLXRhZ3M6IFwiXFxmMDJjXCI7XG4kZmEtdmFyLXRhc2tzOiBcIlxcZjBhZVwiO1xuJGZhLXZhci10YXhpOiBcIlxcZjFiYVwiO1xuJGZhLXZhci10ZWxlZ3JhbTogXCJcXGYyYzZcIjtcbiRmYS12YXItdGVsZXZpc2lvbjogXCJcXGYyNmNcIjtcbiRmYS12YXItdGVuY2VudC13ZWlibzogXCJcXGYxZDVcIjtcbiRmYS12YXItdGVybWluYWw6IFwiXFxmMTIwXCI7XG4kZmEtdmFyLXRleHQtaGVpZ2h0OiBcIlxcZjAzNFwiO1xuJGZhLXZhci10ZXh0LXdpZHRoOiBcIlxcZjAzNVwiO1xuJGZhLXZhci10aDogXCJcXGYwMGFcIjtcbiRmYS12YXItdGgtbGFyZ2U6IFwiXFxmMDA5XCI7XG4kZmEtdmFyLXRoLWxpc3Q6IFwiXFxmMDBiXCI7XG4kZmEtdmFyLXRoZW1laXNsZTogXCJcXGYyYjJcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXI6IFwiXFxmMmM3XCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLTA6IFwiXFxmMmNiXCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLTE6IFwiXFxmMmNhXCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLTI6IFwiXFxmMmM5XCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLTM6IFwiXFxmMmM4XCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLTQ6IFwiXFxmMmM3XCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyLWVtcHR5OiBcIlxcZjJjYlwiO1xuJGZhLXZhci10aGVybW9tZXRlci1mdWxsOiBcIlxcZjJjN1wiO1xuJGZhLXZhci10aGVybW9tZXRlci1oYWxmOiBcIlxcZjJjOVwiO1xuJGZhLXZhci10aGVybW9tZXRlci1xdWFydGVyOiBcIlxcZjJjYVwiO1xuJGZhLXZhci10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczogXCJcXGYyYzhcIjtcbiRmYS12YXItdGh1bWItdGFjazogXCJcXGYwOGRcIjtcbiRmYS12YXItdGh1bWJzLWRvd246IFwiXFxmMTY1XCI7XG4kZmEtdmFyLXRodW1icy1vLWRvd246IFwiXFxmMDg4XCI7XG4kZmEtdmFyLXRodW1icy1vLXVwOiBcIlxcZjA4N1wiO1xuJGZhLXZhci10aHVtYnMtdXA6IFwiXFxmMTY0XCI7XG4kZmEtdmFyLXRpY2tldDogXCJcXGYxNDVcIjtcbiRmYS12YXItdGltZXM6IFwiXFxmMDBkXCI7XG4kZmEtdmFyLXRpbWVzLWNpcmNsZTogXCJcXGYwNTdcIjtcbiRmYS12YXItdGltZXMtY2lyY2xlLW86IFwiXFxmMDVjXCI7XG4kZmEtdmFyLXRpbWVzLXJlY3RhbmdsZTogXCJcXGYyZDNcIjtcbiRmYS12YXItdGltZXMtcmVjdGFuZ2xlLW86IFwiXFxmMmQ0XCI7XG4kZmEtdmFyLXRpbnQ6IFwiXFxmMDQzXCI7XG4kZmEtdmFyLXRvZ2dsZS1kb3duOiBcIlxcZjE1MFwiO1xuJGZhLXZhci10b2dnbGUtbGVmdDogXCJcXGYxOTFcIjtcbiRmYS12YXItdG9nZ2xlLW9mZjogXCJcXGYyMDRcIjtcbiRmYS12YXItdG9nZ2xlLW9uOiBcIlxcZjIwNVwiO1xuJGZhLXZhci10b2dnbGUtcmlnaHQ6IFwiXFxmMTUyXCI7XG4kZmEtdmFyLXRvZ2dsZS11cDogXCJcXGYxNTFcIjtcbiRmYS12YXItdHJhZGVtYXJrOiBcIlxcZjI1Y1wiO1xuJGZhLXZhci10cmFpbjogXCJcXGYyMzhcIjtcbiRmYS12YXItdHJhbnNnZW5kZXI6IFwiXFxmMjI0XCI7XG4kZmEtdmFyLXRyYW5zZ2VuZGVyLWFsdDogXCJcXGYyMjVcIjtcbiRmYS12YXItdHJhc2g6IFwiXFxmMWY4XCI7XG4kZmEtdmFyLXRyYXNoLW86IFwiXFxmMDE0XCI7XG4kZmEtdmFyLXRyZWU6IFwiXFxmMWJiXCI7XG4kZmEtdmFyLXRyZWxsbzogXCJcXGYxODFcIjtcbiRmYS12YXItdHJpcGFkdmlzb3I6IFwiXFxmMjYyXCI7XG4kZmEtdmFyLXRyb3BoeTogXCJcXGYwOTFcIjtcbiRmYS12YXItdHJ1Y2s6IFwiXFxmMGQxXCI7XG4kZmEtdmFyLXRyeTogXCJcXGYxOTVcIjtcbiRmYS12YXItdHR5OiBcIlxcZjFlNFwiO1xuJGZhLXZhci10dW1ibHI6IFwiXFxmMTczXCI7XG4kZmEtdmFyLXR1bWJsci1zcXVhcmU6IFwiXFxmMTc0XCI7XG4kZmEtdmFyLXR1cmtpc2gtbGlyYTogXCJcXGYxOTVcIjtcbiRmYS12YXItdHY6IFwiXFxmMjZjXCI7XG4kZmEtdmFyLXR3aXRjaDogXCJcXGYxZThcIjtcbiRmYS12YXItdHdpdHRlcjogXCJcXGYwOTlcIjtcbiRmYS12YXItdHdpdHRlci1zcXVhcmU6IFwiXFxmMDgxXCI7XG4kZmEtdmFyLXVtYnJlbGxhOiBcIlxcZjBlOVwiO1xuJGZhLXZhci11bmRlcmxpbmU6IFwiXFxmMGNkXCI7XG4kZmEtdmFyLXVuZG86IFwiXFxmMGUyXCI7XG4kZmEtdmFyLXVuaXZlcnNhbC1hY2Nlc3M6IFwiXFxmMjlhXCI7XG4kZmEtdmFyLXVuaXZlcnNpdHk6IFwiXFxmMTljXCI7XG4kZmEtdmFyLXVubGluazogXCJcXGYxMjdcIjtcbiRmYS12YXItdW5sb2NrOiBcIlxcZjA5Y1wiO1xuJGZhLXZhci11bmxvY2stYWx0OiBcIlxcZjEzZVwiO1xuJGZhLXZhci11bnNvcnRlZDogXCJcXGYwZGNcIjtcbiRmYS12YXItdXBsb2FkOiBcIlxcZjA5M1wiO1xuJGZhLXZhci11c2I6IFwiXFxmMjg3XCI7XG4kZmEtdmFyLXVzZDogXCJcXGYxNTVcIjtcbiRmYS12YXItdXNlcjogXCJcXGYwMDdcIjtcbiRmYS12YXItdXNlci1jaXJjbGU6IFwiXFxmMmJkXCI7XG4kZmEtdmFyLXVzZXItY2lyY2xlLW86IFwiXFxmMmJlXCI7XG4kZmEtdmFyLXVzZXItbWQ6IFwiXFxmMGYwXCI7XG4kZmEtdmFyLXVzZXItbzogXCJcXGYyYzBcIjtcbiRmYS12YXItdXNlci1wbHVzOiBcIlxcZjIzNFwiO1xuJGZhLXZhci11c2VyLXNlY3JldDogXCJcXGYyMWJcIjtcbiRmYS12YXItdXNlci10aW1lczogXCJcXGYyMzVcIjtcbiRmYS12YXItdXNlcnM6IFwiXFxmMGMwXCI7XG4kZmEtdmFyLXZjYXJkOiBcIlxcZjJiYlwiO1xuJGZhLXZhci12Y2FyZC1vOiBcIlxcZjJiY1wiO1xuJGZhLXZhci12ZW51czogXCJcXGYyMjFcIjtcbiRmYS12YXItdmVudXMtZG91YmxlOiBcIlxcZjIyNlwiO1xuJGZhLXZhci12ZW51cy1tYXJzOiBcIlxcZjIyOFwiO1xuJGZhLXZhci12aWFjb2luOiBcIlxcZjIzN1wiO1xuJGZhLXZhci12aWFkZW86IFwiXFxmMmE5XCI7XG4kZmEtdmFyLXZpYWRlby1zcXVhcmU6IFwiXFxmMmFhXCI7XG4kZmEtdmFyLXZpZGVvLWNhbWVyYTogXCJcXGYwM2RcIjtcbiRmYS12YXItdmltZW86IFwiXFxmMjdkXCI7XG4kZmEtdmFyLXZpbWVvLXNxdWFyZTogXCJcXGYxOTRcIjtcbiRmYS12YXItdmluZTogXCJcXGYxY2FcIjtcbiRmYS12YXItdms6IFwiXFxmMTg5XCI7XG4kZmEtdmFyLXZvbHVtZS1jb250cm9sLXBob25lOiBcIlxcZjJhMFwiO1xuJGZhLXZhci12b2x1bWUtZG93bjogXCJcXGYwMjdcIjtcbiRmYS12YXItdm9sdW1lLW9mZjogXCJcXGYwMjZcIjtcbiRmYS12YXItdm9sdW1lLXVwOiBcIlxcZjAyOFwiO1xuJGZhLXZhci13YXJuaW5nOiBcIlxcZjA3MVwiO1xuJGZhLXZhci13ZWNoYXQ6IFwiXFxmMWQ3XCI7XG4kZmEtdmFyLXdlaWJvOiBcIlxcZjE4YVwiO1xuJGZhLXZhci13ZWl4aW46IFwiXFxmMWQ3XCI7XG4kZmEtdmFyLXdoYXRzYXBwOiBcIlxcZjIzMlwiO1xuJGZhLXZhci13aGVlbGNoYWlyOiBcIlxcZjE5M1wiO1xuJGZhLXZhci13aGVlbGNoYWlyLWFsdDogXCJcXGYyOWJcIjtcbiRmYS12YXItd2lmaTogXCJcXGYxZWJcIjtcbiRmYS12YXItd2lraXBlZGlhLXc6IFwiXFxmMjY2XCI7XG4kZmEtdmFyLXdpbmRvdy1jbG9zZTogXCJcXGYyZDNcIjtcbiRmYS12YXItd2luZG93LWNsb3NlLW86IFwiXFxmMmQ0XCI7XG4kZmEtdmFyLXdpbmRvdy1tYXhpbWl6ZTogXCJcXGYyZDBcIjtcbiRmYS12YXItd2luZG93LW1pbmltaXplOiBcIlxcZjJkMVwiO1xuJGZhLXZhci13aW5kb3ctcmVzdG9yZTogXCJcXGYyZDJcIjtcbiRmYS12YXItd2luZG93czogXCJcXGYxN2FcIjtcbiRmYS12YXItd29uOiBcIlxcZjE1OVwiO1xuJGZhLXZhci13b3JkcHJlc3M6IFwiXFxmMTlhXCI7XG4kZmEtdmFyLXdwYmVnaW5uZXI6IFwiXFxmMjk3XCI7XG4kZmEtdmFyLXdwZXhwbG9yZXI6IFwiXFxmMmRlXCI7XG4kZmEtdmFyLXdwZm9ybXM6IFwiXFxmMjk4XCI7XG4kZmEtdmFyLXdyZW5jaDogXCJcXGYwYWRcIjtcbiRmYS12YXIteGluZzogXCJcXGYxNjhcIjtcbiRmYS12YXIteGluZy1zcXVhcmU6IFwiXFxmMTY5XCI7XG4kZmEtdmFyLXktY29tYmluYXRvcjogXCJcXGYyM2JcIjtcbiRmYS12YXIteS1jb21iaW5hdG9yLXNxdWFyZTogXCJcXGYxZDRcIjtcbiRmYS12YXIteWFob286IFwiXFxmMTllXCI7XG4kZmEtdmFyLXljOiBcIlxcZjIzYlwiO1xuJGZhLXZhci15Yy1zcXVhcmU6IFwiXFxmMWQ0XCI7XG4kZmEtdmFyLXllbHA6IFwiXFxmMWU5XCI7XG4kZmEtdmFyLXllbjogXCJcXGYxNTdcIjtcbiRmYS12YXIteW9hc3Q6IFwiXFxmMmIxXCI7XG4kZmEtdmFyLXlvdXR1YmU6IFwiXFxmMTY3XCI7XG4kZmEtdmFyLXlvdXR1YmUtcGxheTogXCJcXGYxNmFcIjtcbiRmYS12YXIteW91dHViZS1zcXVhcmU6IFwiXFxmMTY2XCI7XG5cbiIsIi8vIEJvcmRlcmVkICYgUHVsbGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi4jeyRmYS1jc3MtcHJlZml4fS1ib3JkZXIge1xuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xuICBib3JkZXI6IHNvbGlkIC4wOGVtICRmYS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IC4xZW07XG59XG5cbi4jeyRmYS1jc3MtcHJlZml4fS1wdWxsLWxlZnQgeyBmbG9hdDogbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXB1bGwtcmlnaHQgeyBmbG9hdDogcmlnaHQ7IH1cblxuLiN7JGZhLWNzcy1wcmVmaXh9IHtcbiAgJi4jeyRmYS1jc3MtcHJlZml4fS1wdWxsLWxlZnQgeyBtYXJnaW4tcmlnaHQ6IC4zZW07IH1cbiAgJi4jeyRmYS1jc3MtcHJlZml4fS1wdWxsLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IC4zZW07IH1cbn1cblxuLyogRGVwcmVjYXRlZCBhcyBvZiA0LjQuMCAqL1xuLnB1bGwtcmlnaHQgeyBmbG9hdDogcmlnaHQ7IH1cbi5wdWxsLWxlZnQgeyBmbG9hdDogbGVmdDsgfVxuXG4uI3skZmEtY3NzLXByZWZpeH0ge1xuICAmLnB1bGwtbGVmdCB7IG1hcmdpbi1yaWdodDogLjNlbTsgfVxuICAmLnB1bGwtcmlnaHQgeyBtYXJnaW4tbGVmdDogLjNlbTsgfVxufVxuIiwiLy8gU3Bpbm5pbmcgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi4jeyRmYS1jc3MtcHJlZml4fS1zcGluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi4jeyRmYS1jc3MtcHJlZml4fS1wdWxzZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYS1zcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG4iLCIvLyBSb3RhdGVkICYgRmxpcHBlZCBJY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLTkwICB7IEBpbmNsdWRlIGZhLWljb24tcm90YXRlKDkwZGVnLCAxKTsgIH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtMTgwIHsgQGluY2x1ZGUgZmEtaWNvbi1yb3RhdGUoMTgwZGVnLCAyKTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS0yNzAgeyBAaW5jbHVkZSBmYS1pY29uLXJvdGF0ZSgyNzBkZWcsIDMpOyB9XG5cbi4jeyRmYS1jc3MtcHJlZml4fS1mbGlwLWhvcml6b250YWwgeyBAaW5jbHVkZSBmYS1pY29uLWZsaXAoLTEsIDEsIDApOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxpcC12ZXJ0aWNhbCAgIHsgQGluY2x1ZGUgZmEtaWNvbi1mbGlwKDEsIC0xLCAyKTsgfVxuXG4vLyBIb29rIGZvciBJRTgtOVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG46cm9vdCAuI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLTkwLFxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS0xODAsXG46cm9vdCAuI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLTI3MCxcbjpyb290IC4jeyRmYS1jc3MtcHJlZml4fS1mbGlwLWhvcml6b250YWwsXG46cm9vdCAuI3skZmEtY3NzLXByZWZpeH0tZmxpcC12ZXJ0aWNhbCB7XG4gIGZpbHRlcjogbm9uZTtcbn1cbiIsIi8vIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZhLWljb24oKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgI3skZmEtZm9udC1zaXplLWJhc2V9LyN7JGZhLWxpbmUtaGVpZ2h0LWJhc2V9IEZvbnRBd2Vzb21lOyAvLyBzaG9ydGVuaW5nIGZvbnQgZGVjbGFyYXRpb25cbiAgZm9udC1zaXplOiBpbmhlcml0OyAvLyBjYW4ndCBoYXZlIGZvbnQtc2l6ZSBpbmhlcml0IG9uIGxpbmUgYWJvdmUsIHNvIG5lZWQgdG8gb3ZlcnJpZGVcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87IC8vIG9wdGltaXplbGVnaWJpbGl0eSB0aHJvd3MgdGhpbmdzIG9mZiAjMTA5NFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxufVxuXG5AbWl4aW4gZmEtaWNvbi1yb3RhdGUoJGRlZ3JlZXMsICRyb3RhdGlvbikge1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPSN7JHJvdGF0aW9ufSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cblxuQG1peGluIGZhLWljb24tZmxpcCgkaG9yaXosICR2ZXJ0LCAkcm90YXRpb24pIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0jeyRyb3RhdGlvbn0sIG1pcnJvcj0xKVwiO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJGhvcml6LCAkdmVydCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkaG9yaXosICR2ZXJ0KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKCRob3JpeiwgJHZlcnQpO1xufVxuXG5cbi8vIE9ubHkgZGlzcGxheSBjb250ZW50IHRvIHNjcmVlbiByZWFkZXJzLiBBIGxhIEJvb3RzdHJhcCA0LlxuLy9cbi8vIFNlZTogaHR0cDovL2ExMXlwcm9qZWN0LmNvbS9wb3N0cy9ob3ctdG8taGlkZS1jb250ZW50L1xuXG5AbWl4aW4gc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCAuc3Itb25seSB0byBvbmx5IGRpc3BsYXkgY29udGVudCB3aGVuIGl0J3MgZm9jdXNlZC5cbi8vXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvTk9URS1XQ0FHMjAtVEVDSFMtMjAxMzA5MDUvRzFcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbkBtaXhpbiBzci1vbmx5LWZvY3VzYWJsZSB7XG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY2xpcDogYXV0bztcbiAgfVxufVxuIiwiLy8gU3RhY2tlZCBJY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMXgsIC4jeyRmYS1jc3MtcHJlZml4fS1zdGFjay0yeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFjay0xeCB7IGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMnggeyBmb250LXNpemU6IDJlbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWludmVyc2UgeyBjb2xvcjogJGZhLWludmVyc2U7IH1cbiIsIi8qIEZvbnQgQXdlc29tZSB1c2VzIHRoZSBVbmljb2RlIFByaXZhdGUgVXNlIEFyZWEgKFBVQSkgdG8gZW5zdXJlIHNjcmVlblxuICAgcmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cblxuLiN7JGZhLWNzcy1wcmVmaXh9LWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2xhc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tdXNpYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW11c2ljOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VhcmNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZW52ZWxvcGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVudmVsb3BlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZWFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhlYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0YXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbG06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGgtbGFyZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aC1sYXJnZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aC1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGgtbGlzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZW1vdmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWNsb3NlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aW1lczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRpbWVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VhcmNoLXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zZWFyY2gtcGx1czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlYXJjaC1taW51czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNlYXJjaC1taW51czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBvd2VyLW9mZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBvd2VyLW9mZjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ25hbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNpZ25hbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdlYXI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYXNoLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFzaC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG9tZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvbWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG9jay1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xvY2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvYWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yb2FkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kb3dubG9hZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtby1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtby11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWluYm94OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5ib3g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGxheS1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS1yaWdodDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmVwZWF0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVwZWF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZnJlc2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saXN0LWFsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3QtYWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9jazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhlYWRwaG9uZXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZWFkcGhvbmVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdm9sdW1lLW9mZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS1vZmY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12b2x1bWUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdm9sdW1lLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdm9sdW1lLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXJjb2RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXJjb2RlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFyY29kZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhcmNvZGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10YWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10YWdzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFnczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvb2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ib29rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYm9va21hcms6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ib29rbWFyazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXByaW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcHJpbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYW1lcmE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb250OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9udDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvbGQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ib2xkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taXRhbGljOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaXRhbGljOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGV4dC1oZWlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10ZXh0LWhlaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRleHQtd2lkdGg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10ZXh0LXdpZHRoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFsaWduLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbGlnbi1jZW50ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1jZW50ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbGlnbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFsaWduLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tanVzdGlmeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFsaWduLWp1c3RpZnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRlZGVudDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tb3V0ZGVudDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW91dGRlbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmRlbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbmRlbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aWRlby1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12aWRlby1jYW1lcmE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1waG90bzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taW1hZ2U6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpY3R1cmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpY3R1cmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBlbmNpbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBlbmNpbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcC1tYXJrZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXAtbWFya2VyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRqdXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRqdXN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGludDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRpbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lZGl0OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1wZW5jaWwtc3F1YXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wZW5jaWwtc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNoYXJlLXNxdWFyZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hlY2stc3F1YXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGVjay1zcXVhcmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGVwLWJhY2t3YXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmFzdC1iYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZhc3QtYmFja3dhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhY2t3YXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGxheTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhdXNlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RvcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0b3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9yd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhc3QtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZhc3QtZm9yd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0ZXAtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZXAtZm9yd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVqZWN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWplY3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBsdXMtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGx1cy1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taW51cy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taW51cy1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aW1lcy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW1lcy1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGVjay1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGVjay1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdWVzdGlvbi1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmZvLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluZm8tY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3Jvc3NoYWlyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNyb3NzaGFpcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aW1lcy1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRpbWVzLWNpcmNsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hlY2stY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGVjay1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1haWwtZm9yd2FyZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc2hhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4cGFuZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbXByZXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tcHJlc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGx1czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hc3RlcmlzazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFzdGVyaXNrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhjbGFtYXRpb24tY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2lmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZWFmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGVhZjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXllOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXllOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXllLXNsYXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXllLXNsYXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2FybmluZzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leGNsYW1hdGlvbi10cmlhbmdsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGxhbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmFuZG9tOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmFuZG9tOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWduZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYWduZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZXZyb24tZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJldHdlZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZXR3ZWV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hvcHBpbmctY2FydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNob3BwaW5nLWNhcnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb2xkZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb2xkZXItb3BlbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvbGRlci1vcGVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3dzLXY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvd3MtdjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93cy1oOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3dzLWg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXItY2hhcnQtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmFyLWNoYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmFyLWNoYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHdpdHRlci1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10d2l0dGVyLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhY2Vib29rLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZhY2Vib29rLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhbWVyYS1yZXRybzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbWVyYS1yZXRybzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWtleTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWtleTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdlYXJzOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jb2dzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29nczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbW1lbnRzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tbWVudHM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYnMtby11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1icy1vLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGh1bWJzLW8tZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1icy1vLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyLWhhbGY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZWFydC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhcnQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ24tb3V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2lnbi1vdXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5rZWRpbi1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYi10YWNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGh1bWItdGFjazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4dGVybmFsLWxpbms6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leHRlcm5hbC1saW5rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2lnbi1pbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNpZ24taW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cm9waHk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cm9waHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXRodWItc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2l0aHViLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVwbG9hZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxlbW9uLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sZW1vbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGhvbmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waG9uZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ib29rbWFyay1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9va21hcmstbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBob25lLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBob25lLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10d2l0dGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmFjZWJvb2stZjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZmFjZWJvb2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYWNlYm9vazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdGh1YjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdGh1YjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVubG9jazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVubG9jazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNyZWRpdC1jYXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JlZGl0LWNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mZWVkOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZGQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhkZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVsbGhvcm46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWxsaG9ybjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iZWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2VydGlmaWNhdGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jZXJ0aWZpY2F0ZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtby1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtby1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtby1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1vLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLW8tdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtby1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nbG9iZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsb2JlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3JlbmNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd3JlbmNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFza3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YXNrczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbHRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbHRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJyaWVmY2FzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93cy1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvd3MtYWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ3JvdXA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXVzZXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGFpbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tbGluazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpbms7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb3VkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxhc2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mbGFzazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWN1dDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc2Npc3NvcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zY2lzc29yczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvcHk6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlcy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGFwZXJjbGlwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFwZXJjbGlwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2F2ZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZmxvcHB5LW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mbG9wcHktbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW5hdmljb246YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlb3JkZXI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdC11bDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3QtdWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saXN0LW9sOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlzdC1vbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0cmlrZXRocm91Z2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdHJpa2V0aHJvdWdoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW5kZXJsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW5kZXJsaW5lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFibGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWJsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hZ2ljOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFnaWM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cnVjazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRydWNrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGludGVyZXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGludGVyZXN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGludGVyZXN0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpbnRlcmVzdC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGUtcGx1cy1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtcGx1czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdvb2dsZS1wbHVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW9uZXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb25leTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbHVtbnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2x1bW5zOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW5zb3J0ZWQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1kb3duOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWRlc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LXVwOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFzYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvcnQtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZW52ZWxvcGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbmtlZGluOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlua2VkaW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtbGVmdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdW5kbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVuZG87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZWdhbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZ2F2ZWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nYXZlbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRhc2hib2FyZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGFjaG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRhY2hvbWV0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50LW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21tZW50LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50cy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tbWVudHMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYXNoOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1ib2x0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9sdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpdGVtYXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaXRlbWFwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW1icmVsbGE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bWJyZWxsYTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhc3RlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jbGlwYm9hcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saWdodGJ1bGItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpZ2h0YnVsYi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXhjaGFuZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leGNoYW5nZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xvdWQtZG93bmxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG91ZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jbG91ZC11cGxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLW1kOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci1tZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0ZXRob3Njb3BlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RldGhvc2NvcGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdWl0Y2FzZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1aXRjYXNlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVsbC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29mZmVlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29mZmVlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3V0bGVyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWN1dGxlcnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXRleHQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtdGV4dC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVpbGRpbmctbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJ1aWxkaW5nLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3NwaXRhbC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG9zcGl0YWwtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFtYnVsYW5jZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFtYnVsYW5jZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1lZGtpdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpZ2h0ZXItamV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlnaHRlci1qZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWgtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVzLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXMtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3VibGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWRvdWJsZS1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWRvdWJsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5nbGUtZG91YmxlLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5nbGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5nbGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZXNrdG9wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGVza3RvcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxhcHRvcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhYmxldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRhYmxldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vYmlsZS1waG9uZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tbW9iaWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW9iaWxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXF1b3RlLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdW90ZS1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVvdGUtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdW90ZS1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNwaW5uZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zcGlubmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFpbC1yZXBseTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmVwbHk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZXBseTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdGh1Yi1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naXRodWItYWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9sZGVyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb2xkZXItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvbGRlci1vcGVuLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb2xkZXItb3Blbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc21pbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNtaWxlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mcm93bi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZnJvd24tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1laC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWVoLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nYW1lcGFkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2FtZXBhZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWtleWJvYXJkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1rZXlib2FyZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxhZy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhZy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mbGFnLWNoZWNrZXJlZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRlcm1pbmFsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVybWluYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb2RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29kZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1haWwtcmVwbHktYWxsOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yZXBseS1hbGw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZXBseS1hbGw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLWhhbGYtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0YXItaGFsZi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9jYXRpb24tYXJyb3c6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb2NhdGlvbi1hcnJvdzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNyb3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jcm9wOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kZS1mb3JrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29kZS1mb3JrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW5saW5rOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jaGFpbi1icm9rZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGFpbi1icm9rZW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdWVzdGlvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXF1ZXN0aW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5mbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluZm87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leGNsYW1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4Y2xhbWF0aW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3VwZXJzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdXBlcnNjcmlwdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1YnNjcmlwdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1YnNjcmlwdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVyYXNlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVyYXNlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXB1enpsZS1waWVjZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXB1enpsZS1waWVjZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pY3JvcGhvbmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taWNyb3Bob25lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWljcm9waG9uZS1zbGFzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pY3JvcGhvbmUtc2xhc2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGllbGQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGllbGQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FsZW5kYXItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlyZS1leHRpbmd1aXNoZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb2NrZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yb2NrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXhjZG46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXhjZG47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi1jaXJjbGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi1jaXJjbGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1odG1sNTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWh0bWw1OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3NzMzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNzczM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmNob3I6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmNob3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11bmxvY2stYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW5sb2NrLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1bGxzZXllOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnVsbHNleWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbGxpcHNpcy1oOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWxsaXBzaXMtaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVsbGlwc2lzLXY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbGxpcHNpcy12OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcnNzLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJzcy1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbGF5LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYXktY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGlja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGlja2V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWludXMtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXMtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWludXMtc3F1YXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taW51cy1zcXVhcmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxldmVsLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGV2ZWwtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZXZlbC1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGV2ZWwtZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZWNrLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBlbmNpbC1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wZW5jaWwtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leHRlcm5hbC1saW5rLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoYXJlLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNoYXJlLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21wYXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdG9nZ2xlLWRvd246YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1zcXVhcmUtby1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdG9nZ2xlLXVwOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcmV0LXNxdWFyZS1vLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXVybzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZXVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2JwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2JwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZG9sbGFyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS11c2Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ydXBlZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taW5yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY255OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1ybWI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXllbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tanB5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItanB5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcnVibGU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvdWJsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcnViOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcnViOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td29uOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1rcnc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1rcnc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iaXRjb2luOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1idGM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idGM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtdGV4dDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtdGV4dDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbHBoYS1hc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFscGhhLWRlc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LWFscGhhLWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LWFtb3VudC1hc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbW91bnQtZGVzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LW51bWVyaWMtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1udW1lcmljLWRlc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LW51bWVyaWMtZGVzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRodW1icy11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1icy11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRodW1icy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGh1bWJzLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15b3V0dWJlLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXlvdXR1YmUtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW91dHViZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXlvdXR1YmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS14aW5nOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteGluZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXhpbmctc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteGluZy1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15b3V0dWJlLXBsYXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b3V0dWJlLXBsYXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcm9wYm94OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZHJvcGJveDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RhY2stb3ZlcmZsb3c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnN0YWdyYW06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbnN0YWdyYW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mbGlja3I6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mbGlja3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hZG46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZG47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iaXRidWNrZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iaXRidWNrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYml0YnVja2V0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR1bWJscjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXR1bWJscjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR1bWJsci1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10dW1ibHItc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9uZy1hcnJvdy1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvbmctYXJyb3ctdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb25nLWFycm93LWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9uZy1hcnJvdy1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFwcGxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXBwbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aW5kb3dzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZHJvaWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmRyb2lkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGludXg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW51eDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRyaWJiYmxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZHJpYmJibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1za3lwZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNreXBlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm91cnNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvdXJzcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmVsbG86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmVsbG87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mZW1hbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mZW1hbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdHRpcDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZ3JhdGlwYXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ncmF0aXBheTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1bi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3VuLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb29uLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb29uLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJjaGl2ZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1ZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJ1ZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdms7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13ZWlibzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdlaWJvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVucmVuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVucmVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGFnZWxpbmVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFnZWxpbmVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFjay1leGNoYW5nZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1sZWZ0OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtc3F1YXJlLW8tbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRvdC1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRvdC1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdoZWVsY2hhaXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aGVlbGNoYWlyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmltZW8tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmltZW8tc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHVya2lzaC1saXJhOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10cnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVzLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGx1cy1zcXVhcmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNwYWNlLXNodXR0bGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zcGFjZS1zaHV0dGxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2xhY2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbGFjazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVudmVsb3BlLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdvcmRwcmVzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdvcmRwcmVzczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW9wZW5pZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9wZW5pZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWluc3RpdHV0aW9uOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYW5rOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS11bml2ZXJzaXR5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW5pdmVyc2l0eTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vcnRhci1ib2FyZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ncmFkdWF0aW9uLWNhcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXlhaG9vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteWFob287IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZWRkaXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWRkaXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVkZGl0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0dW1ibGV1cG9uLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0dW1ibGV1cG9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3R1bWJsZXVwb247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZWxpY2lvdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kZWxpY2lvdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kaWdnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGlnZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZWQtcGlwZXItcHA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWVkLXBpcGVyLXBwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGllZC1waXBlci1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWVkLXBpcGVyLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRydXBhbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRydXBhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWpvb21sYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWpvb21sYTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxhbmd1YWdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGFuZ3VhZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYXg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYXg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idWlsZGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJ1aWxkaW5nOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hpbGQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGlsZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhdzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhdzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNwb29uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Bvb247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jdWJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3ViZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWN1YmVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3ViZXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWhhbmNlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVoYW5jZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVoYW5jZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGVhbTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZWFtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RlYW0tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RlYW0tc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVjeWNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlY3ljbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hdXRvbW9iaWxlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRheGk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YXhpOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJlZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyZWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcG90aWZ5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3BvdGlmeTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRldmlhbnRhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kZXZpYW50YXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc291bmRjbG91ZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvdW5kY2xvdWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kYXRhYmFzZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRhdGFiYXNlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1wZGYtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtcGRmLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXdvcmQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtd29yZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1leGNlbC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1leGNlbC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1wb3dlcnBvaW50LW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXBvd2VycG9pbnQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcGhvdG8tbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1waWN0dXJlLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtaW1hZ2UtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtaW1hZ2UtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtemlwLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1hcmNoaXZlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXNvdW5kLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtYXVkaW8tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtYXVkaW8tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtbW92aWUtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS12aWRlby1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS12aWRlby1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1jb2RlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLWNvZGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZpbmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12aW5lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kZXBlbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGVwZW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1qc2ZpZGRsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWpzZmlkZGxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlmZS1ib3V5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1saWZlLWJ1b3k6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpZmUtc2F2ZXI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1cHBvcnQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpZmUtcmluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpZmUtcmluZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2lyY2xlLW8tbm90Y2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yYTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmVzaXN0YW5jZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmViZWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWJlbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1lbXBpcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbXBpcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2l0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXljLXNxdWFyZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taGFja2VyLW5ld3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYWNrZXItbmV3czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRlbmNlbnQtd2VpYm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10ZW5jZW50LXdlaWJvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xcTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdlY2hhdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0td2VpeGluOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2VpeGluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VuZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcGFwZXItcGxhbmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXBlci1wbGFuZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlbmQtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcGFwZXItcGxhbmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhcGVyLXBsYW5lLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oaXN0b3J5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGlzdG9yeTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZS10aGluOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2lyY2xlLXRoaW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZWFkZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZWFkZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXJhZ3JhcGg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXJhZ3JhcGg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbGlkZXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2xpZGVyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoYXJlLWFsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNoYXJlLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1hbHQtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYm9tYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJvbWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1mdXRib2wtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZ1dGJvbC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHR5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHR5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmlub2N1bGFyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpbm9jdWxhcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGx1ZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNsaWRlc2hhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbGlkZXNoYXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHdpdGNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHdpdGNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teWVscDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXllbHA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1uZXdzcGFwZXItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW5ld3NwYXBlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2lmaTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpZmk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FsY3VsYXRvcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBheXBhbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBheXBhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdvb2dsZS13YWxsZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGUtd2FsbGV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtdmlzYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLXZpc2E7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtbWFzdGVyY2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLWRpc2NvdmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtZGlzY292ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1hbWV4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtYW1leDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLXBheXBhbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLXBheXBhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLXN0cmlwZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLXN0cmlwZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGwtc2xhc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iZWxsLXNsYXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVsbC1zbGFzaC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbC1zbGFzaC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJhc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFzaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvcHlyaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvcHlyaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWF0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leWVkcm9wcGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXllZHJvcHBlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhaW50LWJydXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFpbnQtYnJ1c2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmlydGhkYXktY2FrZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFyZWEtY2hhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcmVhLWNoYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGllLWNoYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGllLWNoYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGluZS1jaGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpbmUtY2hhcnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYXN0Zm06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sYXN0Zm07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGFzdGZtLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1vZmY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10b2dnbGUtb2ZmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdG9nZ2xlLW9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdG9nZ2xlLW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmljeWNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpY3ljbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pb3hob3N0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW94aG9zdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2VsbGlzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2VsbGlzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGVrZWw6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoZXFlbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taWxzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaWxzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWVhbnBhdGg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWFucGF0aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1eXNlbGxhZHM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idXlzZWxsYWRzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29ubmVjdGRldmVsb3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb25uZWN0ZGV2ZWxvcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRhc2hjdWJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGFzaGN1YmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb3J1bWJlZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvcnVtYmVlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGVhbnB1YjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxlYW5wdWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZWxsc3k6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zZWxsc3k7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGlydHNpbmJ1bGs6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGlydHNpbmJ1bGs7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaW1wbHlidWlsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNpbXBseWJ1aWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2t5YXRsYXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1za3lhdGxhczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcnQtcGx1czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcnQtcGx1czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcnQtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcnQtYXJyb3ctZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRpYW1vbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kaWFtb25kOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hpcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNoaXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLXNlY3JldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItc2VjcmV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW90b3JjeWNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vdG9yY3ljbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHJlZXQtdmlldzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0cmVldC12aWV3OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhcnRiZWF0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhcnRiZWF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmVudXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12ZW51czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWVyY3VyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1lcmN1cnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnRlcnNleDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdHJhbnNnZW5kZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFuc2dlbmRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyYW5zZ2VuZGVyLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZlbnVzLWRvdWJsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZlbnVzLWRvdWJsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcnMtZG91YmxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFycy1kb3VibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12ZW51cy1tYXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmVudXMtbWFyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcnMtc3Ryb2tlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFycy1zdHJva2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFycy1zdHJva2UtdjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXJzLXN0cm9rZS1oOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbmV1dGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbmV1dGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2VuZGVybGVzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdlbmRlcmxlc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZhY2Vib29rLW9mZmljaWFsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGludGVyZXN0LXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waW50ZXJlc3QtcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdoYXRzYXBwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2hhdHNhcHA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZXJ2ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zZXJ2ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLXRpbWVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci10aW1lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdGVsOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iZWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iZWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aWFjb2luOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlhY29pbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYWluOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhaW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdWJ3YXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdWJ3YXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWRpdW06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWRpdW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15YzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0teS1jb21iaW5hdG9yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteS1jb21iaW5hdG9yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb3B0aW4tbW9uc3RlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9wdGluLW1vbnN0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vcGVuY2FydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9wZW5jYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXhwZWRpdGVkc3NsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhwZWRpdGVkc3NsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS00OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LWZ1bGw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LTM6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS0yOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LWhhbGY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LTE6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktcXVhcnRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhdHRlcnktcXVhcnRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktMDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhdHRlcnktZW1wdHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW91c2UtcG9pbnRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWktY3Vyc29yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaS1jdXJzb3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vYmplY3QtZ3JvdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vYmplY3QtZ3JvdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vYmplY3QtdW5ncm91cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9iamVjdC11bmdyb3VwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RpY2t5LW5vdGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGlja3ktbm90ZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0aWNreS1ub3RlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGlja3ktbm90ZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtamNiOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtamNiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtZGluZXJzLWNsdWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy1kaW5lcnMtY2x1YjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNsb25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xvbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmFsYW5jZS1zY2FsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91cmdsYXNzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtMTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91cmdsYXNzLXN0YXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLTI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91cmdsYXNzLWhhbGY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtMzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLWVuZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1lbmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ob3VyZ2xhc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLWdyYWItbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1yb2NrLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXJvY2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtc3RvcC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXBhcGVyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXBhcGVyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXNjaXNzb3JzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXNjaXNzb3JzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLWxpemFyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1saXphcmQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtc3BvY2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtc3BvY2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1wb2ludGVyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXBlYWNlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXBlYWNlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFkZW1hcms6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFkZW1hcms7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZWdpc3RlcmVkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVnaXN0ZXJlZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jcmVhdGl2ZS1jb21tb25zOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2c6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdnLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdnLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyaXBhZHZpc29yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJpcGFkdmlzb3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vZG5va2xhc3NuaWtpOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItb2Rub2tsYXNzbmlraTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItb2Rub2tsYXNzbmlraS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZXQtcG9ja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2V0LXBvY2tldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdpa2lwZWRpYS13OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2lraXBlZGlhLXc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zYWZhcmk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zYWZhcmk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaHJvbWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaHJvbWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJlZm94OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlyZWZveDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW9wZXJhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItb3BlcmE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWludGVybmV0LWV4cGxvcmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHY6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRlbGV2aXNpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10ZWxldmlzaW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29udGFvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29udGFvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tNTAwcHg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci01MDBweDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFtYXpvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFtYXpvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLXBsdXMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhci1taW51cy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXItdGltZXMtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLXRpbWVzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FsZW5kYXItY2hlY2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWluZHVzdHJ5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5kdXN0cnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtcGluOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwLXBpbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcC1zaWduczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcC1zaWduczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1hcC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50aW5nOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tbWVudGluZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbW1lbnRpbmctbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRpbmctbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXp6OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91eno7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aW1lbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpbWVvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmxhY2stdGllOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmxhY2stdGllOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9udGljb25zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9udGljb25zOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVkZGl0LWFsaWVuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVkZGl0LWFsaWVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZWRnZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVkZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jcmVkaXQtY2FyZC1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb2RpZXBpZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGllcGllOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW9keDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vZHg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb3J0LWF3ZXNvbWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2I6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wcm9kdWN0LWh1bnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taXhjbG91ZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1peGNsb3VkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2NyaWJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2NyaWJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGF1c2UtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGF1c2UtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGF1c2UtY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXVzZS1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0b3AtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RvcC1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RvcC1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNob3BwaW5nLWJhZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNob3BwaW5nLWJhZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNob3BwaW5nLWJhc2tldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNob3BwaW5nLWJhc2tldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhc2h0YWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYXNodGFnOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmx1ZXRvb3RoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmx1ZXRvb3RoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmx1ZXRvb3RoLWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ibHVldG9vdGgtYjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBlcmNlbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wZXJjZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2l0bGFiOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2l0bGFiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3BiZWdpbm5lcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdwYmVnaW5uZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13cGZvcm1zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd3Bmb3JtczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmlyYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVudmlyYTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bml2ZXJzYWwtYWNjZXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2hlZWxjaGFpci1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aGVlbGNoYWlyLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXF1ZXN0aW9uLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVlc3Rpb24tY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ibGluZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJsaW5kOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXVkaW8tZGVzY3JpcHRpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hdWRpby1kZXNjcmlwdGlvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZvbHVtZS1jb250cm9sLXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdm9sdW1lLWNvbnRyb2wtcGhvbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1icmFpbGxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnJhaWxsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFzbC1pbnRlcnByZXRpbmc6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZWFmbmVzczpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taGFyZC1vZi1oZWFyaW5nOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1kZWFmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGVhZjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdsaWRlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2xpZGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nbGlkZS1nOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2xpZGUtZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ25pbmc6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ24tbGFuZ3VhZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaWduLWxhbmd1YWdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG93LXZpc2lvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvdy12aXNpb247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aWFkZW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12aWFkZW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlhZGVvLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNuYXBjaGF0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc25hcGNoYXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbmFwY2hhdC1naG9zdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNuYXBjaGF0LWdob3N0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc25hcGNoYXQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc25hcGNoYXQtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGllZC1waXBlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpZWQtcGlwZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJzdC1vcmRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpcnN0LW9yZGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW9hc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b2FzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZW1laXNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZW1laXNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGUtcGx1cy1vZmZpY2lhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1mb250LWF3ZXNvbWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb250LWF3ZXNvbWU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kc2hha2UtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmRzaGFrZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZW52ZWxvcGUtb3BlbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVudmVsb3BlLW9wZW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbnZlbG9wZS1vcGVuLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1vcGVuLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saW5vZGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5vZGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWJvb2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZGRyZXNzLWJvb2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWJvb2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkZHJlc3MtYm9vay1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmNhcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWFkZHJlc3MtY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkZHJlc3MtY2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZjYXJkLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWFkZHJlc3MtY2FyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRkcmVzcy1jYXJkLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pZC1iYWRnZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlkLWJhZGdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZHJpdmVycy1saWNlbnNlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1pZC1jYXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaWQtY2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRyaXZlcnMtbGljZW5zZS1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1pZC1jYXJkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pZC1jYXJkLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdW9yYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXF1b3JhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZnJlZS1jb2RlLWNhbXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mcmVlLWNvZGUtY2FtcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRlbGVncmFtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVsZWdyYW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci00OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlcjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLWZ1bGw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci0zOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItMjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLWhhbGY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci0xOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGhlcm1vbWV0ZXItcXVhcnRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLTA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGhlcm1vbWV0ZXItZW1wdHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaG93ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG93ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXRodHViOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zMTU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdGg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXRoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcG9kY2FzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBvZGNhc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aW5kb3ctbWF4aW1pemU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctbWF4aW1pemU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aW5kb3ctbWluaW1pemU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctbWluaW1pemU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aW5kb3ctcmVzdG9yZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpbmRvdy1yZXN0b3JlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS13aW5kb3ctY2xvc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctY2xvc2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LWNsb3NlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctY2xvc2UtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhbmRjYW1wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmFuZGNhbXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ncmF2OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ3JhdjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV0c3k6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ldHN5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW1kYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWltZGI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yYXZlbHJ5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmF2ZWxyeTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVlcmNhc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lZXJjYXN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWljcm9jaGlwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWljcm9jaGlwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc25vd2ZsYWtlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbm93Zmxha2UtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1cGVycG93ZXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3VwZXJwb3dlcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13cGV4cGxvcmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd3BleHBsb3JlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lZXR1cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1lZXR1cDsgfVxuIiwiLy8gU2NyZWVuIFJlYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnNyLW9ubHkgeyBAaW5jbHVkZSBzci1vbmx5KCk7IH1cbi5zci1vbmx5LWZvY3VzYWJsZSB7IEBpbmNsdWRlIHNyLW9ubHktZm9jdXNhYmxlKCk7IH1cbiIsIiRmYS1mb250LXBhdGg6IFwiaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHNcIiAhZGVmYXVsdDsgLy8gZm9yIHJlZmVyZW5jaW5nIEJvb3RzdHJhcCBDRE4gZm9udCBmaWxlcyBkaXJlY3RseVxuQGltcG9ydCBcIn5mb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzc1wiO1xuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6MDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjhweDtcbiAgICBoZWlnaHQ6OHB4O1xuICAgIGN1cnNvcjogbndzZS1yZXNpemU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpXG4gIH1cbn1cblxuLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIge1xuICBmb250OiAxMDAgMTRweC8xNXB4IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cbiAgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAuYW5ndWxhci1lZGl0b3ItYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICBtaW4td2lkdGg6IDIuMHJlbTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICYuZm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgPiAuY29sb3ItbGFiZWwge1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgICAmLmZvcmVncm91bmQge1xuICAgICAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmJhY2tncm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmNWI5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhOTg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3Qge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5zZWxlY3QtaGVhZGluZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIEBzdXBwb3J0cyBub3QoIC1tb3otYXBwZWFyYW5jZTpub25lICkge1xuICAgICAgICBvcHRncm91cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZmF1bHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAuaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuaDYge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QtZm9udCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIEBzdXBwb3J0cyBub3QoIC1tb3otYXBwZWFyYW5jZTpub25lICkge1xuICAgICAgICBvcHRncm91cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdC1mb250LXNpemUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBAc3VwcG9ydHMgbm90KCAtbW96LWFwcGVhcmFuY2U6bm9uZSApIHtcbiAgICAgICAgb3B0Z3JvdXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zaXplMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QtY3VzdG9tLXN0eWxlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgQHN1cHBvcnRzIG5vdCggLW1vei1hcHBlYXJhbmNlOm5vbmUgKSB7XG4gICAgICAgIG9wdGdyb3VwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAvKi5zaXplMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaXplNyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9Ki9cbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbG9yLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWIxYjFiO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cblxuICAgIC5mb3JlZ3JvdW5kIHtcbiAgICAgIDphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBib3R0b206IC0zcHg7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxYjFiMWI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldDpub3QoW3N0eWxlKj1cImRpc3BsYXk6bm9uZVwiXSk6bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lXCJdKXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbiJdfQ== */"]
        });
        return AngularEditorToolbarComponent;
      }();
      /***/

    },

    /***/
    "977L":
    /*!**************************************************************************!*\
      !*** ./projects/angular-editor/src/lib/ae-select/ae-select.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AeSelectComponent */

    /***/
    function L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AeSelectComponent", function () {
        return AeSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils */
      "0ZoQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["labelButton"];

      var _c1 = function _c1(a0, a1) {
        return {
          "selected": a0,
          "focused": a1
        };
      };

      function AeSelectComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var item_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.optionSelect(item_r3, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.label, " ");
        }
      }

      function AeSelectComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items for select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "ae-expanded": a0
        };
      };

      var AeSelectComponent = /*@__PURE__*/function () {
        var AeSelectComponent = /*#__PURE__*/function () {
          function AeSelectComponent(elRef, r) {
            _classCallCheck(this, AeSelectComponent);

            this.elRef = elRef;
            this.r = r;
            this.options = [];
            this.disabled = false;
            this.optionId = 0;
            this.opened = false;
            this.hidden = 'inline-block'; // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

            this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

            this.onChange = function () {};

            this.onTouched = function () {};
          }

          _createClass(AeSelectComponent, [{
            key: "label",
            get: function get() {
              return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
            }
          }, {
            key: "value",
            get: function get() {
              return this.selectedOption.value;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.selectedOption = this.options[0];

              if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(this.isHidden) && this.isHidden) {
                this.hide();
              }
            }
          }, {
            key: "hide",
            value: function hide() {
              this.hidden = 'none';
            }
          }, {
            key: "optionSelect",
            value: function optionSelect(option, event) {
              event.stopPropagation();
              this.setValue(option.value);
              this.onChange(this.selectedOption.value);
              this.changeEvent.emit(this.selectedOption.value);
              this.onTouched();
              this.opened = false;
            }
          }, {
            key: "toggleOpen",
            value: function toggleOpen(event) {
              // event.stopPropagation();
              if (this.disabled) {
                return;
              }

              this.opened = !this.opened;
            }
          }, {
            key: "onClick",
            value: function onClick($event) {
              if (!this.elRef.nativeElement.contains($event.target)) {
                this.close();
              }
            }
          }, {
            key: "close",
            value: function close() {
              this.opened = false;
            }
          }, {
            key: "isOpen",
            get: function get() {
              return this.opened;
            }
          }, {
            key: "writeValue",
            value: function writeValue(value) {
              if (!value || typeof value !== 'string') {
                return;
              }

              this.setValue(value);
            }
          }, {
            key: "setValue",
            value: function setValue(value) {
              var index = 0;
              var selectedEl = this.options.find(function (el, i) {
                index = i;
                return el.value === value;
              });

              if (selectedEl) {
                this.selectedOption = selectedEl;
                this.optionId = index;
              }
            }
          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this.onChange = fn;
            }
          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this.onTouched = fn;
            }
          }, {
            key: "setDisabledState",
            value: function setDisabledState(isDisabled) {
              this.labelButton.nativeElement.disabled = isDisabled;
              var div = this.labelButton.nativeElement;
              var action = isDisabled ? 'addClass' : 'removeClass';
              this.r[action](div, 'disabled');
              this.disabled = isDisabled;
            }
          }, {
            key: "handleKeyDown",
            value: function handleKeyDown($event) {
              if (!this.opened) {
                return;
              } // console.log($event.key);
              // if (KeyCode[$event.key]) {


              switch ($event.key) {
                case 'ArrowDown':
                  this._handleArrowDown($event);

                  break;

                case 'ArrowUp':
                  this._handleArrowUp($event);

                  break;

                case 'Space':
                  this._handleSpace($event);

                  break;

                case 'Enter':
                  this._handleEnter($event);

                  break;

                case 'Tab':
                  this._handleTab($event);

                  break;

                case 'Escape':
                  this.close();
                  $event.preventDefault();
                  break;

                case 'Backspace':
                  this._handleBackspace();

                  break;
              } // } else if ($event.key && $event.key.length === 1) {
              // this._keyPress$.next($event.key.toLocaleLowerCase());
              // }

            }
          }, {
            key: "_handleArrowDown",
            value: function _handleArrowDown($event) {
              if (this.optionId < this.options.length - 1) {
                this.optionId++;
              }
            }
          }, {
            key: "_handleArrowUp",
            value: function _handleArrowUp($event) {
              if (this.optionId >= 1) {
                this.optionId--;
              }
            }
          }, {
            key: "_handleSpace",
            value: function _handleSpace($event) {}
          }, {
            key: "_handleEnter",
            value: function _handleEnter($event) {
              this.optionSelect(this.options[this.optionId], $event);
            }
          }, {
            key: "_handleTab",
            value: function _handleTab($event) {}
          }, {
            key: "_handleBackspace",
            value: function _handleBackspace() {}
          }]);

          return AeSelectComponent;
        }();

        AeSelectComponent.ɵfac = function AeSelectComponent_Factory(t) {
          return new (t || AeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
        };

        AeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AeSelectComponent,
          selectors: [["ae-select"]],
          viewQuery: function AeSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelButton = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_click_HostBindingHandler($event) {
                return ctx.onClick($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
                return ctx.handleKeyDown($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidden);
            }
          },
          inputs: {
            options: "options",
            isHidden: ["hidden", "isHidden"]
          },
          outputs: {
            changeEvent: "change"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return AeSelectComponent;
            }),
            multi: true
          }])],
          decls: 10,
          vars: 7,
          consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]],
          template: function AeSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_Template_button_click_1_listener($event) {
                return ctx.toggleOpen($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polygon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.isOpen));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", -1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options.length);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
          styles: [".ae-font.ae-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  width: 100%;\n  position: relative;\n  vertical-align: middle;\n}\n.ae-font .ae-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 10px;\n  position: relative;\n  width: 100%;\n  line-height: 26px;\n  vertical-align: middle;\n  font-size: 85%;\n  text-align: left;\n  background-color: white;\n  min-width: 2rem;\n  float: left;\n  border: 1px solid #ddd;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ae-font .ae-picker-label:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n  height: 100%;\n  background: linear-gradient(to right, white, #ffffff 100%);\n}\n.ae-font .ae-picker-label:focus {\n  outline: none;\n}\n.ae-font .ae-picker-label:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.ae-font .ae-picker-label:hover:before {\n  background: linear-gradient(to right, #f5f5f5 100%, #ffffff 100%);\n}\n.ae-font .ae-picker-label:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.ae-font .ae-picker-label:disabled:before {\n  background: linear-gradient(to right, #f5f5f5 100%, #ffffff 100%);\n}\n.ae-font .ae-picker-label svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ae-font .ae-picker-label svg:not(:root) {\n  overflow: hidden;\n}\n.ae-font .ae-picker-label svg .ae-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ae-font .ae-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  position: absolute;\n  white-space: nowrap;\n  z-index: 3;\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ae-font .ae-picker-options .ae-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  padding-left: 5px;\n  z-index: 3;\n  text-align: left;\n  background-color: transparent;\n  min-width: 2rem;\n  width: 100%;\n  border: 0 solid #ddd;\n}\n.ae-font .ae-picker-options .ae-picker-item.selected {\n  color: #06c;\n  background-color: #fff4c2;\n}\n.ae-font .ae-picker-options .ae-picker-item.focused {\n  background-color: #fffa98;\n}\n.ae-font .ae-picker-options .ae-picker-item:hover {\n  background-color: #fffa98;\n}\n.ae-font.ae-expanded {\n  display: block;\n  margin-top: -1px;\n  z-index: 1;\n}\n.ae-font.ae-expanded .ae-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ae-font.ae-expanded .ae-picker-label svg {\n  color: #ccc;\n  z-index: 2;\n}\n.ae-font.ae-expanded .ae-picker-label svg .ae-stroke {\n  stroke: #ccc;\n}\n.ae-font.ae-expanded .ae-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 3;\n  border-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLE1BQUE7RUFDVixXQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0FBRU47QUFBSTtFQUNFLGFBQUE7QUFFTjtBQUFJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFFTjtBQURNO0VBQ0UsaUVBQUE7QUFHUjtBQUFJO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRU47QUFETTtFQUNFLGlFQUFBO0FBR1I7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDTjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQUFNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRUU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVSO0FBQU07RUFDRSx5QkFBQTtBQUVSO0FBQU07RUFDRSx5QkFBQTtBQUVSO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBRVI7QUFEUTtFQUNFLFlBQUE7QUFHVjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNOIiwiZmlsZSI6ImFlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZS1mb250IHtcbiAgJi5hZS1waWNrZXIge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYWUtcGlja2VyLWxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDsgdG9wOiAwO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwxKSwgI2ZmZmZmZiAxMDAlKTtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1ZjVmNSAxMDAlLCAjZmZmZmZmIDEwMCUpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1ZjVmNSAxMDAlLCAjZmZmZmZmIDEwMCUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgJjpub3QoOnJvb3QpIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5hZS1zdHJva2Uge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2U6ICM0NDQ7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWUtcGlja2VyLW9wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMikgMCAycHggOHB4O1xuICAgIC5hZS1waWNrZXItaXRlbSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWluLXdpZHRoOiAycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDAgc29saWQgI2RkZDtcbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBjb2xvcjogIzA2YztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjRjMjtcbiAgICAgIH1cbiAgICAgICYuZm9jdXNlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhOTg7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmE5ODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5hZS1leHBhbmRlZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC5hZS1waWNrZXItbGFiZWwge1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgc3ZnIHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIC5hZS1zdHJva2Uge1xuICAgICAgICAgIHN0cm9rZTogI2NjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWUtcGlja2VyLW9wdGlvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"],
          encapsulation: 2
        });
        return AeSelectComponent;
      }();
      /***/

    },

    /***/
    "IyRi":
    /*!*************************************************!*\
      !*** ./projects/angular-editor-app/src/main.ts ***!
      \*************************************************/

    /*! no exports provided */

    /***/
    function IyRi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "mqih");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "Unoj");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "RixW":
    /*!******************************************************************!*\
      !*** ./projects/angular-editor/src/lib/angular-editor.module.ts ***!
      \******************************************************************/

    /*! exports provided: AngularEditorModule */

    /***/
    function RixW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function () {
        return AngularEditorModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./angular-editor.component */
      "aTUH");
      /* harmony import */


      var _angular_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./angular-editor-toolbar.component */
      "7q4J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ae_select_ae_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ae-select/ae-select.component */
      "977L");

      var AngularEditorModule = /*@__PURE__*/function () {
        var AngularEditorModule = /*#__PURE__*/_createClass(function AngularEditorModule() {
          _classCallCheck(this, AngularEditorModule);
        });

        AngularEditorModule.ɵfac = function AngularEditorModule_Factory(t) {
          return new (t || AngularEditorModule)();
        };

        AngularEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AngularEditorModule
        });
        AngularEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
        });
        return AngularEditorModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularEditorModule, {
          declarations: [_angular_editor_component__WEBPACK_IMPORTED_MODULE_1__["AngularEditorComponent"], _angular_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["AngularEditorToolbarComponent"], _ae_select_ae_select_component__WEBPACK_IMPORTED_MODULE_5__["AeSelectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          exports: [_angular_editor_component__WEBPACK_IMPORTED_MODULE_1__["AngularEditorComponent"], _angular_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["AngularEditorToolbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "Unoj":
    /*!***********************************************************!*\
      !*** ./projects/angular-editor-app/src/app/app.module.ts ***!
      \***********************************************************/

    /*! exports provided: AppModule */

    /***/
    function Unoj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "t6FZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_editor_src_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../angular-editor/src/lib/angular-editor.module */
      "RixW");

      var AppModule = /*@__PURE__*/function () {
        var AppModule = /*#__PURE__*/_createClass(function AppModule() {
          _classCallCheck(this, AppModule);
        });

        AppModule.ɵfac = function AppModule_Factory(t) {
          return new (t || AppModule)();
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          providers: [],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_editor_src_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_editor_src_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "aTUH":
    /*!*********************************************************************!*\
      !*** ./projects/angular-editor/src/lib/angular-editor.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AngularEditorComponent */

    /***/
    function aTUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function () {
        return AngularEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */
      "sc1s");
      /* harmony import */


      var _angular_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./angular-editor.service */
      "k6Zp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils */
      "0ZoQ");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./angular-editor-toolbar.component */
      "7q4J");

      var _c0 = ["editor"];
      var _c1 = ["editorWrapper"];
      var _c2 = ["editorToolbar"];

      function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.executeCommand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.id)("uploadUrl", ctx_r1.config.uploadUrl)("upload", ctx_r1.config.upload)("showToolbar", ctx_r1.config.showToolbar !== undefined ? ctx_r1.config.showToolbar : true)("fonts", ctx_r1.getFonts())("customClasses", ctx_r1.config.customClasses)("defaultFontName", ctx_r1.config.defaultFontName)("defaultFontSize", ctx_r1.config.defaultFontSize)("hiddenButtons", ctx_r1.config.toolbarHiddenButtons);
        }
      }

      function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.executeCommand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r4.id)("uploadUrl", ctx_r4.config.uploadUrl)("upload", ctx_r4.config.upload)("showToolbar", ctx_r4.config.showToolbar !== undefined ? ctx_r4.config.showToolbar : true)("fonts", ctx_r4.getFonts())("customClasses", ctx_r4.config.customClasses)("defaultFontName", ctx_r4.config.defaultFontName)("defaultFontSize", ctx_r4.config.defaultFontSize)("hiddenButtons", ctx_r4.config.toolbarHiddenButtons);
        }
      }

      var AngularEditorComponent = /*@__PURE__*/function () {
        var AngularEditorComponent = /*#__PURE__*/function () {
          function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
            _classCallCheck(this, AngularEditorComponent);

            this.r = r;
            this.editorService = editorService;
            this.doc = doc;
            this.sanitizer = sanitizer;
            this.cdRef = cdRef;
            this.autoFocus = autoFocus;
            this.modeVisual = true;
            this.showPlaceholder = false;
            this.disabled = false;
            this.focused = false;
            this.touched = false;
            this.changed = false;
            this.id = '';
            this.config = _config__WEBPACK_IMPORTED_MODULE_2__["angularEditorConfig"];
            this.placeholder = '';
            this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /** emits `blur` event when focused out from the textarea */
            // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

            this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /** emits `focus` event when focused in to the textarea */
            // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-native

            this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.tabindex = -1;
            var parsedTabIndex = Number(defaultTabIndex);
            this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
          }

          _createClass(AngularEditorComponent, [{
            key: "onFocus",
            value: function onFocus() {
              this.focus();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : _config__WEBPACK_IMPORTED_MODULE_2__["angularEditorConfig"].toolbarPosition;
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              if (Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(this.autoFocus)) {
                this.focus();
              }
            }
          }, {
            key: "onPaste",
            value: function onPaste(event) {
              if (this.config.rawPaste) {
                event.preventDefault();
                var text = event.clipboardData.getData('text/plain');
                document.execCommand('insertHTML', false, text);
                return text;
              }
            }
            /**
             * Executed command from editor header buttons
             * @param command string from triggerCommand
             */

          }, {
            key: "executeCommand",
            value: function executeCommand(command) {
              this.focus();

              if (command === 'focus') {
                return;
              }

              if (command === 'toggleEditorMode') {
                this.toggleEditorMode(this.modeVisual);
              } else if (command !== '') {
                if (command === 'clear') {
                  this.editorService.removeSelectedElements(this.getCustomTags());
                  this.onContentChange(this.textArea.nativeElement);
                } else if (command === 'default') {
                  this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
                  this.onContentChange(this.textArea.nativeElement);
                } else {
                  this.editorService.executeCommand(command);
                }

                this.exec();
              }
            }
            /**
             * focus event
             */

          }, {
            key: "onTextAreaFocus",
            value: function onTextAreaFocus(event) {
              var _this4 = this;

              if (this.focused) {
                event.stopPropagation();
                return;
              }

              this.focused = true;
              this.focusEvent.emit(event);

              if (!this.touched || !this.changed) {
                this.editorService.executeInNextQueueIteration(function () {
                  _this4.configure();

                  _this4.touched = true;
                });
              }
            }
            /**
             * @description fires when cursor leaves textarea
             */

          }, {
            key: "onTextAreaMouseOut",
            value: function onTextAreaMouseOut(event) {
              this.editorService.saveSelection();
            }
            /**
             * blur event
             */

          }, {
            key: "onTextAreaBlur",
            value: function onTextAreaBlur(event) {
              /**
               * save selection if focussed out
               */
              this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);

              if (typeof this.onTouched === 'function') {
                this.onTouched();
              }

              if (event.relatedTarget !== null) {
                var parent = event.relatedTarget.parentElement;

                if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
                  this.blurEvent.emit(event);
                  this.focused = false;
                }
              }
            }
            /**
             *  focus the text area when the editor is focused
             */

          }, {
            key: "focus",
            value: function focus() {
              if (this.modeVisual) {
                this.textArea.nativeElement.focus();
              } else {
                var sourceText = this.doc.getElementById('sourceText' + this.id);
                sourceText.focus();
                this.focused = true;
              }
            }
            /**
             * Executed from the contenteditable section while the input property changes
             * @param element html element from contenteditable
             */

          }, {
            key: "onContentChange",
            value: function onContentChange(element) {
              var html = '';

              if (this.modeVisual) {
                html = element.innerHTML;
              } else {
                html = element.innerText;
              }

              if (!html || html === '<br>') {
                html = '';
              }

              if (typeof this.onChange === 'function') {
                this.onChange(this.config.sanitize || this.config.sanitize === undefined ? this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);

                if (!html !== this.showPlaceholder) {
                  this.togglePlaceholder(this.showPlaceholder);
                }
              }

              this.changed = true;
            }
            /**
             * Set the function to be called
             * when the control receives a change event.
             *
             * @param fn a function
             */

          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this.onChange = function (e) {
                return e === '<br>' ? fn('') : fn(e);
              };
            }
            /**
             * Set the function to be called
             * when the control receives a touch event.
             *
             * @param fn a function
             */

          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this.onTouched = fn;
            }
            /**
             * Write a new value to the element.
             *
             * @param value value to be executed when there is a change in contenteditable
             */

          }, {
            key: "writeValue",
            value: function writeValue(value) {
              if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
              }

              if (value === undefined || value === '' || value === '<br>') {
                value = null;
              }

              this.refreshView(value);
            }
            /**
             * refresh view/HTML of the editor
             *
             * @param value html string from the editor
             */

          }, {
            key: "refreshView",
            value: function refreshView(value) {
              var normalizedValue = value === null ? '' : value;
              this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
              return;
            }
            /**
             * toggles placeholder based on input string
             *
             * @param value A HTML string from the editor
             */

          }, {
            key: "togglePlaceholder",
            value: function togglePlaceholder(value) {
              if (!value) {
                this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
                this.showPlaceholder = true;
              } else {
                this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
                this.showPlaceholder = false;
              }
            }
            /**
             * Implements disabled state for this element
             *
             * @param isDisabled Disabled flag
             */

          }, {
            key: "setDisabledState",
            value: function setDisabledState(isDisabled) {
              var div = this.textArea.nativeElement;
              var action = isDisabled ? 'addClass' : 'removeClass';
              this.r[action](div, 'disabled');
              this.disabled = isDisabled;
            }
            /**
             * toggles editor mode based on bToSource bool
             *
             * @param bToSource A boolean value from the editor
             */

          }, {
            key: "toggleEditorMode",
            value: function toggleEditorMode(bToSource) {
              var _this5 = this;

              var oContent;
              var editableElement = this.textArea.nativeElement;

              if (bToSource) {
                oContent = this.r.createText(editableElement.innerHTML);
                this.r.setProperty(editableElement, 'innerHTML', '');
                this.r.setProperty(editableElement, 'contentEditable', false);
                var oPre = this.r.createElement('pre');
                this.r.setStyle(oPre, 'margin', '0');
                this.r.setStyle(oPre, 'outline', 'none');
                var oCode = this.r.createElement('code');
                this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
                this.r.setStyle(oCode, 'display', 'block');
                this.r.setStyle(oCode, 'white-space', 'pre-wrap');
                this.r.setStyle(oCode, 'word-break', 'keep-all');
                this.r.setStyle(oCode, 'outline', 'none');
                this.r.setStyle(oCode, 'margin', '0');
                this.r.setStyle(oCode, 'background-color', '#fff5b9');
                this.r.setProperty(oCode, 'contentEditable', true);
                this.r.appendChild(oCode, oContent);
                this.focusInstance = this.r.listen(oCode, 'focus', function (event) {
                  return _this5.onTextAreaFocus(event);
                });
                this.blurInstance = this.r.listen(oCode, 'blur', function (event) {
                  return _this5.onTextAreaBlur(event);
                });
                this.r.appendChild(oPre, oCode);
                this.r.appendChild(editableElement, oPre); // ToDo move to service

                this.doc.execCommand('defaultParagraphSeparator', false, 'div');
                this.modeVisual = false;
                this.viewMode.emit(false);
                oCode.focus();
              } else {
                if (this.doc.querySelectorAll) {
                  this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
                } else {
                  oContent = this.doc.createRange();
                  oContent.selectNodeContents(editableElement.firstChild);
                  this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
                }

                this.r.setProperty(editableElement, 'contentEditable', true);
                this.modeVisual = true;
                this.viewMode.emit(true);
                this.onContentChange(editableElement);
                editableElement.focus();
              }

              this.editorToolbar.setEditorMode(!this.modeVisual);
            }
            /**
             * toggles editor buttons when cursor moved or positioning
             *
             * Send a node array from the contentEditable of the editor
             */

          }, {
            key: "exec",
            value: function exec() {
              this.editorToolbar.triggerButtons();
              var userSelection;

              if (this.doc.getSelection) {
                userSelection = this.doc.getSelection();
                this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
              }

              var a = userSelection.focusNode;
              var els = [];

              while (a && a.id !== 'editor') {
                els.unshift(a);
                a = a.parentNode;
              }

              this.editorToolbar.triggerBlocks(els);
            }
          }, {
            key: "configure",
            value: function configure() {
              this.editorService.uploadUrl = this.config.uploadUrl;
              this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;

              if (this.config.defaultParagraphSeparator) {
                this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
              }

              if (this.config.defaultFontName) {
                this.editorService.setFontName(this.config.defaultFontName);
              }

              if (this.config.defaultFontSize) {
                this.editorService.setFontSize(this.config.defaultFontSize);
              }
            }
          }, {
            key: "getFonts",
            value: function getFonts() {
              var fonts = this.config.fonts ? this.config.fonts : _config__WEBPACK_IMPORTED_MODULE_2__["angularEditorConfig"].fonts;
              return fonts.map(function (x) {
                return {
                  label: x.name,
                  value: x.name
                };
              });
            }
          }, {
            key: "getCustomTags",
            value: function getCustomTags() {
              var tags = ['span'];
              this.config.customClasses.forEach(function (x) {
                if (x.tag !== undefined) {
                  if (!tags.includes(x.tag)) {
                    tags.push(x.tag);
                  }
                }
              });
              return tags.join(',');
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.blurInstance) {
                this.blurInstance();
              }

              if (this.focusInstance) {
                this.focusInstance();
              }
            }
          }, {
            key: "filterStyles",
            value: function filterStyles(html) {
              html = html.replace('position: fixed;', '');
              return html;
            }
          }]);

          return AngularEditorComponent;
        }();

        AngularEditorComponent.ɵfac = function AngularEditorComponent_Factory(t) {
          return new (t || AngularEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_editor_service__WEBPACK_IMPORTED_MODULE_3__["AngularEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'));
        };

        AngularEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AngularEditorComponent,
          selectors: [["angular-editor"]],
          viewQuery: function AngularEditorComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorWrapper = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorToolbar = _t.first);
            }
          },
          hostVars: 1,
          hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AngularEditorComponent_focus_HostBindingHandler() {
                return ctx.onFocus();
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabindex);
            }
          },
          inputs: {
            id: "id",
            config: "config",
            placeholder: "placeholder",
            tabIndex: "tabIndex"
          },
          outputs: {
            html: "html",
            viewMode: "viewMode",
            blurEvent: "blur",
            focusEvent: "focus"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return AngularEditorComponent;
            }),
            multi: true
          }, _angular_editor_service__WEBPACK_IMPORTED_MODULE_3__["AngularEditorService"]])],
          decls: 10,
          vars: 19,
          consts: [[1, "angular-editor"], ["angularEditor", ""], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], ["editorWrapper", ""], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], ["editor", ""], [1, "angular-editor-placeholder"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute"], ["editorToolbar", ""]],
          template: function AngularEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularEditorComponent_angular_editor_toolbar_2_Template, 2, 9, "angular-editor-toolbar", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AngularEditorComponent_Template_div_input_5_listener($event) {
                return ctx.onContentChange($event.target);
              })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) {
                return ctx.onTextAreaFocus($event);
              })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) {
                return ctx.onTextAreaBlur($event);
              })("click", function AngularEditorComponent_Template_div_click_5_listener() {
                return ctx.exec();
              })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() {
                return ctx.exec();
              })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) {
                return ctx.onTextAreaMouseOut($event);
              })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) {
                return ctx.onPaste($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.config.width)("min-width", ctx.config.minWidth);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "top");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : undefined);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder || ctx.config["placeholder"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "bottom");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["AngularEditorToolbarComponent"]],
          styles: ["@charset \"UTF-8\";\n\n\n@font-face {\n  font-family: \"FontAwesome\";\n  src: url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0\");\n  src: url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"), url(\"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fa-lg[_ngcontent-%COMP%] {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-3x[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.fa-4x[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n.fa-5x[_ngcontent-%COMP%] {\n  font-size: 5em;\n}\n.fa-fw[_ngcontent-%COMP%] {\n  width: 1.2857142857em;\n  text-align: center;\n}\n.fa-ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 2.1428571429em;\n  list-style-type: none;\n}\n.fa-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fa-li[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2.1428571429em;\n  width: 2.1428571429em;\n  top: 0.1428571429em;\n  text-align: center;\n}\n.fa-li.fa-lg[_ngcontent-%COMP%] {\n  left: -1.8571428571em;\n}\n.fa-border[_ngcontent-%COMP%] {\n  padding: 0.2em 0.25em 0.15em;\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n}\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.fa.fa-pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa.pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n.fa-spin[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%] {\n  filter: none;\n}\n.fa-stack[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n.fa-stack-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-inverse[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fa-glass[_ngcontent-%COMP%]:before {\n  content: \"\uF000\";\n}\n.fa-music[_ngcontent-%COMP%]:before {\n  content: \"\uF001\";\n}\n.fa-search[_ngcontent-%COMP%]:before {\n  content: \"\uF002\";\n}\n.fa-envelope-o[_ngcontent-%COMP%]:before {\n  content: \"\uF003\";\n}\n.fa-heart[_ngcontent-%COMP%]:before {\n  content: \"\uF004\";\n}\n.fa-star[_ngcontent-%COMP%]:before {\n  content: \"\uF005\";\n}\n.fa-star-o[_ngcontent-%COMP%]:before {\n  content: \"\uF006\";\n}\n.fa-user[_ngcontent-%COMP%]:before {\n  content: \"\uF007\";\n}\n.fa-film[_ngcontent-%COMP%]:before {\n  content: \"\uF008\";\n}\n.fa-th-large[_ngcontent-%COMP%]:before {\n  content: \"\uF009\";\n}\n.fa-th[_ngcontent-%COMP%]:before {\n  content: \"\uF00A\";\n}\n.fa-th-list[_ngcontent-%COMP%]:before {\n  content: \"\uF00B\";\n}\n.fa-check[_ngcontent-%COMP%]:before {\n  content: \"\uF00C\";\n}\n.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before {\n  content: \"\uF00D\";\n}\n.fa-search-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF00E\";\n}\n.fa-search-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF010\";\n}\n.fa-power-off[_ngcontent-%COMP%]:before {\n  content: \"\uF011\";\n}\n.fa-signal[_ngcontent-%COMP%]:before {\n  content: \"\uF012\";\n}\n.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before {\n  content: \"\uF013\";\n}\n.fa-trash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF014\";\n}\n.fa-home[_ngcontent-%COMP%]:before {\n  content: \"\uF015\";\n}\n.fa-file-o[_ngcontent-%COMP%]:before {\n  content: \"\uF016\";\n}\n.fa-clock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF017\";\n}\n.fa-road[_ngcontent-%COMP%]:before {\n  content: \"\uF018\";\n}\n.fa-download[_ngcontent-%COMP%]:before {\n  content: \"\uF019\";\n}\n.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF01A\";\n}\n.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF01B\";\n}\n.fa-inbox[_ngcontent-%COMP%]:before {\n  content: \"\uF01C\";\n}\n.fa-play-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF01D\";\n}\n.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before {\n  content: \"\uF01E\";\n}\n.fa-refresh[_ngcontent-%COMP%]:before {\n  content: \"\uF021\";\n}\n.fa-list-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF022\";\n}\n.fa-lock[_ngcontent-%COMP%]:before {\n  content: \"\uF023\";\n}\n.fa-flag[_ngcontent-%COMP%]:before {\n  content: \"\uF024\";\n}\n.fa-headphones[_ngcontent-%COMP%]:before {\n  content: \"\uF025\";\n}\n.fa-volume-off[_ngcontent-%COMP%]:before {\n  content: \"\uF026\";\n}\n.fa-volume-down[_ngcontent-%COMP%]:before {\n  content: \"\uF027\";\n}\n.fa-volume-up[_ngcontent-%COMP%]:before {\n  content: \"\uF028\";\n}\n.fa-qrcode[_ngcontent-%COMP%]:before {\n  content: \"\uF029\";\n}\n.fa-barcode[_ngcontent-%COMP%]:before {\n  content: \"\uF02A\";\n}\n.fa-tag[_ngcontent-%COMP%]:before {\n  content: \"\uF02B\";\n}\n.fa-tags[_ngcontent-%COMP%]:before {\n  content: \"\uF02C\";\n}\n.fa-book[_ngcontent-%COMP%]:before {\n  content: \"\uF02D\";\n}\n.fa-bookmark[_ngcontent-%COMP%]:before {\n  content: \"\uF02E\";\n}\n.fa-print[_ngcontent-%COMP%]:before {\n  content: \"\uF02F\";\n}\n.fa-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF030\";\n}\n.fa-font[_ngcontent-%COMP%]:before {\n  content: \"\uF031\";\n}\n.fa-bold[_ngcontent-%COMP%]:before {\n  content: \"\uF032\";\n}\n.fa-italic[_ngcontent-%COMP%]:before {\n  content: \"\uF033\";\n}\n.fa-text-height[_ngcontent-%COMP%]:before {\n  content: \"\uF034\";\n}\n.fa-text-width[_ngcontent-%COMP%]:before {\n  content: \"\uF035\";\n}\n.fa-align-left[_ngcontent-%COMP%]:before {\n  content: \"\uF036\";\n}\n.fa-align-center[_ngcontent-%COMP%]:before {\n  content: \"\uF037\";\n}\n.fa-align-right[_ngcontent-%COMP%]:before {\n  content: \"\uF038\";\n}\n.fa-align-justify[_ngcontent-%COMP%]:before {\n  content: \"\uF039\";\n}\n.fa-list[_ngcontent-%COMP%]:before {\n  content: \"\uF03A\";\n}\n.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before {\n  content: \"\uF03B\";\n}\n.fa-indent[_ngcontent-%COMP%]:before {\n  content: \"\uF03C\";\n}\n.fa-video-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF03D\";\n}\n.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before {\n  content: \"\uF03E\";\n}\n.fa-pencil[_ngcontent-%COMP%]:before {\n  content: \"\uF040\";\n}\n.fa-map-marker[_ngcontent-%COMP%]:before {\n  content: \"\uF041\";\n}\n.fa-adjust[_ngcontent-%COMP%]:before {\n  content: \"\uF042\";\n}\n.fa-tint[_ngcontent-%COMP%]:before {\n  content: \"\uF043\";\n}\n.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF044\";\n}\n.fa-share-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF045\";\n}\n.fa-check-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF046\";\n}\n.fa-arrows[_ngcontent-%COMP%]:before {\n  content: \"\uF047\";\n}\n.fa-step-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF048\";\n}\n.fa-fast-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF049\";\n}\n.fa-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF04A\";\n}\n.fa-play[_ngcontent-%COMP%]:before {\n  content: \"\uF04B\";\n}\n.fa-pause[_ngcontent-%COMP%]:before {\n  content: \"\uF04C\";\n}\n.fa-stop[_ngcontent-%COMP%]:before {\n  content: \"\uF04D\";\n}\n.fa-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF04E\";\n}\n.fa-fast-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF050\";\n}\n.fa-step-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF051\";\n}\n.fa-eject[_ngcontent-%COMP%]:before {\n  content: \"\uF052\";\n}\n.fa-chevron-left[_ngcontent-%COMP%]:before {\n  content: \"\uF053\";\n}\n.fa-chevron-right[_ngcontent-%COMP%]:before {\n  content: \"\uF054\";\n}\n.fa-plus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF055\";\n}\n.fa-minus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF056\";\n}\n.fa-times-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF057\";\n}\n.fa-check-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF058\";\n}\n.fa-question-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF059\";\n}\n.fa-info-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF05A\";\n}\n.fa-crosshairs[_ngcontent-%COMP%]:before {\n  content: \"\uF05B\";\n}\n.fa-times-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05C\";\n}\n.fa-check-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05D\";\n}\n.fa-ban[_ngcontent-%COMP%]:before {\n  content: \"\uF05E\";\n}\n.fa-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF060\";\n}\n.fa-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF061\";\n}\n.fa-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF062\";\n}\n.fa-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF063\";\n}\n.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before {\n  content: \"\uF064\";\n}\n.fa-expand[_ngcontent-%COMP%]:before {\n  content: \"\uF065\";\n}\n.fa-compress[_ngcontent-%COMP%]:before {\n  content: \"\uF066\";\n}\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF067\";\n}\n.fa-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF068\";\n}\n.fa-asterisk[_ngcontent-%COMP%]:before {\n  content: \"\uF069\";\n}\n.fa-exclamation-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF06A\";\n}\n.fa-gift[_ngcontent-%COMP%]:before {\n  content: \"\uF06B\";\n}\n.fa-leaf[_ngcontent-%COMP%]:before {\n  content: \"\uF06C\";\n}\n.fa-fire[_ngcontent-%COMP%]:before {\n  content: \"\uF06D\";\n}\n.fa-eye[_ngcontent-%COMP%]:before {\n  content: \"\uF06E\";\n}\n.fa-eye-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF070\";\n}\n.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before {\n  content: \"\uF071\";\n}\n.fa-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF072\";\n}\n.fa-calendar[_ngcontent-%COMP%]:before {\n  content: \"\uF073\";\n}\n.fa-random[_ngcontent-%COMP%]:before {\n  content: \"\uF074\";\n}\n.fa-comment[_ngcontent-%COMP%]:before {\n  content: \"\uF075\";\n}\n.fa-magnet[_ngcontent-%COMP%]:before {\n  content: \"\uF076\";\n}\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  content: \"\uF077\";\n}\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\uF078\";\n}\n.fa-retweet[_ngcontent-%COMP%]:before {\n  content: \"\uF079\";\n}\n.fa-shopping-cart[_ngcontent-%COMP%]:before {\n  content: \"\uF07A\";\n}\n.fa-folder[_ngcontent-%COMP%]:before {\n  content: \"\uF07B\";\n}\n.fa-folder-open[_ngcontent-%COMP%]:before {\n  content: \"\uF07C\";\n}\n.fa-arrows-v[_ngcontent-%COMP%]:before {\n  content: \"\uF07D\";\n}\n.fa-arrows-h[_ngcontent-%COMP%]:before {\n  content: \"\uF07E\";\n}\n.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF080\";\n}\n.fa-twitter-square[_ngcontent-%COMP%]:before {\n  content: \"\uF081\";\n}\n.fa-facebook-square[_ngcontent-%COMP%]:before {\n  content: \"\uF082\";\n}\n.fa-camera-retro[_ngcontent-%COMP%]:before {\n  content: \"\uF083\";\n}\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\uF084\";\n}\n.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before {\n  content: \"\uF085\";\n}\n.fa-comments[_ngcontent-%COMP%]:before {\n  content: \"\uF086\";\n}\n.fa-thumbs-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF087\";\n}\n.fa-thumbs-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF088\";\n}\n.fa-star-half[_ngcontent-%COMP%]:before {\n  content: \"\uF089\";\n}\n.fa-heart-o[_ngcontent-%COMP%]:before {\n  content: \"\uF08A\";\n}\n.fa-sign-out[_ngcontent-%COMP%]:before {\n  content: \"\uF08B\";\n}\n.fa-linkedin-square[_ngcontent-%COMP%]:before {\n  content: \"\uF08C\";\n}\n.fa-thumb-tack[_ngcontent-%COMP%]:before {\n  content: \"\uF08D\";\n}\n.fa-external-link[_ngcontent-%COMP%]:before {\n  content: \"\uF08E\";\n}\n.fa-sign-in[_ngcontent-%COMP%]:before {\n  content: \"\uF090\";\n}\n.fa-trophy[_ngcontent-%COMP%]:before {\n  content: \"\uF091\";\n}\n.fa-github-square[_ngcontent-%COMP%]:before {\n  content: \"\uF092\";\n}\n.fa-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF093\";\n}\n.fa-lemon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF094\";\n}\n.fa-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF095\";\n}\n.fa-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF096\";\n}\n.fa-bookmark-o[_ngcontent-%COMP%]:before {\n  content: \"\uF097\";\n}\n.fa-phone-square[_ngcontent-%COMP%]:before {\n  content: \"\uF098\";\n}\n.fa-twitter[_ngcontent-%COMP%]:before {\n  content: \"\uF099\";\n}\n.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before {\n  content: \"\uF09A\";\n}\n.fa-github[_ngcontent-%COMP%]:before {\n  content: \"\uF09B\";\n}\n.fa-unlock[_ngcontent-%COMP%]:before {\n  content: \"\uF09C\";\n}\n.fa-credit-card[_ngcontent-%COMP%]:before {\n  content: \"\uF09D\";\n}\n.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before {\n  content: \"\uF09E\";\n}\n.fa-hdd-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A0\";\n}\n.fa-bullhorn[_ngcontent-%COMP%]:before {\n  content: \"\uF0A1\";\n}\n.fa-bell[_ngcontent-%COMP%]:before {\n  content: \"\uF0F3\";\n}\n.fa-certificate[_ngcontent-%COMP%]:before {\n  content: \"\uF0A3\";\n}\n.fa-hand-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A4\";\n}\n.fa-hand-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A5\";\n}\n.fa-hand-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0A6\";\n}\n.fa-hand-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0A7\";\n}\n.fa-arrow-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A8\";\n}\n.fa-arrow-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A9\";\n}\n.fa-arrow-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0AA\";\n}\n.fa-arrow-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0AB\";\n}\n.fa-globe[_ngcontent-%COMP%]:before {\n  content: \"\uF0AC\";\n}\n.fa-wrench[_ngcontent-%COMP%]:before {\n  content: \"\uF0AD\";\n}\n.fa-tasks[_ngcontent-%COMP%]:before {\n  content: \"\uF0AE\";\n}\n.fa-filter[_ngcontent-%COMP%]:before {\n  content: \"\uF0B0\";\n}\n.fa-briefcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0B1\";\n}\n.fa-arrows-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF0B2\";\n}\n.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before {\n  content: \"\uF0C0\";\n}\n.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before {\n  content: \"\uF0C1\";\n}\n.fa-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uF0C2\";\n}\n.fa-flask[_ngcontent-%COMP%]:before {\n  content: \"\uF0C3\";\n}\n.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before {\n  content: \"\uF0C4\";\n}\n.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C5\";\n}\n.fa-paperclip[_ngcontent-%COMP%]:before {\n  content: \"\uF0C6\";\n}\n.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C7\";\n}\n.fa-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0C8\";\n}\n.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before {\n  content: \"\uF0C9\";\n}\n.fa-list-ul[_ngcontent-%COMP%]:before {\n  content: \"\uF0CA\";\n}\n.fa-list-ol[_ngcontent-%COMP%]:before {\n  content: \"\uF0CB\";\n}\n.fa-strikethrough[_ngcontent-%COMP%]:before {\n  content: \"\uF0CC\";\n}\n.fa-underline[_ngcontent-%COMP%]:before {\n  content: \"\uF0CD\";\n}\n.fa-table[_ngcontent-%COMP%]:before {\n  content: \"\uF0CE\";\n}\n.fa-magic[_ngcontent-%COMP%]:before {\n  content: \"\uF0D0\";\n}\n.fa-truck[_ngcontent-%COMP%]:before {\n  content: \"\uF0D1\";\n}\n.fa-pinterest[_ngcontent-%COMP%]:before {\n  content: \"\uF0D2\";\n}\n.fa-pinterest-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D3\";\n}\n.fa-google-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D4\";\n}\n.fa-google-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF0D5\";\n}\n.fa-money[_ngcontent-%COMP%]:before {\n  content: \"\uF0D6\";\n}\n.fa-caret-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0D7\";\n}\n.fa-caret-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0D8\";\n}\n.fa-caret-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0D9\";\n}\n.fa-caret-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0DA\";\n}\n.fa-columns[_ngcontent-%COMP%]:before {\n  content: \"\uF0DB\";\n}\n.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before {\n  content: \"\uF0DC\";\n}\n.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DD\";\n}\n.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DE\";\n}\n.fa-envelope[_ngcontent-%COMP%]:before {\n  content: \"\uF0E0\";\n}\n.fa-linkedin[_ngcontent-%COMP%]:before {\n  content: \"\uF0E1\";\n}\n.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before {\n  content: \"\uF0E2\";\n}\n.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before {\n  content: \"\uF0E3\";\n}\n.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before {\n  content: \"\uF0E4\";\n}\n.fa-comment-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E5\";\n}\n.fa-comments-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E6\";\n}\n.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before {\n  content: \"\uF0E7\";\n}\n.fa-sitemap[_ngcontent-%COMP%]:before {\n  content: \"\uF0E8\";\n}\n.fa-umbrella[_ngcontent-%COMP%]:before {\n  content: \"\uF0E9\";\n}\n.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before {\n  content: \"\uF0EA\";\n}\n.fa-lightbulb-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0EB\";\n}\n.fa-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF0EC\";\n}\n.fa-cloud-download[_ngcontent-%COMP%]:before {\n  content: \"\uF0ED\";\n}\n.fa-cloud-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF0EE\";\n}\n.fa-user-md[_ngcontent-%COMP%]:before {\n  content: \"\uF0F0\";\n}\n.fa-stethoscope[_ngcontent-%COMP%]:before {\n  content: \"\uF0F1\";\n}\n.fa-suitcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0F2\";\n}\n.fa-bell-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A2\";\n}\n.fa-coffee[_ngcontent-%COMP%]:before {\n  content: \"\uF0F4\";\n}\n.fa-cutlery[_ngcontent-%COMP%]:before {\n  content: \"\uF0F5\";\n}\n.fa-file-text-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F6\";\n}\n.fa-building-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F7\";\n}\n.fa-hospital-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F8\";\n}\n.fa-ambulance[_ngcontent-%COMP%]:before {\n  content: \"\uF0F9\";\n}\n.fa-medkit[_ngcontent-%COMP%]:before {\n  content: \"\uF0FA\";\n}\n.fa-fighter-jet[_ngcontent-%COMP%]:before {\n  content: \"\uF0FB\";\n}\n.fa-beer[_ngcontent-%COMP%]:before {\n  content: \"\uF0FC\";\n}\n.fa-h-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FD\";\n}\n.fa-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FE\";\n}\n.fa-angle-double-left[_ngcontent-%COMP%]:before {\n  content: \"\uF100\";\n}\n.fa-angle-double-right[_ngcontent-%COMP%]:before {\n  content: \"\uF101\";\n}\n.fa-angle-double-up[_ngcontent-%COMP%]:before {\n  content: \"\uF102\";\n}\n.fa-angle-double-down[_ngcontent-%COMP%]:before {\n  content: \"\uF103\";\n}\n.fa-angle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF104\";\n}\n.fa-angle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF105\";\n}\n.fa-angle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF106\";\n}\n.fa-angle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF107\";\n}\n.fa-desktop[_ngcontent-%COMP%]:before {\n  content: \"\uF108\";\n}\n.fa-laptop[_ngcontent-%COMP%]:before {\n  content: \"\uF109\";\n}\n.fa-tablet[_ngcontent-%COMP%]:before {\n  content: \"\uF10A\";\n}\n.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before {\n  content: \"\uF10B\";\n}\n.fa-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF10C\";\n}\n.fa-quote-left[_ngcontent-%COMP%]:before {\n  content: \"\uF10D\";\n}\n.fa-quote-right[_ngcontent-%COMP%]:before {\n  content: \"\uF10E\";\n}\n.fa-spinner[_ngcontent-%COMP%]:before {\n  content: \"\uF110\";\n}\n.fa-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF111\";\n}\n.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before {\n  content: \"\uF112\";\n}\n.fa-github-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF113\";\n}\n.fa-folder-o[_ngcontent-%COMP%]:before {\n  content: \"\uF114\";\n}\n.fa-folder-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF115\";\n}\n.fa-smile-o[_ngcontent-%COMP%]:before {\n  content: \"\uF118\";\n}\n.fa-frown-o[_ngcontent-%COMP%]:before {\n  content: \"\uF119\";\n}\n.fa-meh-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11A\";\n}\n.fa-gamepad[_ngcontent-%COMP%]:before {\n  content: \"\uF11B\";\n}\n.fa-keyboard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11C\";\n}\n.fa-flag-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11D\";\n}\n.fa-flag-checkered[_ngcontent-%COMP%]:before {\n  content: \"\uF11E\";\n}\n.fa-terminal[_ngcontent-%COMP%]:before {\n  content: \"\uF120\";\n}\n.fa-code[_ngcontent-%COMP%]:before {\n  content: \"\uF121\";\n}\n.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before {\n  content: \"\uF122\";\n}\n.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before {\n  content: \"\uF123\";\n}\n.fa-location-arrow[_ngcontent-%COMP%]:before {\n  content: \"\uF124\";\n}\n.fa-crop[_ngcontent-%COMP%]:before {\n  content: \"\uF125\";\n}\n.fa-code-fork[_ngcontent-%COMP%]:before {\n  content: \"\uF126\";\n}\n.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before {\n  content: \"\uF127\";\n}\n.fa-question[_ngcontent-%COMP%]:before {\n  content: \"\uF128\";\n}\n.fa-info[_ngcontent-%COMP%]:before {\n  content: \"\uF129\";\n}\n.fa-exclamation[_ngcontent-%COMP%]:before {\n  content: \"\uF12A\";\n}\n.fa-superscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12B\";\n}\n.fa-subscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12C\";\n}\n.fa-eraser[_ngcontent-%COMP%]:before {\n  content: \"\uF12D\";\n}\n.fa-puzzle-piece[_ngcontent-%COMP%]:before {\n  content: \"\uF12E\";\n}\n.fa-microphone[_ngcontent-%COMP%]:before {\n  content: \"\uF130\";\n}\n.fa-microphone-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF131\";\n}\n.fa-shield[_ngcontent-%COMP%]:before {\n  content: \"\uF132\";\n}\n.fa-calendar-o[_ngcontent-%COMP%]:before {\n  content: \"\uF133\";\n}\n.fa-fire-extinguisher[_ngcontent-%COMP%]:before {\n  content: \"\uF134\";\n}\n.fa-rocket[_ngcontent-%COMP%]:before {\n  content: \"\uF135\";\n}\n.fa-maxcdn[_ngcontent-%COMP%]:before {\n  content: \"\uF136\";\n}\n.fa-chevron-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF137\";\n}\n.fa-chevron-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF138\";\n}\n.fa-chevron-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF139\";\n}\n.fa-chevron-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF13A\";\n}\n.fa-html5[_ngcontent-%COMP%]:before {\n  content: \"\uF13B\";\n}\n.fa-css3[_ngcontent-%COMP%]:before {\n  content: \"\uF13C\";\n}\n.fa-anchor[_ngcontent-%COMP%]:before {\n  content: \"\uF13D\";\n}\n.fa-unlock-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF13E\";\n}\n.fa-bullseye[_ngcontent-%COMP%]:before {\n  content: \"\uF140\";\n}\n.fa-ellipsis-h[_ngcontent-%COMP%]:before {\n  content: \"\uF141\";\n}\n.fa-ellipsis-v[_ngcontent-%COMP%]:before {\n  content: \"\uF142\";\n}\n.fa-rss-square[_ngcontent-%COMP%]:before {\n  content: \"\uF143\";\n}\n.fa-play-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF144\";\n}\n.fa-ticket[_ngcontent-%COMP%]:before {\n  content: \"\uF145\";\n}\n.fa-minus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF146\";\n}\n.fa-minus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF147\";\n}\n.fa-level-up[_ngcontent-%COMP%]:before {\n  content: \"\uF148\";\n}\n.fa-level-down[_ngcontent-%COMP%]:before {\n  content: \"\uF149\";\n}\n.fa-check-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14A\";\n}\n.fa-pencil-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14B\";\n}\n.fa-external-link-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14C\";\n}\n.fa-share-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14D\";\n}\n.fa-compass[_ngcontent-%COMP%]:before {\n  content: \"\uF14E\";\n}\n.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF150\";\n}\n.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF151\";\n}\n.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF152\";\n}\n.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before {\n  content: \"\uF153\";\n}\n.fa-gbp[_ngcontent-%COMP%]:before {\n  content: \"\uF154\";\n}\n.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before {\n  content: \"\uF155\";\n}\n.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before {\n  content: \"\uF156\";\n}\n.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before {\n  content: \"\uF157\";\n}\n.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before {\n  content: \"\uF158\";\n}\n.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before {\n  content: \"\uF159\";\n}\n.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before {\n  content: \"\uF15A\";\n}\n.fa-file[_ngcontent-%COMP%]:before {\n  content: \"\uF15B\";\n}\n.fa-file-text[_ngcontent-%COMP%]:before {\n  content: \"\uF15C\";\n}\n.fa-sort-alpha-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF15D\";\n}\n.fa-sort-alpha-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF15E\";\n}\n.fa-sort-amount-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF160\";\n}\n.fa-sort-amount-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF161\";\n}\n.fa-sort-numeric-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF162\";\n}\n.fa-sort-numeric-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF163\";\n}\n.fa-thumbs-up[_ngcontent-%COMP%]:before {\n  content: \"\uF164\";\n}\n.fa-thumbs-down[_ngcontent-%COMP%]:before {\n  content: \"\uF165\";\n}\n.fa-youtube-square[_ngcontent-%COMP%]:before {\n  content: \"\uF166\";\n}\n.fa-youtube[_ngcontent-%COMP%]:before {\n  content: \"\uF167\";\n}\n.fa-xing[_ngcontent-%COMP%]:before {\n  content: \"\uF168\";\n}\n.fa-xing-square[_ngcontent-%COMP%]:before {\n  content: \"\uF169\";\n}\n.fa-youtube-play[_ngcontent-%COMP%]:before {\n  content: \"\uF16A\";\n}\n.fa-dropbox[_ngcontent-%COMP%]:before {\n  content: \"\uF16B\";\n}\n.fa-stack-overflow[_ngcontent-%COMP%]:before {\n  content: \"\uF16C\";\n}\n.fa-instagram[_ngcontent-%COMP%]:before {\n  content: \"\uF16D\";\n}\n.fa-flickr[_ngcontent-%COMP%]:before {\n  content: \"\uF16E\";\n}\n.fa-adn[_ngcontent-%COMP%]:before {\n  content: \"\uF170\";\n}\n.fa-bitbucket[_ngcontent-%COMP%]:before {\n  content: \"\uF171\";\n}\n.fa-bitbucket-square[_ngcontent-%COMP%]:before {\n  content: \"\uF172\";\n}\n.fa-tumblr[_ngcontent-%COMP%]:before {\n  content: \"\uF173\";\n}\n.fa-tumblr-square[_ngcontent-%COMP%]:before {\n  content: \"\uF174\";\n}\n.fa-long-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF175\";\n}\n.fa-long-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF176\";\n}\n.fa-long-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF177\";\n}\n.fa-long-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF178\";\n}\n.fa-apple[_ngcontent-%COMP%]:before {\n  content: \"\uF179\";\n}\n.fa-windows[_ngcontent-%COMP%]:before {\n  content: \"\uF17A\";\n}\n.fa-android[_ngcontent-%COMP%]:before {\n  content: \"\uF17B\";\n}\n.fa-linux[_ngcontent-%COMP%]:before {\n  content: \"\uF17C\";\n}\n.fa-dribbble[_ngcontent-%COMP%]:before {\n  content: \"\uF17D\";\n}\n.fa-skype[_ngcontent-%COMP%]:before {\n  content: \"\uF17E\";\n}\n.fa-foursquare[_ngcontent-%COMP%]:before {\n  content: \"\uF180\";\n}\n.fa-trello[_ngcontent-%COMP%]:before {\n  content: \"\uF181\";\n}\n.fa-female[_ngcontent-%COMP%]:before {\n  content: \"\uF182\";\n}\n.fa-male[_ngcontent-%COMP%]:before {\n  content: \"\uF183\";\n}\n.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before {\n  content: \"\uF184\";\n}\n.fa-sun-o[_ngcontent-%COMP%]:before {\n  content: \"\uF185\";\n}\n.fa-moon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF186\";\n}\n.fa-archive[_ngcontent-%COMP%]:before {\n  content: \"\uF187\";\n}\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\uF188\";\n}\n.fa-vk[_ngcontent-%COMP%]:before {\n  content: \"\uF189\";\n}\n.fa-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF18A\";\n}\n.fa-renren[_ngcontent-%COMP%]:before {\n  content: \"\uF18B\";\n}\n.fa-pagelines[_ngcontent-%COMP%]:before {\n  content: \"\uF18C\";\n}\n.fa-stack-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF18D\";\n}\n.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF18E\";\n}\n.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF190\";\n}\n.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF191\";\n}\n.fa-dot-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF192\";\n}\n.fa-wheelchair[_ngcontent-%COMP%]:before {\n  content: \"\uF193\";\n}\n.fa-vimeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF194\";\n}\n.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before {\n  content: \"\uF195\";\n}\n.fa-plus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF196\";\n}\n.fa-space-shuttle[_ngcontent-%COMP%]:before {\n  content: \"\uF197\";\n}\n.fa-slack[_ngcontent-%COMP%]:before {\n  content: \"\uF198\";\n}\n.fa-envelope-square[_ngcontent-%COMP%]:before {\n  content: \"\uF199\";\n}\n.fa-wordpress[_ngcontent-%COMP%]:before {\n  content: \"\uF19A\";\n}\n.fa-openid[_ngcontent-%COMP%]:before {\n  content: \"\uF19B\";\n}\n.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before {\n  content: \"\uF19C\";\n}\n.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before {\n  content: \"\uF19D\";\n}\n.fa-yahoo[_ngcontent-%COMP%]:before {\n  content: \"\uF19E\";\n}\n.fa-google[_ngcontent-%COMP%]:before {\n  content: \"\uF1A0\";\n}\n.fa-reddit[_ngcontent-%COMP%]:before {\n  content: \"\uF1A1\";\n}\n.fa-reddit-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1A2\";\n}\n.fa-stumbleupon-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF1A3\";\n}\n.fa-stumbleupon[_ngcontent-%COMP%]:before {\n  content: \"\uF1A4\";\n}\n.fa-delicious[_ngcontent-%COMP%]:before {\n  content: \"\uF1A5\";\n}\n.fa-digg[_ngcontent-%COMP%]:before {\n  content: \"\uF1A6\";\n}\n.fa-pied-piper-pp[_ngcontent-%COMP%]:before {\n  content: \"\uF1A7\";\n}\n.fa-pied-piper-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1A8\";\n}\n.fa-drupal[_ngcontent-%COMP%]:before {\n  content: \"\uF1A9\";\n}\n.fa-joomla[_ngcontent-%COMP%]:before {\n  content: \"\uF1AA\";\n}\n.fa-language[_ngcontent-%COMP%]:before {\n  content: \"\uF1AB\";\n}\n.fa-fax[_ngcontent-%COMP%]:before {\n  content: \"\uF1AC\";\n}\n.fa-building[_ngcontent-%COMP%]:before {\n  content: \"\uF1AD\";\n}\n.fa-child[_ngcontent-%COMP%]:before {\n  content: \"\uF1AE\";\n}\n.fa-paw[_ngcontent-%COMP%]:before {\n  content: \"\uF1B0\";\n}\n.fa-spoon[_ngcontent-%COMP%]:before {\n  content: \"\uF1B1\";\n}\n.fa-cube[_ngcontent-%COMP%]:before {\n  content: \"\uF1B2\";\n}\n.fa-cubes[_ngcontent-%COMP%]:before {\n  content: \"\uF1B3\";\n}\n.fa-behance[_ngcontent-%COMP%]:before {\n  content: \"\uF1B4\";\n}\n.fa-behance-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B5\";\n}\n.fa-steam[_ngcontent-%COMP%]:before {\n  content: \"\uF1B6\";\n}\n.fa-steam-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B7\";\n}\n.fa-recycle[_ngcontent-%COMP%]:before {\n  content: \"\uF1B8\";\n}\n.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before {\n  content: \"\uF1B9\";\n}\n.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before {\n  content: \"\uF1BA\";\n}\n.fa-tree[_ngcontent-%COMP%]:before {\n  content: \"\uF1BB\";\n}\n.fa-spotify[_ngcontent-%COMP%]:before {\n  content: \"\uF1BC\";\n}\n.fa-deviantart[_ngcontent-%COMP%]:before {\n  content: \"\uF1BD\";\n}\n.fa-soundcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF1BE\";\n}\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\uF1C0\";\n}\n.fa-file-pdf-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C1\";\n}\n.fa-file-word-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C2\";\n}\n.fa-file-excel-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C3\";\n}\n.fa-file-powerpoint-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C4\";\n}\n.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C5\";\n}\n.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C6\";\n}\n.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C7\";\n}\n.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C8\";\n}\n.fa-file-code-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C9\";\n}\n.fa-vine[_ngcontent-%COMP%]:before {\n  content: \"\uF1CA\";\n}\n.fa-codepen[_ngcontent-%COMP%]:before {\n  content: \"\uF1CB\";\n}\n.fa-jsfiddle[_ngcontent-%COMP%]:before {\n  content: \"\uF1CC\";\n}\n.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before {\n  content: \"\uF1CD\";\n}\n.fa-circle-o-notch[_ngcontent-%COMP%]:before {\n  content: \"\uF1CE\";\n}\n.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before {\n  content: \"\uF1D0\";\n}\n.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before {\n  content: \"\uF1D1\";\n}\n.fa-git-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1D2\";\n}\n.fa-git[_ngcontent-%COMP%]:before {\n  content: \"\uF1D3\";\n}\n.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before {\n  content: \"\uF1D4\";\n}\n.fa-tencent-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF1D5\";\n}\n.fa-qq[_ngcontent-%COMP%]:before {\n  content: \"\uF1D6\";\n}\n.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before {\n  content: \"\uF1D7\";\n}\n.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF1D8\";\n}\n.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1D9\";\n}\n.fa-history[_ngcontent-%COMP%]:before {\n  content: \"\uF1DA\";\n}\n.fa-circle-thin[_ngcontent-%COMP%]:before {\n  content: \"\uF1DB\";\n}\n.fa-header[_ngcontent-%COMP%]:before {\n  content: \"\uF1DC\";\n}\n.fa-paragraph[_ngcontent-%COMP%]:before {\n  content: \"\uF1DD\";\n}\n.fa-sliders[_ngcontent-%COMP%]:before {\n  content: \"\uF1DE\";\n}\n.fa-share-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1E0\";\n}\n.fa-share-alt-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1E1\";\n}\n.fa-bomb[_ngcontent-%COMP%]:before {\n  content: \"\uF1E2\";\n}\n.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1E3\";\n}\n.fa-tty[_ngcontent-%COMP%]:before {\n  content: \"\uF1E4\";\n}\n.fa-binoculars[_ngcontent-%COMP%]:before {\n  content: \"\uF1E5\";\n}\n.fa-plug[_ngcontent-%COMP%]:before {\n  content: \"\uF1E6\";\n}\n.fa-slideshare[_ngcontent-%COMP%]:before {\n  content: \"\uF1E7\";\n}\n.fa-twitch[_ngcontent-%COMP%]:before {\n  content: \"\uF1E8\";\n}\n.fa-yelp[_ngcontent-%COMP%]:before {\n  content: \"\uF1E9\";\n}\n.fa-newspaper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1EA\";\n}\n.fa-wifi[_ngcontent-%COMP%]:before {\n  content: \"\uF1EB\";\n}\n.fa-calculator[_ngcontent-%COMP%]:before {\n  content: \"\uF1EC\";\n}\n.fa-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1ED\";\n}\n.fa-google-wallet[_ngcontent-%COMP%]:before {\n  content: \"\uF1EE\";\n}\n.fa-cc-visa[_ngcontent-%COMP%]:before {\n  content: \"\uF1F0\";\n}\n.fa-cc-mastercard[_ngcontent-%COMP%]:before {\n  content: \"\uF1F1\";\n}\n.fa-cc-discover[_ngcontent-%COMP%]:before {\n  content: \"\uF1F2\";\n}\n.fa-cc-amex[_ngcontent-%COMP%]:before {\n  content: \"\uF1F3\";\n}\n.fa-cc-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1F4\";\n}\n.fa-cc-stripe[_ngcontent-%COMP%]:before {\n  content: \"\uF1F5\";\n}\n.fa-bell-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F6\";\n}\n.fa-bell-slash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1F7\";\n}\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F8\";\n}\n.fa-copyright[_ngcontent-%COMP%]:before {\n  content: \"\uF1F9\";\n}\n.fa-at[_ngcontent-%COMP%]:before {\n  content: \"\uF1FA\";\n}\n.fa-eyedropper[_ngcontent-%COMP%]:before {\n  content: \"\uF1FB\";\n}\n.fa-paint-brush[_ngcontent-%COMP%]:before {\n  content: \"\uF1FC\";\n}\n.fa-birthday-cake[_ngcontent-%COMP%]:before {\n  content: \"\uF1FD\";\n}\n.fa-area-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF1FE\";\n}\n.fa-pie-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF200\";\n}\n.fa-line-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF201\";\n}\n.fa-lastfm[_ngcontent-%COMP%]:before {\n  content: \"\uF202\";\n}\n.fa-lastfm-square[_ngcontent-%COMP%]:before {\n  content: \"\uF203\";\n}\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\uF204\";\n}\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\uF205\";\n}\n.fa-bicycle[_ngcontent-%COMP%]:before {\n  content: \"\uF206\";\n}\n.fa-bus[_ngcontent-%COMP%]:before {\n  content: \"\uF207\";\n}\n.fa-ioxhost[_ngcontent-%COMP%]:before {\n  content: \"\uF208\";\n}\n.fa-angellist[_ngcontent-%COMP%]:before {\n  content: \"\uF209\";\n}\n.fa-cc[_ngcontent-%COMP%]:before {\n  content: \"\uF20A\";\n}\n.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before {\n  content: \"\uF20B\";\n}\n.fa-meanpath[_ngcontent-%COMP%]:before {\n  content: \"\uF20C\";\n}\n.fa-buysellads[_ngcontent-%COMP%]:before {\n  content: \"\uF20D\";\n}\n.fa-connectdevelop[_ngcontent-%COMP%]:before {\n  content: \"\uF20E\";\n}\n.fa-dashcube[_ngcontent-%COMP%]:before {\n  content: \"\uF210\";\n}\n.fa-forumbee[_ngcontent-%COMP%]:before {\n  content: \"\uF211\";\n}\n.fa-leanpub[_ngcontent-%COMP%]:before {\n  content: \"\uF212\";\n}\n.fa-sellsy[_ngcontent-%COMP%]:before {\n  content: \"\uF213\";\n}\n.fa-shirtsinbulk[_ngcontent-%COMP%]:before {\n  content: \"\uF214\";\n}\n.fa-simplybuilt[_ngcontent-%COMP%]:before {\n  content: \"\uF215\";\n}\n.fa-skyatlas[_ngcontent-%COMP%]:before {\n  content: \"\uF216\";\n}\n.fa-cart-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF217\";\n}\n.fa-cart-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF218\";\n}\n.fa-diamond[_ngcontent-%COMP%]:before {\n  content: \"\uF219\";\n}\n.fa-ship[_ngcontent-%COMP%]:before {\n  content: \"\uF21A\";\n}\n.fa-user-secret[_ngcontent-%COMP%]:before {\n  content: \"\uF21B\";\n}\n.fa-motorcycle[_ngcontent-%COMP%]:before {\n  content: \"\uF21C\";\n}\n.fa-street-view[_ngcontent-%COMP%]:before {\n  content: \"\uF21D\";\n}\n.fa-heartbeat[_ngcontent-%COMP%]:before {\n  content: \"\uF21E\";\n}\n.fa-venus[_ngcontent-%COMP%]:before {\n  content: \"\uF221\";\n}\n.fa-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF222\";\n}\n.fa-mercury[_ngcontent-%COMP%]:before {\n  content: \"\uF223\";\n}\n.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before {\n  content: \"\uF224\";\n}\n.fa-transgender-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF225\";\n}\n.fa-venus-double[_ngcontent-%COMP%]:before {\n  content: \"\uF226\";\n}\n.fa-mars-double[_ngcontent-%COMP%]:before {\n  content: \"\uF227\";\n}\n.fa-venus-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF228\";\n}\n.fa-mars-stroke[_ngcontent-%COMP%]:before {\n  content: \"\uF229\";\n}\n.fa-mars-stroke-v[_ngcontent-%COMP%]:before {\n  content: \"\uF22A\";\n}\n.fa-mars-stroke-h[_ngcontent-%COMP%]:before {\n  content: \"\uF22B\";\n}\n.fa-neuter[_ngcontent-%COMP%]:before {\n  content: \"\uF22C\";\n}\n.fa-genderless[_ngcontent-%COMP%]:before {\n  content: \"\uF22D\";\n}\n.fa-facebook-official[_ngcontent-%COMP%]:before {\n  content: \"\uF230\";\n}\n.fa-pinterest-p[_ngcontent-%COMP%]:before {\n  content: \"\uF231\";\n}\n.fa-whatsapp[_ngcontent-%COMP%]:before {\n  content: \"\uF232\";\n}\n.fa-server[_ngcontent-%COMP%]:before {\n  content: \"\uF233\";\n}\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF234\";\n}\n.fa-user-times[_ngcontent-%COMP%]:before {\n  content: \"\uF235\";\n}\n.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before {\n  content: \"\uF236\";\n}\n.fa-viacoin[_ngcontent-%COMP%]:before {\n  content: \"\uF237\";\n}\n.fa-train[_ngcontent-%COMP%]:before {\n  content: \"\uF238\";\n}\n.fa-subway[_ngcontent-%COMP%]:before {\n  content: \"\uF239\";\n}\n.fa-medium[_ngcontent-%COMP%]:before {\n  content: \"\uF23A\";\n}\n.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before {\n  content: \"\uF23B\";\n}\n.fa-optin-monster[_ngcontent-%COMP%]:before {\n  content: \"\uF23C\";\n}\n.fa-opencart[_ngcontent-%COMP%]:before {\n  content: \"\uF23D\";\n}\n.fa-expeditedssl[_ngcontent-%COMP%]:before {\n  content: \"\uF23E\";\n}\n.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before {\n  content: \"\uF240\";\n}\n.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF241\";\n}\n.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before {\n  content: \"\uF242\";\n}\n.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF243\";\n}\n.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF244\";\n}\n.fa-mouse-pointer[_ngcontent-%COMP%]:before {\n  content: \"\uF245\";\n}\n.fa-i-cursor[_ngcontent-%COMP%]:before {\n  content: \"\uF246\";\n}\n.fa-object-group[_ngcontent-%COMP%]:before {\n  content: \"\uF247\";\n}\n.fa-object-ungroup[_ngcontent-%COMP%]:before {\n  content: \"\uF248\";\n}\n.fa-sticky-note[_ngcontent-%COMP%]:before {\n  content: \"\uF249\";\n}\n.fa-sticky-note-o[_ngcontent-%COMP%]:before {\n  content: \"\uF24A\";\n}\n.fa-cc-jcb[_ngcontent-%COMP%]:before {\n  content: \"\uF24B\";\n}\n.fa-cc-diners-club[_ngcontent-%COMP%]:before {\n  content: \"\uF24C\";\n}\n.fa-clone[_ngcontent-%COMP%]:before {\n  content: \"\uF24D\";\n}\n.fa-balance-scale[_ngcontent-%COMP%]:before {\n  content: \"\uF24E\";\n}\n.fa-hourglass-o[_ngcontent-%COMP%]:before {\n  content: \"\uF250\";\n}\n.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before {\n  content: \"\uF251\";\n}\n.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before {\n  content: \"\uF252\";\n}\n.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before {\n  content: \"\uF253\";\n}\n.fa-hourglass[_ngcontent-%COMP%]:before {\n  content: \"\uF254\";\n}\n.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF255\";\n}\n.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF256\";\n}\n.fa-hand-scissors-o[_ngcontent-%COMP%]:before {\n  content: \"\uF257\";\n}\n.fa-hand-lizard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF258\";\n}\n.fa-hand-spock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF259\";\n}\n.fa-hand-pointer-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25A\";\n}\n.fa-hand-peace-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25B\";\n}\n.fa-trademark[_ngcontent-%COMP%]:before {\n  content: \"\uF25C\";\n}\n.fa-registered[_ngcontent-%COMP%]:before {\n  content: \"\uF25D\";\n}\n.fa-creative-commons[_ngcontent-%COMP%]:before {\n  content: \"\uF25E\";\n}\n.fa-gg[_ngcontent-%COMP%]:before {\n  content: \"\uF260\";\n}\n.fa-gg-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF261\";\n}\n.fa-tripadvisor[_ngcontent-%COMP%]:before {\n  content: \"\uF262\";\n}\n.fa-odnoklassniki[_ngcontent-%COMP%]:before {\n  content: \"\uF263\";\n}\n.fa-odnoklassniki-square[_ngcontent-%COMP%]:before {\n  content: \"\uF264\";\n}\n.fa-get-pocket[_ngcontent-%COMP%]:before {\n  content: \"\uF265\";\n}\n.fa-wikipedia-w[_ngcontent-%COMP%]:before {\n  content: \"\uF266\";\n}\n.fa-safari[_ngcontent-%COMP%]:before {\n  content: \"\uF267\";\n}\n.fa-chrome[_ngcontent-%COMP%]:before {\n  content: \"\uF268\";\n}\n.fa-firefox[_ngcontent-%COMP%]:before {\n  content: \"\uF269\";\n}\n.fa-opera[_ngcontent-%COMP%]:before {\n  content: \"\uF26A\";\n}\n.fa-internet-explorer[_ngcontent-%COMP%]:before {\n  content: \"\uF26B\";\n}\n.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before {\n  content: \"\uF26C\";\n}\n.fa-contao[_ngcontent-%COMP%]:before {\n  content: \"\uF26D\";\n}\n.fa-500px[_ngcontent-%COMP%]:before {\n  content: \"\uF26E\";\n}\n.fa-amazon[_ngcontent-%COMP%]:before {\n  content: \"\uF270\";\n}\n.fa-calendar-plus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF271\";\n}\n.fa-calendar-minus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF272\";\n}\n.fa-calendar-times-o[_ngcontent-%COMP%]:before {\n  content: \"\uF273\";\n}\n.fa-calendar-check-o[_ngcontent-%COMP%]:before {\n  content: \"\uF274\";\n}\n.fa-industry[_ngcontent-%COMP%]:before {\n  content: \"\uF275\";\n}\n.fa-map-pin[_ngcontent-%COMP%]:before {\n  content: \"\uF276\";\n}\n.fa-map-signs[_ngcontent-%COMP%]:before {\n  content: \"\uF277\";\n}\n.fa-map-o[_ngcontent-%COMP%]:before {\n  content: \"\uF278\";\n}\n.fa-map[_ngcontent-%COMP%]:before {\n  content: \"\uF279\";\n}\n.fa-commenting[_ngcontent-%COMP%]:before {\n  content: \"\uF27A\";\n}\n.fa-commenting-o[_ngcontent-%COMP%]:before {\n  content: \"\uF27B\";\n}\n.fa-houzz[_ngcontent-%COMP%]:before {\n  content: \"\uF27C\";\n}\n.fa-vimeo[_ngcontent-%COMP%]:before {\n  content: \"\uF27D\";\n}\n.fa-black-tie[_ngcontent-%COMP%]:before {\n  content: \"\uF27E\";\n}\n.fa-fonticons[_ngcontent-%COMP%]:before {\n  content: \"\uF280\";\n}\n.fa-reddit-alien[_ngcontent-%COMP%]:before {\n  content: \"\uF281\";\n}\n.fa-edge[_ngcontent-%COMP%]:before {\n  content: \"\uF282\";\n}\n.fa-credit-card-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF283\";\n}\n.fa-codiepie[_ngcontent-%COMP%]:before {\n  content: \"\uF284\";\n}\n.fa-modx[_ngcontent-%COMP%]:before {\n  content: \"\uF285\";\n}\n.fa-fort-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF286\";\n}\n.fa-usb[_ngcontent-%COMP%]:before {\n  content: \"\uF287\";\n}\n.fa-product-hunt[_ngcontent-%COMP%]:before {\n  content: \"\uF288\";\n}\n.fa-mixcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF289\";\n}\n.fa-scribd[_ngcontent-%COMP%]:before {\n  content: \"\uF28A\";\n}\n.fa-pause-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28B\";\n}\n.fa-pause-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28C\";\n}\n.fa-stop-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28D\";\n}\n.fa-stop-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28E\";\n}\n.fa-shopping-bag[_ngcontent-%COMP%]:before {\n  content: \"\uF290\";\n}\n.fa-shopping-basket[_ngcontent-%COMP%]:before {\n  content: \"\uF291\";\n}\n.fa-hashtag[_ngcontent-%COMP%]:before {\n  content: \"\uF292\";\n}\n.fa-bluetooth[_ngcontent-%COMP%]:before {\n  content: \"\uF293\";\n}\n.fa-bluetooth-b[_ngcontent-%COMP%]:before {\n  content: \"\uF294\";\n}\n.fa-percent[_ngcontent-%COMP%]:before {\n  content: \"\uF295\";\n}\n.fa-gitlab[_ngcontent-%COMP%]:before {\n  content: \"\uF296\";\n}\n.fa-wpbeginner[_ngcontent-%COMP%]:before {\n  content: \"\uF297\";\n}\n.fa-wpforms[_ngcontent-%COMP%]:before {\n  content: \"\uF298\";\n}\n.fa-envira[_ngcontent-%COMP%]:before {\n  content: \"\uF299\";\n}\n.fa-universal-access[_ngcontent-%COMP%]:before {\n  content: \"\uF29A\";\n}\n.fa-wheelchair-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF29B\";\n}\n.fa-question-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF29C\";\n}\n.fa-blind[_ngcontent-%COMP%]:before {\n  content: \"\uF29D\";\n}\n.fa-audio-description[_ngcontent-%COMP%]:before {\n  content: \"\uF29E\";\n}\n.fa-volume-control-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF2A0\";\n}\n.fa-braille[_ngcontent-%COMP%]:before {\n  content: \"\uF2A1\";\n}\n.fa-assistive-listening-systems[_ngcontent-%COMP%]:before {\n  content: \"\uF2A2\";\n}\n.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before {\n  content: \"\uF2A3\";\n}\n.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before {\n  content: \"\uF2A4\";\n}\n.fa-glide[_ngcontent-%COMP%]:before {\n  content: \"\uF2A5\";\n}\n.fa-glide-g[_ngcontent-%COMP%]:before {\n  content: \"\uF2A6\";\n}\n.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before {\n  content: \"\uF2A7\";\n}\n.fa-low-vision[_ngcontent-%COMP%]:before {\n  content: \"\uF2A8\";\n}\n.fa-viadeo[_ngcontent-%COMP%]:before {\n  content: \"\uF2A9\";\n}\n.fa-viadeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AA\";\n}\n.fa-snapchat[_ngcontent-%COMP%]:before {\n  content: \"\uF2AB\";\n}\n.fa-snapchat-ghost[_ngcontent-%COMP%]:before {\n  content: \"\uF2AC\";\n}\n.fa-snapchat-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AD\";\n}\n.fa-pied-piper[_ngcontent-%COMP%]:before {\n  content: \"\uF2AE\";\n}\n.fa-first-order[_ngcontent-%COMP%]:before {\n  content: \"\uF2B0\";\n}\n.fa-yoast[_ngcontent-%COMP%]:before {\n  content: \"\uF2B1\";\n}\n.fa-themeisle[_ngcontent-%COMP%]:before {\n  content: \"\uF2B2\";\n}\n.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before {\n  content: \"\uF2B3\";\n}\n.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF2B4\";\n}\n.fa-handshake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B5\";\n}\n.fa-envelope-open[_ngcontent-%COMP%]:before {\n  content: \"\uF2B6\";\n}\n.fa-envelope-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B7\";\n}\n.fa-linode[_ngcontent-%COMP%]:before {\n  content: \"\uF2B8\";\n}\n.fa-address-book[_ngcontent-%COMP%]:before {\n  content: \"\uF2B9\";\n}\n.fa-address-book-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BA\";\n}\n.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2BB\";\n}\n.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BC\";\n}\n.fa-user-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF2BD\";\n}\n.fa-user-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BE\";\n}\n.fa-user-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C0\";\n}\n.fa-id-badge[_ngcontent-%COMP%]:before {\n  content: \"\uF2C1\";\n}\n.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2C2\";\n}\n.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C3\";\n}\n.fa-quora[_ngcontent-%COMP%]:before {\n  content: \"\uF2C4\";\n}\n.fa-free-code-camp[_ngcontent-%COMP%]:before {\n  content: \"\uF2C5\";\n}\n.fa-telegram[_ngcontent-%COMP%]:before {\n  content: \"\uF2C6\";\n}\n.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before {\n  content: \"\uF2C7\";\n}\n.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF2C8\";\n}\n.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before {\n  content: \"\uF2C9\";\n}\n.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF2CA\";\n}\n.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF2CB\";\n}\n.fa-shower[_ngcontent-%COMP%]:before {\n  content: \"\uF2CC\";\n}\n.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before {\n  content: \"\uF2CD\";\n}\n.fa-podcast[_ngcontent-%COMP%]:before {\n  content: \"\uF2CE\";\n}\n.fa-window-maximize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D0\";\n}\n.fa-window-minimize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D1\";\n}\n.fa-window-restore[_ngcontent-%COMP%]:before {\n  content: \"\uF2D2\";\n}\n.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before {\n  content: \"\uF2D3\";\n}\n.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2D4\";\n}\n.fa-bandcamp[_ngcontent-%COMP%]:before {\n  content: \"\uF2D5\";\n}\n.fa-grav[_ngcontent-%COMP%]:before {\n  content: \"\uF2D6\";\n}\n.fa-etsy[_ngcontent-%COMP%]:before {\n  content: \"\uF2D7\";\n}\n.fa-imdb[_ngcontent-%COMP%]:before {\n  content: \"\uF2D8\";\n}\n.fa-ravelry[_ngcontent-%COMP%]:before {\n  content: \"\uF2D9\";\n}\n.fa-eercast[_ngcontent-%COMP%]:before {\n  content: \"\uF2DA\";\n}\n.fa-microchip[_ngcontent-%COMP%]:before {\n  content: \"\uF2DB\";\n}\n.fa-snowflake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2DC\";\n}\n.fa-superpowers[_ngcontent-%COMP%]:before {\n  content: \"\uF2DD\";\n}\n.fa-wpexplorer[_ngcontent-%COMP%]:before {\n  content: \"\uF2DE\";\n}\n.fa-meetup[_ngcontent-%COMP%]:before {\n  content: \"\uF2E0\";\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.angular-editor-textarea[_ngcontent-%COMP%] {\n  min-height: 150px;\n  overflow: auto;\n  margin-top: 5px;\n  resize: vertical;\n}\n.angular-editor-textarea[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  width: 8px;\n  height: 8px;\n  cursor: nwse-resize;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.angular-editor-toolbar[_ngcontent-%COMP%] {\n  font: 100 14px/15px Roboto, Arial, sans-serif;\n  background-color: #f5f5f5;\n  font-size: 0.8rem;\n  padding: 0.2rem;\n  border: 1px solid #ddd;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 5px;\n  vertical-align: baseline;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%] {\n  background-color: white;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n  padding: 0.4rem;\n  min-width: 2rem;\n  float: left;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%] {\n  outline: 0;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after {\n  background: #555555;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled    > .color-label.background[_ngcontent-%COMP%] {\n  background: #555555;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%] {\n  background: #fff5b9;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover {\n  background-color: #fffa98;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 90px;\n  vertical-align: middle;\n  background-color: transparent;\n  border: 0.5px solid rgba(255, 255, 255, 0);\n  border-radius: 5px;\n  outline: none;\n  padding: 0.4rem;\n  cursor: pointer;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n}\n@supports not (-moz-appearance: none) {\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%] {\n    \n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background-color: #f4f4f4;\n    padding: 5px;\n  }\n  .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    border: 1px solid;\n    background-color: white;\n  }\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f1f1f1;\n  transition: 0.2s ease;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  font-size: smaller;\n  background: #1b1b1b;\n  color: white;\n  padding: 3px;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  left: -1px;\n  top: auto;\n  bottom: -3px;\n  right: auto;\n  width: 15px;\n  height: 2px;\n  z-index: 0;\n  background: #1b1b1b;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]) {\n  display: inline-block;\n}\n.angular-editor[_ngcontent-%COMP%] {\n  position: relative;\n}\n.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before {\n  content: attr(placeholder);\n  color: #868e96;\n  opacity: 1;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%] {\n  min-height: 5rem;\n  padding: 0.5rem 0.8rem 1rem 0.8rem;\n  border: 1px solid #ddd;\n  background-color: transparent;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote {\n  margin-left: 1rem;\n  border-left: 0.2em solid #dfe2e5;\n  padding-left: 0.5rem;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p {\n  margin-bottom: 0;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  padding: 0.5rem 0.8rem 1rem 0.9rem;\n  color: #6c757d;\n  opacity: 0.75;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%] {\n  display: block;\n}\n.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZ3VsYXItZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19wYXRoLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX2NvcmUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fbGFyZ2VyLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX2ZpeGVkLXdpZHRoLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX2xpc3Quc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX2JvcmRlcmVkLXB1bGxlZC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19hbmltYXRlZC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19yb3RhdGVkLWZsaXBwZWQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX3N0YWNrZWQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9faWNvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fc2NyZWVuLXJlYWRlci5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7OztFQUFBO0FDQUE7K0JBQUE7QUFHQTtFQUNFLDBCQUFBO0VBQ0Esb0dBQUE7RUFDQSxpbUJBQUE7RUFNQSxtQkFBQTtFQUNBLGtCQUFBO0FGQUY7QUdWQTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBSFlGO0FJbEJBLDZEQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUpxQkY7QUluQkE7RUFBd0IsY0FBQTtBSnVCeEI7QUl0QkE7RUFBd0IsY0FBQTtBSjBCeEI7QUl6QkE7RUFBd0IsY0FBQTtBSjZCeEI7QUk1QkE7RUFBd0IsY0FBQTtBSmdDeEI7QUsxQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FMNkNGO0FNOUNBO0VBQ0UsZUFBQTtFQUNBLDJCQ01vQjtFRExwQixxQkFBQTtBTmlERjtBTWhERTtFQUFPLGtCQUFBO0FObURUO0FNakRBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQ0RvQjtFREVwQixtQkFBQTtFQUNBLGtCQUFBO0FOb0RGO0FNbkRFO0VBQ0UscUJBQUE7QU5xREo7QVFsRUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QVJxRUY7QVFsRUE7RUFBK0IsV0FBQTtBUnNFL0I7QVFyRUE7RUFBZ0MsWUFBQTtBUnlFaEM7QVF0RUU7RUFBZ0MsbUJBQUE7QVIwRWxDO0FRekVFO0VBQWlDLGtCQUFBO0FSNEVuQztBUXpFQSwyQkFBQTtBQUNBO0VBQWMsWUFBQTtBUjZFZDtBUTVFQTtFQUFhLFdBQUE7QVJnRmI7QVE3RUU7RUFBYyxtQkFBQTtBUmlGaEI7QVFoRkU7RUFBZSxrQkFBQTtBUm1GakI7QVN2R0E7RUFDRSw2Q0FBQTtFQUNRLHFDQUFBO0FUMEdWO0FTdkdBO0VBQ0UsK0NBQUE7RUFDUSx1Q0FBQTtBVDBHVjtBU3ZHQTtFQUNFO0lBRVUsdUJBQUE7RVQwR1Y7RVN4R0E7SUFFVSx5QkFBQTtFVDBHVjtBQUNGO0FTdkdBO0VBQ0U7SUFFVSx1QkFBQTtFVHlHVjtFU3ZHQTtJQUVVLHlCQUFBO0VUeUdWO0FBQ0Y7QVV0SUE7RUNXRSxzRUFBQTtFQUdRLHdCQUFBO0FYOEhWO0FVM0lBO0VDVUUsc0VBQUE7RUFHUSx5QkFBQTtBWHFJVjtBVWpKQTtFQ1NFLHNFQUFBO0VBR1EseUJBQUE7QVg0SVY7QVV0SkE7RUNjRSxnRkFBQTtFQUdRLHVCQUFBO0FYNElWO0FVNUpBO0VDYUUsZ0ZBQUE7RUFHUSx1QkFBQTtBWG1KVjtBVTlKQTs7Ozs7RUFLRSxZQUFBO0FWaUtGO0FZaExBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBWm1MRjtBWWpMQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBWm9MRjtBWWxMQTtFQUE4QixvQkFBQTtBWnNMOUI7QVlyTEE7RUFBOEIsY0FBQTtBWnlMOUI7QVl4TEE7RUFBNkIsV0xUUDtBUHFNdEI7QWEvTUE7bUVBQUE7QUFHQTtFQUFrQyxZTndVbkI7QVB0SGY7QWFqTkE7RUFBa0MsWU4yZG5CO0FQdFFmO0FhcE5BO0VBQW1DLFlOMGpCbkI7QVBsV2hCO0Fhdk5BO0VBQXVDLFlOc09uQjtBUFhwQjtBYTFOQTtFQUFrQyxZTnVXbkI7QVB6SWY7QWE3TkE7RUFBaUMsWU5rbkJuQjtBUGpaZDtBYWhPQTtFQUFtQyxZTnNuQm5CO0FQbFpoQjtBYW5PQTtFQUFpQyxZTnl0Qm5CO0FQbGZkO0FhdE9BO0VBQWlDLFlObVJuQjtBUHpDZDtBYXpPQTtFQUFxQyxZTnVwQm5CO0FQMWFsQjtBYTVPQTtFQUErQixZTnFwQm5CO0FQcmFaO0FhL09BO0VBQW9DLFlOc3BCbkI7QVBuYWpCO0FhbFBBO0VBQWtDLFlOeUluQjtBUDZHZjtBYXJQQTs7O0VBRWtDLFlOcXFCbkI7QVA1YWY7QWF4UEE7RUFBd0MsWU44aUJuQjtBUGxUckI7QWEzUEE7RUFBeUMsWU40aUJuQjtBUDdTdEI7QWE5UEE7RUFBc0MsWU40Zm5CO0FQMVBuQjtBYWpRQTtFQUFtQyxZTmlrQm5CO0FQNVRoQjtBYXBRQTs7RUFDZ0MsWU5nS25CO0FQd0diO0FhdlFBO0VBQW9DLFlOK3FCbkI7QVBwYWpCO0FhMVFBO0VBQWlDLFlOd1ZuQjtBUDFFZDtBYTdRQTtFQUFtQyxZTnVQbkI7QVAwQmhCO0FhaFJBO0VBQW9DLFlOZ0puQjtBUG9JakI7QWFuUkE7RUFBaUMsWU5taEJuQjtBUDVQZDtBYXRSQTtFQUFxQyxZTmdNbkI7QVAwRmxCO0FhelJBO0VBQWdELFlOWW5CO0FQaVI3QjtBYTVSQTtFQUE4QyxZTmNuQjtBUGtSM0I7QWEvUkE7RUFBa0MsWU5xV25CO0FQbEVmO0FhbFNBO0VBQTBDLFlOd2VuQjtBUGxNdkI7QWFyU0E7O0VBQ21DLFlOc2dCbkI7QVA3TmhCO0FheFNBO0VBQW9DLFlOZ2dCbkI7QVBwTmpCO0FhM1NBO0VBQXFDLFlOd1luQjtBUHpGbEI7QWE5U0E7RUFBaUMsWU4yWW5CO0FQekZkO0FhalRBO0VBQWlDLFlONFBuQjtBUHlEZDtBYXBUQTtFQUF1QyxZTm9VbkI7QVBacEI7QWF2VEE7RUFBdUMsWU5pdEJuQjtBUHRacEI7QWExVEE7RUFBd0MsWU4rc0JuQjtBUGpackI7QWE3VEE7RUFBc0MsWU5ndEJuQjtBUC9ZbkI7QWFoVUE7RUFBbUMsWU55ZW5CO0FQcktoQjtBYW5VQTtFQUFvQyxZTndCbkI7QVArU2pCO0FhdFVBO0VBQWdDLFlOeW1CbkI7QVAvUmI7QWF6VUE7RUFBaUMsWU55bUJuQjtBUDVSZDtBYTVVQTtFQUFpQyxZTnlEbkI7QVB1UmQ7QWEvVUE7RUFBcUMsWU55RG5CO0FQMFJsQjtBYWxWQTtFQUFrQyxZTitkbkI7QVB6SWY7QWFyVkE7RUFBbUMsWU4yRW5CO0FQOFFoQjtBYXhWQTtFQUFpQyxZTjBQbkI7QVBrR2Q7QWEzVkE7RUFBaUMsWU5pRG5CO0FQOFNkO0FhOVZBO0VBQW1DLFlOMFZuQjtBUFFoQjtBYWpXQTtFQUF3QyxZTndtQm5CO0FQblFyQjtBYXBXQTtFQUF1QyxZTndtQm5CO0FQaFFwQjtBYXZXQTtFQUF1QyxZTnBDbkI7QVArWXBCO0FhMVdBO0VBQXlDLFlOdkNuQjtBUHFadEI7QWE3V0E7RUFBd0MsWU5yQ25CO0FQc1pyQjtBYWhYQTtFQUEwQyxZTnhDbkI7QVA0WnZCO0FhblhBO0VBQWlDLFlOK1duQjtBUFFkO0FhdFhBOztFQUNvQyxZTjJhbkI7QVBqRGpCO0FhelhBO0VBQW1DLFlOc1VuQjtBUHVEaEI7QWE1WEE7RUFBeUMsWU5rckJuQjtBUGxUdEI7QWEvWEE7OztFQUVzQyxZTjBibkI7QVB2RG5CO0FhbFlBO0VBQW1DLFlOa2JuQjtBUDVDaEI7QWFyWUE7RUFBdUMsWU53WG5CO0FQaUJwQjtBYXhZQTtFQUFtQyxZTnREbkI7QVBrY2hCO0FhM1lBO0VBQWlDLFlObW5CbkI7QVBwT2Q7QWE5WUE7O0VBQzRDLFlOK2FuQjtBUDdCekI7QWFqWkE7RUFBMkMsWU44Zm5CO0FQekd4QjtBYXBaQTtFQUEyQyxZTitFbkI7QVB5VXhCO0FhdlpBO0VBQW1DLFlOekJuQjtBUG9iaEI7QWExWkE7RUFBMEMsWU5takJuQjtBUHJKdkI7QWE3WkE7RUFBMEMsWU5xTG5CO0FQNE92QjtBYWhhQTtFQUFxQyxZTmxCbkI7QVBzYmxCO0FhbmFBO0VBQWlDLFlOc2JuQjtBUGZkO0FhdGFBO0VBQWtDLFlOZ2FuQjtBUFVmO0FhemFBO0VBQWlDLFlObWpCbkI7QVB0SWQ7QWE1YUE7RUFBb0MsWU4rTm5CO0FQaU5qQjtBYS9hQTtFQUF5QyxZTmdMbkI7QVBtUXRCO0FhbGJBO0VBQXlDLFlONGlCbkI7QVB0SHRCO0FhcmJBO0VBQWtDLFlOK0luQjtBUDBTZjtBYXhiQTtFQUF5QyxZTnlFbkI7QVBtWHRCO0FhM2JBO0VBQTBDLFlOeUVuQjtBUHNYdkI7QWE5YkE7RUFBd0MsWU5rYm5CO0FQZ0JyQjtBYWpjQTtFQUF5QyxZTnVYbkI7QVA4RXRCO0FhcGNBO0VBQXlDLFlOMmxCbkI7QVBuSnRCO0FhdmNBO0VBQXlDLFlOMkRuQjtBUGdadEI7QWExY0E7RUFBNEMsWU55Ym5CO0FQcUJ6QjtBYTdjQTtFQUF3QyxZTjBTbkI7QVB1S3JCO0FhaGRBO0VBQXVDLFlOMEduQjtBUDBXcEI7QWFuZEE7RUFBMkMsWU51bEJuQjtBUGhJeEI7QWF0ZEE7RUFBMkMsWU51RG5CO0FQbWF4QjtBYXpkQTtFQUFnQyxZTm5DbkI7QVBnZ0JiO0FhNWRBO0VBQXVDLFlObkRuQjtBUG1oQnBCO0FhL2RBO0VBQXdDLFlObkRuQjtBUHNoQnJCO0FhbGVBO0VBQXFDLFlObkRuQjtBUHloQmxCO0FhcmVBO0VBQXVDLFlOdkRuQjtBUGdpQnBCO0FheGVBOztFQUNrQyxZTjRkbkI7QVBnQmY7QWEzZUE7RUFBbUMsWU44SW5CO0FQaVdoQjtBYTllQTtFQUFxQyxZTnNGbkI7QVA0WmxCO0FhamZBO0VBQWlDLFlOK1puQjtBUHNGZDtBYXBmQTtFQUFrQyxZTm9XbkI7QVBvSmY7QWF2ZkE7RUFBcUMsWU5wRG5CO0FQK2lCbEI7QWExZkE7RUFBK0MsWU51SW5CO0FQdVg1QjtBYTdmQTtFQUFpQyxZTmtObkI7QVArU2Q7QWFoZ0JBO0VBQWlDLFlOMFNuQjtBUDBOZDtBYW5nQkE7RUFBaUMsWU42S25CO0FQMFZkO0FhdGdCQTtFQUFnQyxZTnlJbkI7QVBpWWI7QWF6Z0JBO0VBQXNDLFlOeUluQjtBUG9ZbkI7QWE1Z0JBOztFQUNpRCxZTmlJbkI7QVArWTlCO0FhL2dCQTtFQUFrQyxZTitZbkI7QVBvSWY7QWFsaEJBO0VBQXFDLFlBQUE7QWJzaEJyQztBYXJoQkE7RUFBbUMsWU5vYW5CO0FQcUhoQjtBYXhoQkE7RUFBb0MsWU5nRW5CO0FQNGRqQjtBYTNoQkE7RUFBbUMsWU42VG5CO0FQa09oQjtBYTloQkE7RUFBdUMsWU51Q25CO0FQMmZwQjtBYWppQkE7RUFBeUMsWU5tQ25CO0FQa2dCdEI7QWFwaUJBO0VBQW9DLFlOK2FuQjtBUHlIakI7QWF2aUJBO0VBQTBDLFlOa2RuQjtBUHlGdkI7QWExaUJBO0VBQW1DLFlOMEtuQjtBUG9ZaEI7QWE3aUJBO0VBQXdDLFlOMktuQjtBUHNZckI7QWFoakJBO0VBQXFDLFlOM0VuQjtBUCtuQmxCO0FhbmpCQTtFQUFxQyxZTjdFbkI7QVBvb0JsQjtBYXRqQkE7O0VBQ3NDLFlObEVuQjtBUDRuQm5CO0FhempCQTtFQUEyQyxZTitrQm5CO0FQbEJ4QjtBYTVqQkE7RUFBNEMsWU40SG5CO0FQb2N6QjtBYS9qQkE7RUFBeUMsWU5UbkI7QVA0a0J0QjtBYWxrQkE7RUFBZ0MsWU4yUW5CO0FQMlRiO0FhcmtCQTs7RUFDaUMsWU42Q25CO0FQNGhCZDtBYXhrQkE7RUFBcUMsWU5rRG5CO0FQMGhCbEI7QWEza0JBO0VBQXdDLFlOc2lCbkI7QVB5Q3JCO0FhOWtCQTtFQUEwQyxZTm9pQm5CO0FQOEN2QjtBYWpsQkE7RUFBc0MsWU4yZW5CO0FQMEduQjtBYXBsQkE7RUFBb0MsWU44Tm5CO0FQMFhqQjtBYXZsQkE7RUFBcUMsWU5vY25CO0FQdUpsQjtBYTFsQkE7RUFBNEMsWU51Um5CO0FQdVV6QjtBYTdsQkE7RUFBdUMsWU42aEJuQjtBUG9FcEI7QWFobUJBO0VBQTBDLFlOc0duQjtBUDhmdkI7QWFubUJBO0VBQW9DLFlOOGJuQjtBUHlLakI7QWF0bUJBO0VBQW1DLFlOcWpCbkI7QVBxRGhCO0Fhem1CQTtFQUEwQyxZTmdMbkI7QVA2YnZCO0FhNW1CQTtFQUFtQyxZTnVrQm5CO0FQeUNoQjtBYS9tQkE7RUFBb0MsWU5xUW5CO0FQOFdqQjtBYWxuQkE7RUFBa0MsWU5pV25CO0FQcVJmO0Fhcm5CQTtFQUFxQyxZTjJkbkI7QVA4SmxCO0FheG5CQTtFQUF1QyxZTmpEbkI7QVA2cUJwQjtBYTNuQkE7RUFBeUMsWU4rVm5CO0FQZ1N0QjtBYTluQkE7RUFBb0MsWU5zakJuQjtBUDRFakI7QWFqb0JBOztFQUNxQyxZTmdHbkI7QVBxaUJsQjtBYXBvQkE7RUFBbUMsWU5vS25CO0FQb2VoQjtBYXZvQkE7RUFBbUMsWU4wakJuQjtBUGlGaEI7QWExb0JBO0VBQXdDLFlOb0NuQjtBUDBtQnJCO0FhN29CQTs7RUFDZ0MsWU4rWW5CO0FQa1FiO0FhaHBCQTtFQUFrQyxZTm9NbkI7QVBnZGY7QWFucEJBO0VBQXFDLFlOckRuQjtBUDRzQmxCO0FhdHBCQTtFQUFpQyxZTmhGbkI7QVAwdUJkO0FhenBCQTtFQUF3QyxZTnJCbkI7QVBrckJyQjtBYTVwQkE7RUFBeUMsWU5vTG5CO0FQNGV0QjtBYS9wQkE7RUFBd0MsWU5rTG5CO0FQaWZyQjtBYWxxQkE7RUFBc0MsWU5tTG5CO0FQbWZuQjtBYXJxQkE7RUFBd0MsWU4rS25CO0FQMGZyQjtBYXhxQkE7RUFBOEMsWU5ySW5CO0FQaXpCM0I7QWEzcUJBO0VBQStDLFlOakluQjtBUGd6QjVCO0FhOXFCQTtFQUE0QyxZTmpJbkI7QVBtekJ6QjtBYWpyQkE7RUFBOEMsWU56SW5CO0FQOHpCM0I7QWFwckJBO0VBQWtDLFlOMkpuQjtBUDZoQmY7QWF2ckJBO0VBQW1DLFlONmxCbkI7QVA4RmhCO0FhMXJCQTtFQUFrQyxZTnFlbkI7QVB5TmY7QWE3ckJBO0VBQW1DLFlOeUduQjtBUHdsQmhCO0FhaHNCQTtFQUFzQyxZTnpFbkI7QVA2d0JuQjtBYW5zQkE7RUFBdUMsWU5sSW5CO0FQeTBCcEI7QWF0c0JBOztFQUNrQyxZTmlqQm5CO0FQeUpmO0FhenNCQTs7RUFDaUMsWU40T25CO0FQaWVkO0FhNXNCQTtFQUFrQyxZTmRuQjtBUDh0QmY7QWEvc0JBO0VBQWtDLFlOMEduQjtBUHltQmY7QWFsdEJBOztFQUNxQyxZTjZYbkI7QVB5VmxCO0FhcnRCQTs7RUFDb0MsWU4yRm5CO0FQOG5CakI7QWF4dEJBO0VBQXNDLFlONlNuQjtBUCthbkI7QWEzdEJBOztFQUNxQyxZTnFHbkI7QVAwbkJsQjtBYTl0QkE7RUFBbUMsWU5nYm5CO0FQa1RoQjtBYWp1QkE7OztFQUVpQyxZTmxJbkI7QVB1MkJkO0FhcHVCQTtFQUFvQyxZTnNPbkI7QVBrZ0JqQjtBYXZ1QkE7RUFBb0MsWU5vT25CO0FQdWdCakI7QWExdUJBO0VBQTBDLFlOK2JuQjtBUCtTdkI7QWE3dUJBO0VBQXNDLFlOMmdCbkI7QVBzT25CO0FhaHZCQTtFQUFrQyxZTnVjbkI7QVA2U2Y7QWFudkJBO0VBQWtDLFlOeU9uQjtBUDhnQmY7QWF0dkJBO0VBQWtDLFlONmZuQjtBUDZQZjtBYXp2QkE7RUFBc0MsWU5tVG5CO0FQMGNuQjtBYTV2QkE7RUFBNkMsWU5vVG5CO0FQNGMxQjtBYS92QkE7RUFBK0MsWU5nSW5CO0FQbW9CNUI7QWFsd0JBO0VBQXdDLFlONEhuQjtBUDBvQnJCO0FhcndCQTtFQUFrQyxZTnFRbkI7QVBvZ0JmO0FheHdCQTtFQUF1QyxZTnBGbkI7QVBnMkJwQjtBYTN3QkE7RUFBcUMsWU45RW5CO0FQNjFCbEI7QWE5d0JBO0VBQXVDLFlOckZuQjtBUHUyQnBCO0FhanhCQTtFQUF3QyxZTnJGbkI7QVAwMkJyQjtBYXB4QkE7RUFBb0MsWU5oQ25CO0FQd3pCakI7QWF2eEJBOztFQUNpQyxZTjBZbkI7QVBpWmQ7QWExeEJBOztFQUNzQyxZTjhZbkI7QVBnWm5CO0FhN3hCQTs7RUFDcUMsWU4yWW5CO0FQc1psQjtBYWh5QkE7RUFBcUMsWU5VbkI7QVAweEJsQjtBYW55QkE7RUFBcUMsWU51TW5CO0FQZ21CbEI7QWF0eUJBOztFQUNpQyxZTnFmbkI7QVBxVGQ7QWF6eUJBOztFQUNrQyxZTm9GbkI7QVB5dEJmO0FhNXlCQTs7RUFDdUMsWU4rYW5CO0FQaVlwQjtBYS95QkE7RUFBc0MsWU43Q25CO0FQZzJCbkI7QWFsekJBO0VBQXVDLFlOMUNuQjtBUGcyQnBCO0FhcnpCQTs7RUFDaUMsWU5wSW5CO0FQNjdCZDtBYXh6QkE7RUFBb0MsWU42V25CO0FQK2NqQjtBYTN6QkE7RUFBcUMsWU55ZW5CO0FQc1ZsQjtBYTl6QkE7O0VBQ3NDLFlOckVuQjtBUHU0Qm5CO0FhajBCQTtFQUF3QyxZTnFMbkI7QVBncEJyQjtBYXAwQkE7RUFBcUMsWU5HbkI7QVBxMEJsQjtBYXYwQkE7RUFBMkMsWU5uRW5CO0FQODRCeEI7QWExMEJBO0VBQXlDLFlObkVuQjtBUGk1QnRCO0FhNzBCQTtFQUFvQyxZTmlmbkI7QVBnV2pCO0FhaDFCQTtFQUF3QyxZTjhZbkI7QVBzY3JCO0FhbjFCQTtFQUFxQyxZTnlabkI7QVA4YmxCO0FhdDFCQTtFQUFtQyxZTjlKbkI7QVB3L0JoQjtBYXoxQkE7RUFBbUMsWU5sRW5CO0FQKzVCaEI7QWE1MUJBO0VBQW9DLFlOMUNuQjtBUDA0QmpCO0FhLzFCQTtFQUF3QyxZTjhCbkI7QVBxMEJyQjtBYWwyQkE7RUFBdUMsWU4xSW5CO0FQZy9CcEI7QWFyMkJBO0VBQXVDLFlOc0huQjtBUG12QnBCO0FheDJCQTtFQUFzQyxZTnJPbkI7QVBpbENuQjtBYTMyQkE7RUFBbUMsWU40TW5CO0FQbXFCaEI7QWE5MkJBO0VBQXdDLFlOVW5CO0FQdzJCckI7QWFqM0JBO0VBQWlDLFlOM0tuQjtBUGdpQ2Q7QWFwM0JBO0VBQXFDLFlOdUZuQjtBUGl5QmxCO0FhdjNCQTtFQUF3QyxZTjJRbkI7QVBnbkJyQjtBYTEzQkE7RUFBOEMsWU5yT25CO0FQbW1DM0I7QWE3M0JBO0VBQStDLFlOck9uQjtBUHNtQzVCO0FhaDRCQTtFQUE0QyxZTnJPbkI7QVB5bUN6QjtBYW40QkE7RUFBOEMsWU56T25CO0FQZ25DM0I7QWF0NEJBO0VBQXVDLFlOck9uQjtBUCttQ3BCO0FhejRCQTtFQUF3QyxZTnJPbkI7QVBrbkNyQjtBYTU0QkE7RUFBcUMsWU5yT25CO0FQcW5DbEI7QWEvNEJBO0VBQXVDLFlOek9uQjtBUDRuQ3BCO0FhbDVCQTtFQUFvQyxZTnBEbkI7QVAwOEJqQjtBYXI1QkE7RUFBbUMsWU40SW5CO0FQNndCaEI7QWF4NUJBO0VBQW1DLFlOd1luQjtBUG9oQmhCO0FhMzVCQTs7RUFDbUMsWU51TW5CO0FQd3RCaEI7QWE5NUJBO0VBQXFDLFlOekduQjtBUDJnQ2xCO0FhajZCQTtFQUF1QyxZTnlRbkI7QVA0cEJwQjtBYXA2QkE7RUFBd0MsWU55UW5CO0FQK3BCckI7QWF2NkJBO0VBQW9DLFlOK1ZuQjtBUDRrQmpCO0FhMTZCQTtFQUFtQyxZTjlHbkI7QVA0aENoQjtBYTc2QkE7O0VBQ2tDLFlOb1JuQjtBUDZwQmY7QWFoN0JBO0VBQXVDLFlOK0NuQjtBUHE0QnBCO0FhbjdCQTtFQUFxQyxZTm1CbkI7QVBvNkJsQjtBYXQ3QkE7RUFBMEMsWU5vQm5CO0FQczZCdkI7QWF6N0JBO0VBQW9DLFlOcVVuQjtBUHduQmpCO0FhNTdCQTtFQUFvQyxZTjJCbkI7QVBxNkJqQjtBYS83QkE7RUFBa0MsWU5nTG5CO0FQbXhCZjtBYWw4QkE7RUFBb0MsWU4yQm5CO0FQMjZCakI7QWFyOEJBO0VBQXVDLFlOdUhuQjtBUGsxQnBCO0FheDhCQTtFQUFtQyxZTk1uQjtBUHM4QmhCO0FhMzhCQTtFQUEyQyxZTkluQjtBUDI4QnhCO0FhOThCQTtFQUFxQyxZTjZYbkI7QVBxbEJsQjtBYWo5QkE7RUFBaUMsWU5oSG5CO0FQcWtDZDtBYXA5QkE7O0VBQ3NDLFlOdVFuQjtBUGl0Qm5CO0FhdjlCQTs7O0VBRXdDLFlOc1ZuQjtBUHFvQnJCO0FhMTlCQTtFQUEyQyxZTndJbkI7QVBzMUJ4QjtBYTc5QkE7RUFBaUMsWU5oR25CO0FQaWtDZDtBYWgrQkE7RUFBc0MsWU52SG5CO0FQMmxDbkI7QWFuK0JBOztFQUN5QyxZTnRKbkI7QVA2bkN0QjtBYXQrQkE7RUFBcUMsWU55T25CO0FQaXdCbEI7QWF6K0JBO0VBQWlDLFlOMEZuQjtBUG01QmQ7QWE1K0JBO0VBQXdDLFlOMURuQjtBUDBpQ3JCO0FhLytCQTtFQUF3QyxZTmtXbkI7QVBpcEJyQjtBYWwvQkE7RUFBc0MsWU40Vm5CO0FQMHBCbkI7QWFyL0JBO0VBQW1DLFlObEVuQjtBUDJqQ2hCO0FheC9CQTtFQUF5QyxZTmdPbkI7QVA0eEJ0QjtBYTMvQkE7RUFBdUMsWU4ySm5CO0FQbzJCcEI7QWE5L0JBO0VBQTZDLFlOMkpuQjtBUHUyQjFCO0FhamdDQTtFQUFtQyxZTnNSbkI7QVArdUJoQjtBYXBnQ0E7RUFBdUMsWU41TG5CO0FQb3NDcEI7QWF2Z0NBO0VBQThDLFlOeEJuQjtBUG1pQzNCO0FhMWdDQTtFQUFtQyxZTnVQbkI7QVB1eEJoQjtBYTdnQ0E7RUFBbUMsWU42SW5CO0FQbzRCaEI7QWFoaENBO0VBQWdELFlOOUpuQjtBUGtyQzdCO0FhbmhDQTtFQUFpRCxZTjlKbkI7QVBxckM5QjtBYXRoQ0E7RUFBOEMsWU45Sm5CO0FQd3JDM0I7QWF6aENBO0VBQWdELFlObEtuQjtBUCtyQzdCO0FhNWhDQTtFQUFrQyxZTjhEbkI7QVBrK0JmO0FhL2hDQTtFQUFpQyxZTnJIbkI7QVB3cENkO0FhbGlDQTtFQUFtQyxZTnZTbkI7QVA2MENoQjtBYXJpQ0E7RUFBdUMsWU4yWm5CO0FQOG9CcEI7QWF4aUNBO0VBQXFDLFlOaE5uQjtBUDR2Q2xCO0FhM2lDQTtFQUF1QyxZTjdGbkI7QVA0b0NwQjtBYTlpQ0E7RUFBdUMsWU43Rm5CO0FQK29DcEI7QWFqakNBO0VBQXVDLFlOK09uQjtBUHMwQnBCO0FhcGpDQTtFQUF3QyxZTmlNbkI7QVB1M0JyQjtBYXZqQ0E7RUFBbUMsWU42V25CO0FQOHNCaEI7QWExakNBO0VBQXlDLFlOMEluQjtBUG83QnRCO0FhN2pDQTtFQUEyQyxZTjBJbkI7QVB1N0J4QjtBYWhrQ0E7RUFBcUMsWU5xRm5CO0FQKytCbEI7QWFua0NBO0VBQXVDLFlObUZuQjtBUG8vQnBCO0FhdGtDQTtFQUF5QyxZTm5MbkI7QVA2dkN0QjtBYXprQ0E7RUFBMEMsWU4wS25CO0FQbTZCdkI7QWE1a0NBO0VBQWlELFlOcEZuQjtBUG9xQzlCO0FhL2tDQTtFQUF5QyxZTndQbkI7QVAyMUJ0QjtBYWxsQ0E7RUFBb0MsWU5qSm5CO0FQdXVDakI7QWFybENBOztFQUNnRCxZTi9NbkI7QVB3eUM3QjtBYXhsQ0E7O0VBQzhDLFlOOU1uQjtBUDB5QzNCO0FhM2xDQTs7RUFDaUQsWU5qTm5CO0FQZ3pDOUI7QWE5bENBOztFQUNnQyxZTnZHbkI7QVB5c0NiO0Fham1DQTtFQUFnQyxZTmhDbkI7QVBxb0NiO0FhcG1DQTs7RUFDZ0MsWU5xWW5CO0FQbXVCYjtBYXZtQ0E7O0VBQ2dDLFlONENuQjtBUCtqQ2I7QWExbUNBOzs7O0VBR2dDLFlOZ0RuQjtBUDhqQ2I7QWE3bUNBOzs7RUFFZ0MsWU5pTm5CO0FQZzZCYjtBYWhuQ0E7O0VBQ2dDLFlOK0NuQjtBUHFrQ2I7QWFubkNBOztFQUNnQyxZTjNQbkI7QVBrM0NiO0FhdG5DQTtFQUFpQyxZTmhHbkI7QVAwdENkO0Fhem5DQTtFQUFzQyxZTnBGbkI7QVBpdENuQjtBYTVuQ0E7RUFBMkMsWU4wUG5CO0FQczRCeEI7QWEvbkNBO0VBQTRDLFlOMFBuQjtBUHk0QnpCO0FhbG9DQTtFQUE0QyxZTjBQbkI7QVA0NEJ6QjtBYXJvQ0E7RUFBNkMsWU4wUG5CO0FQKzRCMUI7QWF4b0NBO0VBQTZDLFlONlBuQjtBUCs0QjFCO0FhM29DQTtFQUE4QyxZTjZQbkI7QVBrNUIzQjtBYTlvQ0E7RUFBc0MsWU5rVW5CO0FQZzFCbkI7QWFqcENBO0VBQXdDLFlOOFRuQjtBUHUxQnJCO0FhcHBDQTtFQUEyQyxZTnlhbkI7QVArdUJ4QjtBYXZwQ0E7RUFBb0MsWU5zYW5CO0FQcXZCakI7QWExcENBO0VBQWlDLFlOMlpuQjtBUG13QmQ7QWE3cENBO0VBQXdDLFlOMlpuQjtBUHN3QnJCO0FhaHFDQTtFQUF5QyxZTm9hbkI7QVBnd0J0QjtBYW5xQ0E7RUFBb0MsWU54Sm5CO0FQK3pDakI7QWF0cUNBO0VBQTJDLFlOOFBuQjtBUDQ2QnhCO0FhenFDQTtFQUFzQyxZTmdCbkI7QVA2cENuQjtBYTVxQ0E7RUFBbUMsWU5wRm5CO0FQb3dDaEI7QWEvcUNBO0VBQWdDLFlOM1duQjtBUDhoRGI7QWFsckNBO0VBQXNDLFlOL1JuQjtBUHE5Q25CO0FhcnJDQTtFQUE2QyxZTi9SbkI7QVB3OUMxQjtBYXhyQ0E7RUFBbUMsWU4rVW5CO0FQNjJCaEI7QWEzckNBO0VBQTBDLFlOK1VuQjtBUGczQnZCO0FhOXJDQTtFQUE0QyxZTmdEbkI7QVBrcEN6QjtBYWpzQ0E7RUFBMEMsWU5rRG5CO0FQbXBDdkI7QWFwc0NBO0VBQTRDLFlOK0NuQjtBUHlwQ3pCO0FhdnNDQTtFQUE2QyxZTitDbkI7QVA0cEMxQjtBYTFzQ0E7RUFBa0MsWU5qV25CO0FQK2lEZjtBYTdzQ0E7RUFBb0MsWU5tWW5CO0FQODBCakI7QWFodENBO0VBQW9DLFlON1duQjtBUGlrRGpCO0FhbnRDQTtFQUFrQyxZTmtDbkI7QVBxckNmO0FhdHRDQTtFQUFxQyxZTjVLbkI7QVBzNENsQjtBYXp0Q0E7RUFBa0MsWU5nTm5CO0FQNmdDZjtBYTV0Q0E7RUFBdUMsWU54Rm5CO0FQd3pDcEI7QWEvdENBO0VBQW1DLFlONFRuQjtBUHU2QmhCO0FhbHVDQTtFQUFtQyxZTnRJbkI7QVA0MkNoQjtBYXJ1Q0E7RUFBaUMsWU42Q25CO0FQNHJDZDtBYXh1Q0E7O0VBQ3FDLFlONURuQjtBUHd5Q2xCO0FhM3VDQTtFQUFrQyxZTjhQbkI7QVBpL0JmO0FhOXVDQTtFQUFtQyxZTnVFbkI7QVAycUNoQjtBYWp2Q0E7RUFBb0MsWU45V25CO0FQbW1EakI7QWFwdkNBO0VBQWdDLFlOdFNuQjtBUDhoRGI7QWF2dkNBO0VBQStCLFlOaVduQjtBUDA1Qlo7QWExdkNBO0VBQWtDLFlOdVduQjtBUHU1QmY7QWE3dkNBO0VBQW1DLFlOK0luQjtBUGtuQ2hCO0FhaHdDQTtFQUFzQyxZTmtGbkI7QVBrckNuQjtBYW53Q0E7RUFBMkMsWU42Tm5CO0FQMGlDeEI7QWF0d0NBO0VBQWlELFlOL1duQjtBUHluRDlCO0FhendDQTtFQUFnRCxZTmpYbkI7QVA4bkQ3QjtBYTV3Q0E7O0VBQ2dELFlOelJuQjtBUHlpRDdCO0FhL3dDQTtFQUF5QyxZTm5NbkI7QVBzOUN0QjtBYWx4Q0E7RUFBdUMsWU5pV25CO0FQcTdCcEI7QWFyeENBO0VBQXlDLFlOb1ZuQjtBUHE4QnRCO0FheHhDQTs7RUFDZ0MsWU4wU25CO0FQay9CYjtBYTN4Q0E7RUFBMEMsWU4wR25CO0FQcXJDdkI7QWE5eENBO0VBQTBDLFlONE1uQjtBUHNsQ3ZCO0FhanlDQTtFQUFrQyxZTnNMbkI7QVArbUNmO0FhcHlDQTtFQUE0QyxZTnpMbkI7QVBpK0N6QjtBYXZ5Q0E7RUFBc0MsWU5vV25CO0FQdThCbkI7QWExeUNBO0VBQW1DLFlOOERuQjtBUGd2Q2hCO0FhN3lDQTs7O0VBRXVDLFlOOFNuQjtBUG1nQ3BCO0FhaHpDQTs7RUFDMkMsWU4xRm5CO0FQODRDeEI7QWFuekNBO0VBQWtDLFlOc1duQjtBUGk5QmY7QWF0ekNBO0VBQW1DLFlObEduQjtBUDQ1Q2hCO0FhenpDQTtFQUFtQyxZTmdIbkI7QVA2c0NoQjtBYTV6Q0E7RUFBMEMsWU5pSG5CO0FQK3NDdkI7QWEvekNBO0VBQStDLFlOeU5uQjtBUDBtQzVCO0FhbDBDQTtFQUF3QyxZTnVObkI7QVArbUNyQjtBYXIwQ0E7RUFBc0MsWU4vTm5CO0FQd2lEbkI7QWF4MENBO0VBQWlDLFlONU5uQjtBUHdpRGQ7QWEzMENBO0VBQTBDLFlOMkVuQjtBUG93Q3ZCO0FhOTBDQTtFQUEyQyxZTnlFbkI7QVB5d0N4QjtBYWoxQ0E7RUFBbUMsWU52Tm5CO0FQNGlEaEI7QWFwMUNBO0VBQW1DLFlOekNuQjtBUGk0Q2hCO0FhdjFDQTtFQUFxQyxZTnBDbkI7QVArM0NsQjtBYTExQ0E7RUFBZ0MsWU50TG5CO0FQb2hEYjtBYTcxQ0E7RUFBcUMsWU43VW5CO0FQOHFEbEI7QWFoMkNBO0VBQWtDLFlOMVJuQjtBUDhuRGY7QWFuMkNBO0VBQWdDLFlOc0RuQjtBUGl6Q2I7QWF0MkNBO0VBQWtDLFlObUxuQjtBUHVyQ2Y7QWF6MkNBO0VBQWlDLFlOclBuQjtBUGttRGQ7QWE1MkNBO0VBQWtDLFlOclBuQjtBUHFtRGY7QWEvMkNBO0VBQW9DLFlON1duQjtBUGd1RGpCO0FhbDNDQTtFQUEyQyxZTjdXbkI7QVBtdUR4QjtBYXIzQ0E7RUFBa0MsWU4wTG5CO0FQK3JDZjtBYXgzQ0E7RUFBeUMsWU4wTG5CO0FQa3NDdEI7QWEzM0NBO0VBQW9DLFlOeUZuQjtBUHN5Q2pCO0FhOTNDQTs7RUFDZ0MsWU56VW5CO0FQMnNEYjtBYWo0Q0E7O0VBQ2lDLFlOK01uQjtBUHNyQ2Q7QWFwNENBO0VBQWlDLFlONFBuQjtBUDRvQ2Q7QWF2NENBO0VBQW9DLFlOdUtuQjtBUG91Q2pCO0FhMTRDQTtFQUF1QyxZTnRQbkI7QVBvb0RwQjtBYTc0Q0E7RUFBdUMsWU5pS25CO0FQZ3ZDcEI7QWFoNUNBO0VBQXFDLFlOOVBuQjtBUGtwRGxCO0FhbjVDQTtFQUF1QyxZTi9MbkI7QVBzbERwQjtBYXQ1Q0E7RUFBd0MsWU54TG5CO0FQa2xEckI7QWF6NUNBO0VBQXlDLFlOck1uQjtBUGttRHRCO0FhNTVDQTtFQUE4QyxZTi9MbkI7QVArbEQzQjtBYS81Q0E7OztFQUV5QyxZTnhNbkI7QVAybUR0QjtBYWw2Q0E7O0VBQzJDLFlOOU1uQjtBUG9uRHhCO0FhcjZDQTs7RUFDeUMsWU4vTW5CO0FQd25EdEI7QWF4NkNBOztFQUN5QyxZTnBNbkI7QVBnbkR0QjtBYTM2Q0E7RUFBd0MsWU5qTm5CO0FQZ29EckI7QWE5NkNBO0VBQWlDLFlOdVJuQjtBUDJwQ2Q7QWFqN0NBO0VBQW9DLFlONVNuQjtBUGl1RGpCO0FhcDdDQTtFQUFxQyxZTjlFbkI7QVBzZ0RsQjtBYXY3Q0E7Ozs7O0VBSXNDLFlObkVuQjtBUDgvQ25CO0FhMTdDQTtFQUEyQyxZTi9UbkI7QVA2dkR4QjtBYTc3Q0E7OztFQUVrQyxZTnFEbkI7QVA0NENmO0FhaDhDQTs7RUFDbUMsWU5uUW5CO0FQdXNEaEI7QWFuOENBO0VBQXVDLFlOektuQjtBUGduRHBCO0FhdDhDQTtFQUFnQyxZTjNLbkI7QVBxbkRiO0FhejhDQTs7O0VBRXdDLFlOeEpuQjtBUHFtRHJCO0FhNThDQTtFQUEwQyxZTjJLbkI7QVBxeUN2QjtBYS84Q0E7RUFBK0IsWU5pQ25CO0FQazdDWjtBYWw5Q0E7O0VBQ21DLFlOMFFuQjtBUDRzQ2hCO0FhcjlDQTs7RUFDd0MsWU5WbkI7QVBtK0NyQjtBYXg5Q0E7O0VBQzBDLFlOWG5CO0FQdStDdkI7QWEzOUNBO0VBQW9DLFlOMUluQjtBUHltRGpCO0FhOTlDQTtFQUF3QyxZTmxWbkI7QVBvekRyQjtBYWorQ0E7RUFBbUMsWU5qSm5CO0FQc25EaEI7QWFwK0NBO0VBQXNDLFlOYm5CO0FQcS9DbkI7QWF2K0NBO0VBQW9DLFlOK0ZuQjtBUDQ0Q2pCO0FhMStDQTtFQUFzQyxZTnVFbkI7QVB1NkNuQjtBYTcrQ0E7RUFBNkMsWU51RW5CO0FQMDZDMUI7QWFoL0NBO0VBQWlDLFlOelpuQjtBUDY0RGQ7QWFuL0NBOztFQUNxQyxZTjVNbkI7QVBtc0RsQjtBYXQvQ0E7RUFBZ0MsWU4wTW5CO0FQZ3pDYjtBYXovQ0E7RUFBdUMsWU54YW5CO0FQcTZEcEI7QWE1L0NBO0VBQWlDLFlOSW5CO0FQNC9DZDtBYS8vQ0E7RUFBdUMsWU51Rm5CO0FQNDZDcEI7QWFsZ0RBO0VBQW1DLFlOMk1uQjtBUDJ6Q2hCO0FhcmdEQTtFQUFpQyxZTitRbkI7QVAwdkNkO0FheGdEQTtFQUF3QyxZTnpDbkI7QVBxakRyQjtBYTNnREE7RUFBaUMsWU53UG5CO0FQdXhDZDtBYTlnREE7RUFBdUMsWU5yWm5CO0FQdTZEcEI7QWFqaERBO0VBQW1DLFlOdkJuQjtBUDRpRGhCO0FhcGhEQTtFQUEwQyxZTjNMbkI7QVBtdER2QjtBYXZoREE7RUFBb0MsWU41WG5CO0FQdTVEakI7QWExaERBO0VBQTBDLFlOaFluQjtBUDg1RHZCO0FhN2hEQTtFQUF3QyxZTm5ZbkI7QVBvNkRyQjtBYWhpREE7RUFBb0MsWU50WW5CO0FQMDZEakI7QWFuaURBO0VBQXNDLFlObFluQjtBUHk2RG5CO0FhdGlEQTtFQUFzQyxZTmxZbkI7QVA0NkRuQjtBYXppREE7RUFBdUMsWU4zYm5CO0FQdytEcEI7QWE1aURBO0VBQXlDLFlOM2JuQjtBUDIrRHRCO0FhL2lEQTtFQUFrQyxZTitLbkI7QVBvNENmO0FhbGpEQTtFQUFzQyxZTm5WbkI7QVB5NERuQjtBYXJqREE7RUFBK0IsWU45ZG5CO0FQdWhFWjtBYXhqREE7RUFBdUMsWU41Um5CO0FQdzFEcEI7QWEzakRBO0VBQXdDLFlOL0NuQjtBUDhtRHJCO0FhOWpEQTtFQUEwQyxZTjlibkI7QVBnZ0V2QjtBYWprREE7RUFBdUMsWU50Zm5CO0FQMmpFcEI7QWFwa0RBO0VBQXNDLFlOL0JuQjtBUHVtRG5CO0FhdmtEQTtFQUF1QyxZTnpIbkI7QVBvc0RwQjtBYTFrREE7RUFBbUMsWU52SW5CO0FQcXREaEI7QWE3a0RBO0VBQTBDLFlOdkluQjtBUHd0RHZCO0FhaGxEQTtFQUF1QyxZTjRKbkI7QVB3N0NwQjtBYW5sREE7RUFBc0MsWU40Sm5CO0FQMjdDbkI7QWF0bERBO0VBQW9DLFlOeGNuQjtBUGtpRWpCO0FhemxEQTtFQUFnQyxZTmpibkI7QVA4Z0ViO0FhNWxEQTtFQUFvQyxZTnZKbkI7QVB1dkRqQjtBYS9sREE7RUFBc0MsWU4zZ0JuQjtBUDhtRW5CO0FhbG1EQTtFQUErQixZTjdabkI7QVBtZ0VaO0Fhcm1EQTs7O0VBRWdDLFlOektuQjtBUGt4RGI7QWF4bURBO0VBQXFDLFlOcEduQjtBUGd0RGxCO0FhM21EQTtFQUF1QyxZTnhibkI7QVB1aUVwQjtBYTltREE7RUFBMkMsWU41V25CO0FQODlEeEI7QWFqbkRBO0VBQXFDLFlOOVZuQjtBUG05RGxCO0FhcG5EQTtFQUFxQyxZTjlQbkI7QVBzM0RsQjtBYXZuREE7RUFBb0MsWU5ySm5CO0FQZ3hEakI7QWExbkRBO0VBQW1DLFlOZW5CO0FQK21EaEI7QWE3bkRBO0VBQXlDLFlOMkJuQjtBUHNtRHRCO0FhaG9EQTtFQUF3QyxZTm9DbkI7QVBnbURyQjtBYW5vREE7RUFBcUMsWU5xQ25CO0FQa21EbEI7QWF0b0RBO0VBQXNDLFlONWFuQjtBUHNqRW5CO0Fhem9EQTtFQUE0QyxZTjlhbkI7QVAyakV6QjtBYTVvREE7RUFBb0MsWU4vVm5CO0FQKytEakI7QWEvb0RBO0VBQWlDLFlOb0JuQjtBUCtuRGQ7QWFscERBO0VBQXdDLFlOOEtuQjtBUHcrQ3JCO0FhcnBEQTtFQUF1QyxZTi9GbkI7QVB3dkRwQjtBYXhwREE7RUFBd0MsWU42RW5CO0FQK2tEckI7QWEzcERBO0VBQXNDLFlOOU1uQjtBUDYyRG5CO0FhOXBEQTtFQUFrQyxZTitLbkI7QVBtL0NmO0FhanFEQTtFQUFpQyxZTjdIbkI7QVBreURkO0FhcHFEQTtFQUFvQyxZTm5IbkI7QVAyeERqQjtBYXZxREE7O0VBQ3dDLFlOa0luQjtBUHlpRHJCO0FhMXFEQTtFQUE0QyxZTmtJbkI7QVA0aUR6QjtBYTdxREE7RUFBeUMsWU4wS25CO0FQdWdEdEI7QWFockRBO0VBQXdDLFlObEluQjtBUHN6RHJCO0FhbnJEQTtFQUF1QyxZTnlLbkI7QVA4Z0RwQjtBYXRyREE7RUFBd0MsWU5uSW5CO0FQNnpEckI7QWF6ckRBO0VBQTBDLFlObEluQjtBUCt6RHZCO0FhNXJEQTtFQUEwQyxZTnBJbkI7QVBvMER2QjtBYS9yREE7RUFBbUMsWU4xR25CO0FQNnlEaEI7QWFsc0RBO0VBQXVDLFlON1FuQjtBUG05RHBCO0FhcnNEQTtFQUE4QyxZTjFVbkI7QVBtaEUzQjtBYXhzREE7RUFBd0MsWU56RW5CO0FQcXhEckI7QWEzc0RBO0VBQXFDLFlOa0xuQjtBUDZoRGxCO0FhOXNEQTtFQUFtQyxZTlhuQjtBUDZ0RGhCO0FhanREQTtFQUFzQyxZTnVKbkI7QVA4akRuQjtBYXB0REE7RUFBdUMsWU53Sm5CO0FQZ2tEcEI7QWF2dERBOztFQUNnQyxZTi9mbkI7QVAwdEViO0FhMXREQTtFQUFvQyxZTjRKbkI7QVBra0RqQjtBYTd0REE7RUFBa0MsWU44R25CO0FQbW5EZjtBYWh1REE7RUFBbUMsWU53RG5CO0FQNHFEaEI7QWFudURBO0VBQW1DLFlOOUluQjtBUHEzRGhCO0FhdHVEQTs7RUFDeUMsWU4wTG5CO0FQZ2pEdEI7QWF6dURBO0VBQTBDLFlOakhuQjtBUDgxRHZCO0FhNXVEQTtFQUFxQyxZTnJIbkI7QVBxMkRsQjtBYS91REE7RUFBeUMsWU5uV25CO0FQc2xFdEI7QWFsdkRBOzs7RUFFeUMsWU4vZ0JuQjtBUHF3RXRCO0FhcnZEQTs7RUFDbUQsWU45Z0JuQjtBUHV3RWhDO0FheHZEQTs7RUFDeUMsWU5saEJuQjtBUDh3RXRCO0FhM3ZEQTs7RUFDNEMsWU5uaEJuQjtBUGt4RXpCO0FhOXZEQTs7RUFDMEMsWU54aEJuQjtBUDB4RXZCO0FhandEQTtFQUEwQyxZTjNJbkI7QVBnNUR2QjtBYXB3REE7RUFBcUMsWU4zT25CO0FQbS9EbEI7QWF2d0RBO0VBQXlDLFlOeEluQjtBUG01RHRCO0FhMXdEQTtFQUEyQyxZTnhJbkI7QVBzNUR4QjtBYTd3REE7RUFBd0MsWU53Qm5CO0FQeXZEckI7QWFoeERBO0VBQTBDLFlOd0JuQjtBUDR2RHZCO0FhbnhEQTtFQUFtQyxZTi9kbkI7QVBzdkVoQjtBYXR4REE7RUFBMkMsWU5sZW5CO0FQNHZFeEI7QWF6eERBO0VBQWtDLFlOcGNuQjtBUGl1RWY7QWE1eERBO0VBQTBDLFlObGpCbkI7QVBrMUV2QjtBYS94REE7RUFBd0MsWU54UG5CO0FQMmhFckI7QWFseURBOztFQUM0QyxZTnpQbkI7QVAraEV6QjtBYXJ5REE7O0VBQzJDLFlON1BuQjtBUHNpRXhCO0FheHlEQTs7RUFDMEMsWU5oUW5CO0FQNGlFdkI7QWEzeURBO0VBQXNDLFlOclFuQjtBUG9qRW5CO0FhOXlEQTs7RUFDd0MsWU54Um5CO0FQMGtFckI7QWFqekRBOztFQUN5QyxZTjdSbkI7QVBrbEV0QjtBYXB6REE7RUFBNEMsWU4xUm5CO0FQa2xFekI7QWF2ekRBO0VBQTBDLFlOcFNuQjtBUCtsRXZCO0FhMXpEQTtFQUF5QyxZTjNSbkI7QVB5bEV0QjtBYTd6REE7RUFBMkMsWU4vUm5CO0FQZ21FeEI7QWFoMERBO0VBQXlDLFlOalNuQjtBUHFtRXRCO0FhbjBEQTtFQUFzQyxZTitEbkI7QVB3d0RuQjtBYXQwREE7RUFBdUMsWU4vRm5CO0FQeTZEcEI7QWF6MERBO0VBQTZDLFlOL2JuQjtBUDR3RTFCO0FhNTBEQTtFQUErQixZTnRVbkI7QVBzcEVaO0FhLzBEQTtFQUFzQyxZTnRVbkI7QVB5cEVuQjtBYWwxREE7RUFBd0MsWU5rRW5CO0FQb3hEckI7QWFyMURBO0VBQTBDLFlOcktuQjtBUDgvRHZCO0FheDFEQTtFQUFpRCxZTnJLbkI7QVBpZ0U5QjtBYTMxREE7RUFBdUMsWU41VW5CO0FQMnFFcEI7QWE5MURBO0VBQXdDLFlOd0huQjtBUDB1RHJCO0FhajJEQTtFQUFtQyxZTm5GbkI7QVB3N0RoQjtBYXAyREE7RUFBbUMsWU56ZW5CO0FQaTFFaEI7QWF2MkRBO0VBQW9DLFlOOVduQjtBUHl0RWpCO0FhMTJEQTtFQUFrQyxZTnhLbkI7QVBzaEVmO0FhNzJEQTtFQUE4QyxZTnBRbkI7QVBxbkUzQjtBYWgzREE7O0VBQ3VDLFlOU25CO0FQMjJEcEI7QWFuM0RBO0VBQW1DLFlOamRuQjtBUHcwRWhCO0FhdDNEQTtFQUFrQyxZTnpvQm5CO0FQbWdGZjtBYXozREE7RUFBbUMsWU4vbkJuQjtBUDQvRWhCO0FhNTNEQTtFQUE0QyxZTjNoQm5CO0FQMjVFekI7QWEvM0RBO0VBQTZDLFlOOWhCbkI7QVBpNkUxQjtBYWw0REE7RUFBNkMsWU41aEJuQjtBUGs2RTFCO0FhcjREQTtFQUE2QyxZTmppQm5CO0FQMDZFMUI7QWF4NERBO0VBQXFDLFlOcFJuQjtBUGdxRWxCO0FhMzREQTtFQUFvQyxZTjVObkI7QVAybUVqQjtBYTk0REE7RUFBc0MsWU41Tm5CO0FQOG1FbkI7QWFqNURBO0VBQWtDLFlOL05uQjtBUG9uRWY7QWFwNURBO0VBQWdDLFlObE9uQjtBUDBuRWI7QWF2NURBO0VBQXVDLFlOcGVuQjtBUCszRXBCO0FhMTVEQTtFQUF5QyxZTnBlbkI7QVBrNEV0QjtBYTc1REE7RUFBa0MsWU50U25CO0FQdXNFZjtBYWg2REE7RUFBa0MsWU5pRm5CO0FQbTFEZjtBYW42REE7RUFBc0MsWU5sa0JuQjtBUHkrRW5CO0FhdDZEQTtFQUFzQyxZTnJYbkI7QVAreEVuQjtBYXo2REE7RUFBeUMsWU5wSW5CO0FQaWpFdEI7QWE1NkRBO0VBQWlDLFlOcGNuQjtBUG8zRWQ7QWEvNkRBO0VBQTRDLFlOaGVuQjtBUG01RXpCO0FhbDdEQTtFQUFxQyxZTnBmbkI7QVAwNkVsQjtBYXI3REE7RUFBaUMsWU5sTm5CO0FQMm9FZDtBYXg3REE7RUFBeUMsWU4xWG5CO0FQc3pFdEI7QWEzN0RBO0VBQWdDLFlOb0RuQjtBUDI0RGI7QWE5N0RBO0VBQXlDLFlOM0puQjtBUDZsRXRCO0FhajhEQTtFQUFxQyxZTnpObkI7QVA4cEVsQjtBYXA4REE7RUFBbUMsWU5sSG5CO0FQMGpFaEI7QWF2OERBO0VBQXlDLFlON0xuQjtBUHdvRXRCO0FhMThEQTtFQUEyQyxZTjdMbkI7QVAyb0V4QjtBYTc4REE7RUFBd0MsWU4zQ25CO0FQNC9EckI7QWFoOURBO0VBQTBDLFlOM0NuQjtBUCsvRHZCO0FhbjlEQTtFQUF5QyxZTnJHbkI7QVA0akV0QjtBYXQ5REE7RUFBNEMsWU5yR25CO0FQK2pFekI7QWF6OURBO0VBQW9DLFlON1VuQjtBUDB5RWpCO0FhNTlEQTtFQUFzQyxZTm5sQm5CO0FQbWpGbkI7QWEvOURBO0VBQXdDLFlObmxCbkI7QVBzakZyQjtBYWwrREE7RUFBb0MsWU4vTG5CO0FQcXFFakI7QWFyK0RBO0VBQW1DLFlObFhuQjtBUDIxRWhCO0FheCtEQTtFQUF1QyxZTmtGbkI7QVAwNURwQjtBYTMrREE7RUFBb0MsWU5tRm5CO0FQNDVEakI7QWE5K0RBO0VBQW1DLFlOOWNuQjtBUGc4RWhCO0Fhai9EQTtFQUE2QyxZTjJCbkI7QVAwOUQxQjtBYXAvREE7RUFBMkMsWU5tRW5CO0FQcTdEeEI7QWF2L0RBO0VBQThDLFlOeEtuQjtBUG1xRTNCO0FhMS9EQTtFQUFrQyxZTjlsQm5CO0FQNGxGZjtBYTcvREE7RUFBOEMsWU50b0JuQjtBUHVvRjNCO0FhaGdFQTtFQUFpRCxZTnFEbkI7QVArOEQ5QjtBYW5nRUE7RUFBb0MsWU54bEJuQjtBUCtsRmpCO0FhdGdFQTtFQUF3RCxZTjVvQm5CO0FQc3BGckM7QWF6Z0VBOztFQUNnRSxZTjlxQm5CO0FQMnJGN0M7QWE1Z0VBOzs7RUFFaUMsWU52Zm5CO0FQdWdGZDtBYS9nRUE7RUFBa0MsWU5oWW5CO0FQbTVFZjtBYWxoRUE7RUFBb0MsWU5oWW5CO0FQczVFakI7QWFyaEVBOztFQUMwQyxZTjFIbkI7QVBtcEV2QjtBYXhoRUE7RUFBdUMsWU56Um5CO0FQcXpFcEI7QWEzaEVBO0VBQW1DLFlOaUNuQjtBUDgvRGhCO0FhOWhFQTtFQUEwQyxZTmlDbkI7QVBpZ0V2QjtBYWppRUE7RUFBcUMsWU5sSG5CO0FQdXBFbEI7QWFwaUVBO0VBQTJDLFlObEhuQjtBUDBwRXhCO0FhdmlFQTtFQUE0QyxZTmxIbkI7QVA2cEV6QjtBYTFpRUE7RUFBdUMsWU5yTm5CO0FQbXdFcEI7QWE3aUVBO0VBQXdDLFlOcGJuQjtBUHErRXJCO0FhaGpFQTtFQUFrQyxZTm1FbkI7QVBpL0RmO0FhbmpFQTtFQUFzQyxZTnBEbkI7QVAybUVuQjtBYXRqRUE7O0VBQ2lELFlOelluQjtBUG04RTlCO0FhempFQTs7RUFDeUMsWU43YW5CO0FQMCtFdEI7QWE1akVBO0VBQXdDLFlOdFhuQjtBUHM3RXJCO0FhL2pFQTtFQUEwQyxZTmxmbkI7QVBxakZ2QjtBYWxrRUE7RUFBNEMsWU5sZm5CO0FQd2pGekI7QWFya0VBO0VBQW1DLFlOdFRuQjtBUCszRWhCO0FheGtFQTtFQUF5QyxZTnB0Qm5CO0FQZ3lGdEI7QWEza0VBO0VBQTJDLFlOcHRCbkI7QVBteUZ4QjtBYTlrRUE7O0VBQ3lDLFlOcnRCbkI7QVB1eUZ0QjtBYWpsRUE7O0VBQzJDLFlOdHRCbkI7QVAyeUZ4QjtBYXBsRUE7RUFBd0MsWU5KbkI7QVA0bEVyQjtBYXZsRUE7RUFBMEMsWU5KbkI7QVArbEV2QjtBYTFsRUE7RUFBbUMsWU5IbkI7QVBpbUVoQjtBYTdsRUE7RUFBcUMsWU4zV25CO0FQNDhFbEI7QWFobUVBOztFQUNvQyxZTjVXbkI7QVBnOUVqQjtBYW5tRUE7O0VBQ3NDLFlON1duQjtBUG85RW5CO0FhdG1FQTtFQUFrQyxZTnRObkI7QVBnMEVmO0Fhem1FQTtFQUEyQyxZTjNibkI7QVB3aUZ4QjtBYTVtRUE7RUFBcUMsWU50Rm5CO0FQc3NFbEI7QWEvbUVBOzs7RUFFNkMsWU54RW5CO0FQMnJFMUI7QWFsbkVBOztFQUN1RCxZTnZFbkI7QVA2ckVwQztBYXJuRUE7O0VBQzZDLFlOM0VuQjtBUG9zRTFCO0FheG5FQTs7RUFDZ0QsWU41RW5CO0FQd3NFN0I7QWEzbkVBOztFQUM4QyxZTmpGbkI7QVBndEUzQjtBYTluRUE7RUFBbUMsWU4zS25CO0FQNnlFaEI7QWFqb0VBOzs7RUFFaUMsWU56ckJuQjtBUDh6RmQ7QWFwb0VBO0VBQW9DLFlObFBuQjtBUDAzRWpCO0Fhdm9FQTtFQUE0QyxZTktuQjtBUHNvRXpCO0FhMW9FQTtFQUE0QyxZTktuQjtBUHlvRXpCO0FhN29FQTtFQUEyQyxZTktuQjtBUDRvRXhCO0FhaHBFQTs7RUFDeUMsWU5EbkI7QVBxcEV0QjtBYW5wRUE7O0VBQzJDLFlORm5CO0FQeXBFeEI7QWF0cEVBO0VBQXFDLFlOeHNCbkI7QVBrMkZsQjtBYXpwRUE7RUFBaUMsWU5wYm5CO0FQaWxGZDtBYTVwRUE7RUFBaUMsWU4xaEJuQjtBUDByRmQ7QWEvcEVBO0VBQWlDLFlOeFluQjtBUDJpRmQ7QWFscUVBO0VBQW9DLFlOL09uQjtBUHE1RWpCO0FhcnFFQTtFQUFvQyxZTnppQm5CO0FQa3RGakI7QWF4cUVBO0VBQXNDLFlOalVuQjtBUDYrRW5CO0FhM3FFQTtFQUF3QyxZTjdLbkI7QVA0MUVyQjtBYTlxRUE7RUFBd0MsWU5oSW5CO0FQa3pFckI7QWFqckVBO0VBQXVDLFlOSm5CO0FQeXJFcEI7QWFwckVBO0VBQW1DLFlOeFVuQjtBUGdnRmhCO0FjejhGQTtFSDhCRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBWCs2RkY7QVdyNkZFO0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QVh1NkZKO0FlNzlGQTtFQUNFLGVBQUE7QWZnK0ZGO0FlNzlGQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBZmcrRkY7QWUvOUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FmaStGSjtBZTc5RkE7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QWZnK0ZGO0FlOTlGRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FmZytGSjtBZS85Rkk7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QWZpK0ZOO0FlbjlGTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FmcTlGUjtBZWw5Rk07RUFFRSxVQUFBO0FmbTlGUjtBZWg5Rk07RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QWZrOUZSO0FlaDlGUTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QWZrOUZWO0FlLzhGWTtFQUNFLG1CQUFBO0FmaTlGZDtBZTc4RlU7RUFDRSxtQkFBQTtBZis4Rlo7QWUxOEZNO0VBQ0UsbUJBQUE7QWY0OEZSO0FlMThGUTtFQUNFLHlCQUFBO0FmNDhGVjtBZXY4Rkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FmeThGTjtBZXQ4Rkk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QWZ3OEZOO0FldjhGTTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7RWV2OEZNO0lBQ0UsZUFBQTtFZnk4RlI7QUFDRjtBZXQ4Rk07RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QWZ3OEZSO0FlcjhGTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FmdThGUjtBZW44Rkk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QWZxOEZOO0FlcDhGTTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtFZnM4RlI7RWVwOEZNO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFZnM4RlI7QUFDRjtBZW44Rk07RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QWZxOEZSO0FlbDhGTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FmbzhGUjtBZWg4Rkk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QWZrOEZOO0FlajhGTTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7RWVqOEZNO0lBQ0UsZUFBQTtFZm04RlI7QUFDRjtBZWg4Rk07RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QWZrOEZSO0FlLzdGTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FmaThGUjtBZTc3Rkk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QWYrN0ZOO0FlOTdGTTtFQUhGO0lBYUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7RWY0OEZOO0VlcjlGTTtJQUNFLGVBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7RWZ1OUZSO0VlcjlGTTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7RWZ1OUZSO0FBQ0Y7QWUvN0ZNO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FmaThGUjtBZTk3Rk07RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBZmc4RlI7QWU1N0ZJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FmODdGTjtBZTM3Rkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QWY2N0ZOO0FlejdGTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBZjI3RlI7QWV2N0ZFO0VBQ0UscUJBQUE7QWZ5N0ZKO0FBcnZHQTtFQUNFLGtCQUFBO0FBd3ZHRjtBQXR2R0U7RUFDRSwwQkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0FBdXZHSjtBQXB2R0U7RUFDRSxrQkFBQTtBQXN2R0o7QUFwdkdJO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUFxdkdOO0FBOXVHTTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQWd2R1I7QUE1dUdJO0VBQ0UsZ0JBQUE7QUE4dUdOO0FBM3VHSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0FBNHVHTjtBQXh1R007RUFDRSxjQUFBO0FBMHVHUjtBQXZ1R0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQXl1R04iLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVcIjtcblxuLmFuZ3VsYXItZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIDo6bmctZGVlcCBbY29udGVudGVkaXRhYmxlPXRydWVdOmVtcHR5OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7IC8vIGZvciBmaXJlZm94XG4gICAgY29sb3I6ICM4NjhlOTY7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xuICAgICAgbWluLWhlaWdodDogNXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW0gMXJlbSAwLjhyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgLy8gei1pbmRleDogMjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgJjpmb2N1cyxcbiAgICAgICYuZm9jdXMge1xuICAgICAgIC8vIG91dGxpbmU6IDA7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCBibG9ja3F1b3RlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwLjJlbSBzb2xpZCAjZGZlMmU1O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5hbmd1bGFyLWVkaXRvci1wbGFjZWhvbGRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAxcmVtIDAuOXJlbTtcbiAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgJi5zaG93LXBsYWNlaG9sZGVyIHtcbiAgICAgIC5hbmd1bGFyLWVkaXRvci1wbGFjZWhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIVxuICogIEZvbnQgQXdlc29tZSA0LjcuMCBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcbiAqL1xuXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwicGF0aFwiO1xuQGltcG9ydCBcImNvcmVcIjtcbkBpbXBvcnQgXCJsYXJnZXJcIjtcbkBpbXBvcnQgXCJmaXhlZC13aWR0aFwiO1xuQGltcG9ydCBcImxpc3RcIjtcbkBpbXBvcnQgXCJib3JkZXJlZC1wdWxsZWRcIjtcbkBpbXBvcnQgXCJhbmltYXRlZFwiO1xuQGltcG9ydCBcInJvdGF0ZWQtZmxpcHBlZFwiO1xuQGltcG9ydCBcInN0YWNrZWRcIjtcbkBpbXBvcnQgXCJpY29uc1wiO1xuQGltcG9ydCBcInNjcmVlbi1yZWFkZXJcIjtcbiIsIi8qIEZPTlQgUEFUSFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICBzcmM6IHVybCgnI3skZmEtZm9udC1wYXRofS9mb250YXdlc29tZS13ZWJmb250LmVvdD92PSN7JGZhLXZlcnNpb259Jyk7XG4gIHNyYzogdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PSN7JGZhLXZlcnNpb259JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgIHVybCgnI3skZmEtZm9udC1wYXRofS9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PSN7JGZhLXZlcnNpb259JykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9I3skZmEtdmVyc2lvbn0jZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbi8vICBzcmM6IHVybCgnI3skZmEtZm9udC1wYXRofS9Gb250QXdlc29tZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7IC8vIHVzZWQgd2hlbiBkZXZlbG9waW5nIGZvbnRzXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIi8vIEJhc2UgQ2xhc3MgRGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cbiIsIi8vIEljb24gU2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cbi4jeyRmYS1jc3MtcHJlZml4fS1sZyB7XG4gIGZvbnQtc2l6ZTogKDRlbSAvIDMpO1xuICBsaW5lLWhlaWdodDogKDNlbSAvIDQpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcbn1cbi4jeyRmYS1jc3MtcHJlZml4fS0yeCB7IGZvbnQtc2l6ZTogMmVtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tM3ggeyBmb250LXNpemU6IDNlbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTR4IHsgZm9udC1zaXplOiA0ZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS01eCB7IGZvbnQtc2l6ZTogNWVtOyB9XG4iLCIvLyBGaXhlZCBXaWR0aCBJY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZ3IHtcbiAgd2lkdGg6ICgxOGVtIC8gMTQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIvLyBMaXN0IEljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi4jeyRmYS1jc3MtcHJlZml4fS11bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6ICRmYS1saS13aWR0aDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICA+IGxpIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG59XG4uI3skZmEtY3NzLXByZWZpeH0tbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0kZmEtbGktd2lkdGg7XG4gIHdpZHRoOiAkZmEtbGktd2lkdGg7XG4gIHRvcDogKDJlbSAvIDE0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLiN7JGZhLWNzcy1wcmVmaXh9LWxnIHtcbiAgICBsZWZ0OiAtJGZhLWxpLXdpZHRoICsgKDRlbSAvIDE0KTtcbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kZmEtZm9udC1wYXRoOiAgICAgICAgXCIuLi9mb250c1wiICFkZWZhdWx0O1xuJGZhLWZvbnQtc2l6ZS1iYXNlOiAgIDE0cHggIWRlZmF1bHQ7XG4kZmEtbGluZS1oZWlnaHQtYmFzZTogMSAhZGVmYXVsdDtcbi8vJGZhLWZvbnQtcGF0aDogICAgICAgIFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHNcIiAhZGVmYXVsdDsgLy8gZm9yIHJlZmVyZW5jaW5nIEJvb3RzdHJhcCBDRE4gZm9udCBmaWxlcyBkaXJlY3RseVxuJGZhLWNzcy1wcmVmaXg6ICAgICAgIGZhICFkZWZhdWx0O1xuJGZhLXZlcnNpb246ICAgICAgICAgIFwiNC43LjBcIiAhZGVmYXVsdDtcbiRmYS1ib3JkZXItY29sb3I6ICAgICAjZWVlICFkZWZhdWx0O1xuJGZhLWludmVyc2U6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kZmEtbGktd2lkdGg6ICAgICAgICAgKDMwZW0gLyAxNCkgIWRlZmF1bHQ7XG5cbiRmYS12YXItNTAwcHg6IFwiXFxmMjZlXCI7XG4kZmEtdmFyLWFkZHJlc3MtYm9vazogXCJcXGYyYjlcIjtcbiRmYS12YXItYWRkcmVzcy1ib29rLW86IFwiXFxmMmJhXCI7XG4kZmEtdmFyLWFkZHJlc3MtY2FyZDogXCJcXGYyYmJcIjtcbiRmYS12YXItYWRkcmVzcy1jYXJkLW86IFwiXFxmMmJjXCI7XG4kZmEtdmFyLWFkanVzdDogXCJcXGYwNDJcIjtcbiRmYS12YXItYWRuOiBcIlxcZjE3MFwiO1xuJGZhLXZhci1hbGlnbi1jZW50ZXI6IFwiXFxmMDM3XCI7XG4kZmEtdmFyLWFsaWduLWp1c3RpZnk6IFwiXFxmMDM5XCI7XG4kZmEtdmFyLWFsaWduLWxlZnQ6IFwiXFxmMDM2XCI7XG4kZmEtdmFyLWFsaWduLXJpZ2h0OiBcIlxcZjAzOFwiO1xuJGZhLXZhci1hbWF6b246IFwiXFxmMjcwXCI7XG4kZmEtdmFyLWFtYnVsYW5jZTogXCJcXGYwZjlcIjtcbiRmYS12YXItYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6IFwiXFxmMmEzXCI7XG4kZmEtdmFyLWFuY2hvcjogXCJcXGYxM2RcIjtcbiRmYS12YXItYW5kcm9pZDogXCJcXGYxN2JcIjtcbiRmYS12YXItYW5nZWxsaXN0OiBcIlxcZjIwOVwiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtZG93bjogXCJcXGYxMDNcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLWxlZnQ6IFwiXFxmMTAwXCI7XG4kZmEtdmFyLWFuZ2xlLWRvdWJsZS1yaWdodDogXCJcXGYxMDFcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLXVwOiBcIlxcZjEwMlwiO1xuJGZhLXZhci1hbmdsZS1kb3duOiBcIlxcZjEwN1wiO1xuJGZhLXZhci1hbmdsZS1sZWZ0OiBcIlxcZjEwNFwiO1xuJGZhLXZhci1hbmdsZS1yaWdodDogXCJcXGYxMDVcIjtcbiRmYS12YXItYW5nbGUtdXA6IFwiXFxmMTA2XCI7XG4kZmEtdmFyLWFwcGxlOiBcIlxcZjE3OVwiO1xuJGZhLXZhci1hcmNoaXZlOiBcIlxcZjE4N1wiO1xuJGZhLXZhci1hcmVhLWNoYXJ0OiBcIlxcZjFmZVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtZG93bjogXCJcXGYwYWJcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLWxlZnQ6IFwiXFxmMGE4XCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLWRvd246IFwiXFxmMDFhXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLWxlZnQ6IFwiXFxmMTkwXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLXJpZ2h0OiBcIlxcZjE4ZVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtby11cDogXCJcXGYwMWJcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLXJpZ2h0OiBcIlxcZjBhOVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtdXA6IFwiXFxmMGFhXCI7XG4kZmEtdmFyLWFycm93LWRvd246IFwiXFxmMDYzXCI7XG4kZmEtdmFyLWFycm93LWxlZnQ6IFwiXFxmMDYwXCI7XG4kZmEtdmFyLWFycm93LXJpZ2h0OiBcIlxcZjA2MVwiO1xuJGZhLXZhci1hcnJvdy11cDogXCJcXGYwNjJcIjtcbiRmYS12YXItYXJyb3dzOiBcIlxcZjA0N1wiO1xuJGZhLXZhci1hcnJvd3MtYWx0OiBcIlxcZjBiMlwiO1xuJGZhLXZhci1hcnJvd3MtaDogXCJcXGYwN2VcIjtcbiRmYS12YXItYXJyb3dzLXY6IFwiXFxmMDdkXCI7XG4kZmEtdmFyLWFzbC1pbnRlcnByZXRpbmc6IFwiXFxmMmEzXCI7XG4kZmEtdmFyLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczogXCJcXGYyYTJcIjtcbiRmYS12YXItYXN0ZXJpc2s6IFwiXFxmMDY5XCI7XG4kZmEtdmFyLWF0OiBcIlxcZjFmYVwiO1xuJGZhLXZhci1hdWRpby1kZXNjcmlwdGlvbjogXCJcXGYyOWVcIjtcbiRmYS12YXItYXV0b21vYmlsZTogXCJcXGYxYjlcIjtcbiRmYS12YXItYmFja3dhcmQ6IFwiXFxmMDRhXCI7XG4kZmEtdmFyLWJhbGFuY2Utc2NhbGU6IFwiXFxmMjRlXCI7XG4kZmEtdmFyLWJhbjogXCJcXGYwNWVcIjtcbiRmYS12YXItYmFuZGNhbXA6IFwiXFxmMmQ1XCI7XG4kZmEtdmFyLWJhbms6IFwiXFxmMTljXCI7XG4kZmEtdmFyLWJhci1jaGFydDogXCJcXGYwODBcIjtcbiRmYS12YXItYmFyLWNoYXJ0LW86IFwiXFxmMDgwXCI7XG4kZmEtdmFyLWJhcmNvZGU6IFwiXFxmMDJhXCI7XG4kZmEtdmFyLWJhcnM6IFwiXFxmMGM5XCI7XG4kZmEtdmFyLWJhdGg6IFwiXFxmMmNkXCI7XG4kZmEtdmFyLWJhdGh0dWI6IFwiXFxmMmNkXCI7XG4kZmEtdmFyLWJhdHRlcnk6IFwiXFxmMjQwXCI7XG4kZmEtdmFyLWJhdHRlcnktMDogXCJcXGYyNDRcIjtcbiRmYS12YXItYmF0dGVyeS0xOiBcIlxcZjI0M1wiO1xuJGZhLXZhci1iYXR0ZXJ5LTI6IFwiXFxmMjQyXCI7XG4kZmEtdmFyLWJhdHRlcnktMzogXCJcXGYyNDFcIjtcbiRmYS12YXItYmF0dGVyeS00OiBcIlxcZjI0MFwiO1xuJGZhLXZhci1iYXR0ZXJ5LWVtcHR5OiBcIlxcZjI0NFwiO1xuJGZhLXZhci1iYXR0ZXJ5LWZ1bGw6IFwiXFxmMjQwXCI7XG4kZmEtdmFyLWJhdHRlcnktaGFsZjogXCJcXGYyNDJcIjtcbiRmYS12YXItYmF0dGVyeS1xdWFydGVyOiBcIlxcZjI0M1wiO1xuJGZhLXZhci1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOiBcIlxcZjI0MVwiO1xuJGZhLXZhci1iZWQ6IFwiXFxmMjM2XCI7XG4kZmEtdmFyLWJlZXI6IFwiXFxmMGZjXCI7XG4kZmEtdmFyLWJlaGFuY2U6IFwiXFxmMWI0XCI7XG4kZmEtdmFyLWJlaGFuY2Utc3F1YXJlOiBcIlxcZjFiNVwiO1xuJGZhLXZhci1iZWxsOiBcIlxcZjBmM1wiO1xuJGZhLXZhci1iZWxsLW86IFwiXFxmMGEyXCI7XG4kZmEtdmFyLWJlbGwtc2xhc2g6IFwiXFxmMWY2XCI7XG4kZmEtdmFyLWJlbGwtc2xhc2gtbzogXCJcXGYxZjdcIjtcbiRmYS12YXItYmljeWNsZTogXCJcXGYyMDZcIjtcbiRmYS12YXItYmlub2N1bGFyczogXCJcXGYxZTVcIjtcbiRmYS12YXItYmlydGhkYXktY2FrZTogXCJcXGYxZmRcIjtcbiRmYS12YXItYml0YnVja2V0OiBcIlxcZjE3MVwiO1xuJGZhLXZhci1iaXRidWNrZXQtc3F1YXJlOiBcIlxcZjE3MlwiO1xuJGZhLXZhci1iaXRjb2luOiBcIlxcZjE1YVwiO1xuJGZhLXZhci1ibGFjay10aWU6IFwiXFxmMjdlXCI7XG4kZmEtdmFyLWJsaW5kOiBcIlxcZjI5ZFwiO1xuJGZhLXZhci1ibHVldG9vdGg6IFwiXFxmMjkzXCI7XG4kZmEtdmFyLWJsdWV0b290aC1iOiBcIlxcZjI5NFwiO1xuJGZhLXZhci1ib2xkOiBcIlxcZjAzMlwiO1xuJGZhLXZhci1ib2x0OiBcIlxcZjBlN1wiO1xuJGZhLXZhci1ib21iOiBcIlxcZjFlMlwiO1xuJGZhLXZhci1ib29rOiBcIlxcZjAyZFwiO1xuJGZhLXZhci1ib29rbWFyazogXCJcXGYwMmVcIjtcbiRmYS12YXItYm9va21hcmstbzogXCJcXGYwOTdcIjtcbiRmYS12YXItYnJhaWxsZTogXCJcXGYyYTFcIjtcbiRmYS12YXItYnJpZWZjYXNlOiBcIlxcZjBiMVwiO1xuJGZhLXZhci1idGM6IFwiXFxmMTVhXCI7XG4kZmEtdmFyLWJ1ZzogXCJcXGYxODhcIjtcbiRmYS12YXItYnVpbGRpbmc6IFwiXFxmMWFkXCI7XG4kZmEtdmFyLWJ1aWxkaW5nLW86IFwiXFxmMGY3XCI7XG4kZmEtdmFyLWJ1bGxob3JuOiBcIlxcZjBhMVwiO1xuJGZhLXZhci1idWxsc2V5ZTogXCJcXGYxNDBcIjtcbiRmYS12YXItYnVzOiBcIlxcZjIwN1wiO1xuJGZhLXZhci1idXlzZWxsYWRzOiBcIlxcZjIwZFwiO1xuJGZhLXZhci1jYWI6IFwiXFxmMWJhXCI7XG4kZmEtdmFyLWNhbGN1bGF0b3I6IFwiXFxmMWVjXCI7XG4kZmEtdmFyLWNhbGVuZGFyOiBcIlxcZjA3M1wiO1xuJGZhLXZhci1jYWxlbmRhci1jaGVjay1vOiBcIlxcZjI3NFwiO1xuJGZhLXZhci1jYWxlbmRhci1taW51cy1vOiBcIlxcZjI3MlwiO1xuJGZhLXZhci1jYWxlbmRhci1vOiBcIlxcZjEzM1wiO1xuJGZhLXZhci1jYWxlbmRhci1wbHVzLW86IFwiXFxmMjcxXCI7XG4kZmEtdmFyLWNhbGVuZGFyLXRpbWVzLW86IFwiXFxmMjczXCI7XG4kZmEtdmFyLWNhbWVyYTogXCJcXGYwMzBcIjtcbiRmYS12YXItY2FtZXJhLXJldHJvOiBcIlxcZjA4M1wiO1xuJGZhLXZhci1jYXI6IFwiXFxmMWI5XCI7XG4kZmEtdmFyLWNhcmV0LWRvd246IFwiXFxmMGQ3XCI7XG4kZmEtdmFyLWNhcmV0LWxlZnQ6IFwiXFxmMGQ5XCI7XG4kZmEtdmFyLWNhcmV0LXJpZ2h0OiBcIlxcZjBkYVwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1kb3duOiBcIlxcZjE1MFwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1sZWZ0OiBcIlxcZjE5MVwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1yaWdodDogXCJcXGYxNTJcIjtcbiRmYS12YXItY2FyZXQtc3F1YXJlLW8tdXA6IFwiXFxmMTUxXCI7XG4kZmEtdmFyLWNhcmV0LXVwOiBcIlxcZjBkOFwiO1xuJGZhLXZhci1jYXJ0LWFycm93LWRvd246IFwiXFxmMjE4XCI7XG4kZmEtdmFyLWNhcnQtcGx1czogXCJcXGYyMTdcIjtcbiRmYS12YXItY2M6IFwiXFxmMjBhXCI7XG4kZmEtdmFyLWNjLWFtZXg6IFwiXFxmMWYzXCI7XG4kZmEtdmFyLWNjLWRpbmVycy1jbHViOiBcIlxcZjI0Y1wiO1xuJGZhLXZhci1jYy1kaXNjb3ZlcjogXCJcXGYxZjJcIjtcbiRmYS12YXItY2MtamNiOiBcIlxcZjI0YlwiO1xuJGZhLXZhci1jYy1tYXN0ZXJjYXJkOiBcIlxcZjFmMVwiO1xuJGZhLXZhci1jYy1wYXlwYWw6IFwiXFxmMWY0XCI7XG4kZmEtdmFyLWNjLXN0cmlwZTogXCJcXGYxZjVcIjtcbiRmYS12YXItY2MtdmlzYTogXCJcXGYxZjBcIjtcbiRmYS12YXItY2VydGlmaWNhdGU6IFwiXFxmMGEzXCI7XG4kZmEtdmFyLWNoYWluOiBcIlxcZjBjMVwiO1xuJGZhLXZhci1jaGFpbi1icm9rZW46IFwiXFxmMTI3XCI7XG4kZmEtdmFyLWNoZWNrOiBcIlxcZjAwY1wiO1xuJGZhLXZhci1jaGVjay1jaXJjbGU6IFwiXFxmMDU4XCI7XG4kZmEtdmFyLWNoZWNrLWNpcmNsZS1vOiBcIlxcZjA1ZFwiO1xuJGZhLXZhci1jaGVjay1zcXVhcmU6IFwiXFxmMTRhXCI7XG4kZmEtdmFyLWNoZWNrLXNxdWFyZS1vOiBcIlxcZjA0NlwiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1kb3duOiBcIlxcZjEzYVwiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1sZWZ0OiBcIlxcZjEzN1wiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1yaWdodDogXCJcXGYxMzhcIjtcbiRmYS12YXItY2hldnJvbi1jaXJjbGUtdXA6IFwiXFxmMTM5XCI7XG4kZmEtdmFyLWNoZXZyb24tZG93bjogXCJcXGYwNzhcIjtcbiRmYS12YXItY2hldnJvbi1sZWZ0OiBcIlxcZjA1M1wiO1xuJGZhLXZhci1jaGV2cm9uLXJpZ2h0OiBcIlxcZjA1NFwiO1xuJGZhLXZhci1jaGV2cm9uLXVwOiBcIlxcZjA3N1wiO1xuJGZhLXZhci1jaGlsZDogXCJcXGYxYWVcIjtcbiRmYS12YXItY2hyb21lOiBcIlxcZjI2OFwiO1xuJGZhLXZhci1jaXJjbGU6IFwiXFxmMTExXCI7XG4kZmEtdmFyLWNpcmNsZS1vOiBcIlxcZjEwY1wiO1xuJGZhLXZhci1jaXJjbGUtby1ub3RjaDogXCJcXGYxY2VcIjtcbiRmYS12YXItY2lyY2xlLXRoaW46IFwiXFxmMWRiXCI7XG4kZmEtdmFyLWNsaXBib2FyZDogXCJcXGYwZWFcIjtcbiRmYS12YXItY2xvY2stbzogXCJcXGYwMTdcIjtcbiRmYS12YXItY2xvbmU6IFwiXFxmMjRkXCI7XG4kZmEtdmFyLWNsb3NlOiBcIlxcZjAwZFwiO1xuJGZhLXZhci1jbG91ZDogXCJcXGYwYzJcIjtcbiRmYS12YXItY2xvdWQtZG93bmxvYWQ6IFwiXFxmMGVkXCI7XG4kZmEtdmFyLWNsb3VkLXVwbG9hZDogXCJcXGYwZWVcIjtcbiRmYS12YXItY255OiBcIlxcZjE1N1wiO1xuJGZhLXZhci1jb2RlOiBcIlxcZjEyMVwiO1xuJGZhLXZhci1jb2RlLWZvcms6IFwiXFxmMTI2XCI7XG4kZmEtdmFyLWNvZGVwZW46IFwiXFxmMWNiXCI7XG4kZmEtdmFyLWNvZGllcGllOiBcIlxcZjI4NFwiO1xuJGZhLXZhci1jb2ZmZWU6IFwiXFxmMGY0XCI7XG4kZmEtdmFyLWNvZzogXCJcXGYwMTNcIjtcbiRmYS12YXItY29nczogXCJcXGYwODVcIjtcbiRmYS12YXItY29sdW1uczogXCJcXGYwZGJcIjtcbiRmYS12YXItY29tbWVudDogXCJcXGYwNzVcIjtcbiRmYS12YXItY29tbWVudC1vOiBcIlxcZjBlNVwiO1xuJGZhLXZhci1jb21tZW50aW5nOiBcIlxcZjI3YVwiO1xuJGZhLXZhci1jb21tZW50aW5nLW86IFwiXFxmMjdiXCI7XG4kZmEtdmFyLWNvbW1lbnRzOiBcIlxcZjA4NlwiO1xuJGZhLXZhci1jb21tZW50cy1vOiBcIlxcZjBlNlwiO1xuJGZhLXZhci1jb21wYXNzOiBcIlxcZjE0ZVwiO1xuJGZhLXZhci1jb21wcmVzczogXCJcXGYwNjZcIjtcbiRmYS12YXItY29ubmVjdGRldmVsb3A6IFwiXFxmMjBlXCI7XG4kZmEtdmFyLWNvbnRhbzogXCJcXGYyNmRcIjtcbiRmYS12YXItY29weTogXCJcXGYwYzVcIjtcbiRmYS12YXItY29weXJpZ2h0OiBcIlxcZjFmOVwiO1xuJGZhLXZhci1jcmVhdGl2ZS1jb21tb25zOiBcIlxcZjI1ZVwiO1xuJGZhLXZhci1jcmVkaXQtY2FyZDogXCJcXGYwOWRcIjtcbiRmYS12YXItY3JlZGl0LWNhcmQtYWx0OiBcIlxcZjI4M1wiO1xuJGZhLXZhci1jcm9wOiBcIlxcZjEyNVwiO1xuJGZhLXZhci1jcm9zc2hhaXJzOiBcIlxcZjA1YlwiO1xuJGZhLXZhci1jc3MzOiBcIlxcZjEzY1wiO1xuJGZhLXZhci1jdWJlOiBcIlxcZjFiMlwiO1xuJGZhLXZhci1jdWJlczogXCJcXGYxYjNcIjtcbiRmYS12YXItY3V0OiBcIlxcZjBjNFwiO1xuJGZhLXZhci1jdXRsZXJ5OiBcIlxcZjBmNVwiO1xuJGZhLXZhci1kYXNoYm9hcmQ6IFwiXFxmMGU0XCI7XG4kZmEtdmFyLWRhc2hjdWJlOiBcIlxcZjIxMFwiO1xuJGZhLXZhci1kYXRhYmFzZTogXCJcXGYxYzBcIjtcbiRmYS12YXItZGVhZjogXCJcXGYyYTRcIjtcbiRmYS12YXItZGVhZm5lc3M6IFwiXFxmMmE0XCI7XG4kZmEtdmFyLWRlZGVudDogXCJcXGYwM2JcIjtcbiRmYS12YXItZGVsaWNpb3VzOiBcIlxcZjFhNVwiO1xuJGZhLXZhci1kZXNrdG9wOiBcIlxcZjEwOFwiO1xuJGZhLXZhci1kZXZpYW50YXJ0OiBcIlxcZjFiZFwiO1xuJGZhLXZhci1kaWFtb25kOiBcIlxcZjIxOVwiO1xuJGZhLXZhci1kaWdnOiBcIlxcZjFhNlwiO1xuJGZhLXZhci1kb2xsYXI6IFwiXFxmMTU1XCI7XG4kZmEtdmFyLWRvdC1jaXJjbGUtbzogXCJcXGYxOTJcIjtcbiRmYS12YXItZG93bmxvYWQ6IFwiXFxmMDE5XCI7XG4kZmEtdmFyLWRyaWJiYmxlOiBcIlxcZjE3ZFwiO1xuJGZhLXZhci1kcml2ZXJzLWxpY2Vuc2U6IFwiXFxmMmMyXCI7XG4kZmEtdmFyLWRyaXZlcnMtbGljZW5zZS1vOiBcIlxcZjJjM1wiO1xuJGZhLXZhci1kcm9wYm94OiBcIlxcZjE2YlwiO1xuJGZhLXZhci1kcnVwYWw6IFwiXFxmMWE5XCI7XG4kZmEtdmFyLWVkZ2U6IFwiXFxmMjgyXCI7XG4kZmEtdmFyLWVkaXQ6IFwiXFxmMDQ0XCI7XG4kZmEtdmFyLWVlcmNhc3Q6IFwiXFxmMmRhXCI7XG4kZmEtdmFyLWVqZWN0OiBcIlxcZjA1MlwiO1xuJGZhLXZhci1lbGxpcHNpcy1oOiBcIlxcZjE0MVwiO1xuJGZhLXZhci1lbGxpcHNpcy12OiBcIlxcZjE0MlwiO1xuJGZhLXZhci1lbXBpcmU6IFwiXFxmMWQxXCI7XG4kZmEtdmFyLWVudmVsb3BlOiBcIlxcZjBlMFwiO1xuJGZhLXZhci1lbnZlbG9wZS1vOiBcIlxcZjAwM1wiO1xuJGZhLXZhci1lbnZlbG9wZS1vcGVuOiBcIlxcZjJiNlwiO1xuJGZhLXZhci1lbnZlbG9wZS1vcGVuLW86IFwiXFxmMmI3XCI7XG4kZmEtdmFyLWVudmVsb3BlLXNxdWFyZTogXCJcXGYxOTlcIjtcbiRmYS12YXItZW52aXJhOiBcIlxcZjI5OVwiO1xuJGZhLXZhci1lcmFzZXI6IFwiXFxmMTJkXCI7XG4kZmEtdmFyLWV0c3k6IFwiXFxmMmQ3XCI7XG4kZmEtdmFyLWV1cjogXCJcXGYxNTNcIjtcbiRmYS12YXItZXVybzogXCJcXGYxNTNcIjtcbiRmYS12YXItZXhjaGFuZ2U6IFwiXFxmMGVjXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uOiBcIlxcZjEyYVwiO1xuJGZhLXZhci1leGNsYW1hdGlvbi1jaXJjbGU6IFwiXFxmMDZhXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOiBcIlxcZjA3MVwiO1xuJGZhLXZhci1leHBhbmQ6IFwiXFxmMDY1XCI7XG4kZmEtdmFyLWV4cGVkaXRlZHNzbDogXCJcXGYyM2VcIjtcbiRmYS12YXItZXh0ZXJuYWwtbGluazogXCJcXGYwOGVcIjtcbiRmYS12YXItZXh0ZXJuYWwtbGluay1zcXVhcmU6IFwiXFxmMTRjXCI7XG4kZmEtdmFyLWV5ZTogXCJcXGYwNmVcIjtcbiRmYS12YXItZXllLXNsYXNoOiBcIlxcZjA3MFwiO1xuJGZhLXZhci1leWVkcm9wcGVyOiBcIlxcZjFmYlwiO1xuJGZhLXZhci1mYTogXCJcXGYyYjRcIjtcbiRmYS12YXItZmFjZWJvb2s6IFwiXFxmMDlhXCI7XG4kZmEtdmFyLWZhY2Vib29rLWY6IFwiXFxmMDlhXCI7XG4kZmEtdmFyLWZhY2Vib29rLW9mZmljaWFsOiBcIlxcZjIzMFwiO1xuJGZhLXZhci1mYWNlYm9vay1zcXVhcmU6IFwiXFxmMDgyXCI7XG4kZmEtdmFyLWZhc3QtYmFja3dhcmQ6IFwiXFxmMDQ5XCI7XG4kZmEtdmFyLWZhc3QtZm9yd2FyZDogXCJcXGYwNTBcIjtcbiRmYS12YXItZmF4OiBcIlxcZjFhY1wiO1xuJGZhLXZhci1mZWVkOiBcIlxcZjA5ZVwiO1xuJGZhLXZhci1mZW1hbGU6IFwiXFxmMTgyXCI7XG4kZmEtdmFyLWZpZ2h0ZXItamV0OiBcIlxcZjBmYlwiO1xuJGZhLXZhci1maWxlOiBcIlxcZjE1YlwiO1xuJGZhLXZhci1maWxlLWFyY2hpdmUtbzogXCJcXGYxYzZcIjtcbiRmYS12YXItZmlsZS1hdWRpby1vOiBcIlxcZjFjN1wiO1xuJGZhLXZhci1maWxlLWNvZGUtbzogXCJcXGYxYzlcIjtcbiRmYS12YXItZmlsZS1leGNlbC1vOiBcIlxcZjFjM1wiO1xuJGZhLXZhci1maWxlLWltYWdlLW86IFwiXFxmMWM1XCI7XG4kZmEtdmFyLWZpbGUtbW92aWUtbzogXCJcXGYxYzhcIjtcbiRmYS12YXItZmlsZS1vOiBcIlxcZjAxNlwiO1xuJGZhLXZhci1maWxlLXBkZi1vOiBcIlxcZjFjMVwiO1xuJGZhLXZhci1maWxlLXBob3RvLW86IFwiXFxmMWM1XCI7XG4kZmEtdmFyLWZpbGUtcGljdHVyZS1vOiBcIlxcZjFjNVwiO1xuJGZhLXZhci1maWxlLXBvd2VycG9pbnQtbzogXCJcXGYxYzRcIjtcbiRmYS12YXItZmlsZS1zb3VuZC1vOiBcIlxcZjFjN1wiO1xuJGZhLXZhci1maWxlLXRleHQ6IFwiXFxmMTVjXCI7XG4kZmEtdmFyLWZpbGUtdGV4dC1vOiBcIlxcZjBmNlwiO1xuJGZhLXZhci1maWxlLXZpZGVvLW86IFwiXFxmMWM4XCI7XG4kZmEtdmFyLWZpbGUtd29yZC1vOiBcIlxcZjFjMlwiO1xuJGZhLXZhci1maWxlLXppcC1vOiBcIlxcZjFjNlwiO1xuJGZhLXZhci1maWxlcy1vOiBcIlxcZjBjNVwiO1xuJGZhLXZhci1maWxtOiBcIlxcZjAwOFwiO1xuJGZhLXZhci1maWx0ZXI6IFwiXFxmMGIwXCI7XG4kZmEtdmFyLWZpcmU6IFwiXFxmMDZkXCI7XG4kZmEtdmFyLWZpcmUtZXh0aW5ndWlzaGVyOiBcIlxcZjEzNFwiO1xuJGZhLXZhci1maXJlZm94OiBcIlxcZjI2OVwiO1xuJGZhLXZhci1maXJzdC1vcmRlcjogXCJcXGYyYjBcIjtcbiRmYS12YXItZmxhZzogXCJcXGYwMjRcIjtcbiRmYS12YXItZmxhZy1jaGVja2VyZWQ6IFwiXFxmMTFlXCI7XG4kZmEtdmFyLWZsYWctbzogXCJcXGYxMWRcIjtcbiRmYS12YXItZmxhc2g6IFwiXFxmMGU3XCI7XG4kZmEtdmFyLWZsYXNrOiBcIlxcZjBjM1wiO1xuJGZhLXZhci1mbGlja3I6IFwiXFxmMTZlXCI7XG4kZmEtdmFyLWZsb3BweS1vOiBcIlxcZjBjN1wiO1xuJGZhLXZhci1mb2xkZXI6IFwiXFxmMDdiXCI7XG4kZmEtdmFyLWZvbGRlci1vOiBcIlxcZjExNFwiO1xuJGZhLXZhci1mb2xkZXItb3BlbjogXCJcXGYwN2NcIjtcbiRmYS12YXItZm9sZGVyLW9wZW4tbzogXCJcXGYxMTVcIjtcbiRmYS12YXItZm9udDogXCJcXGYwMzFcIjtcbiRmYS12YXItZm9udC1hd2Vzb21lOiBcIlxcZjJiNFwiO1xuJGZhLXZhci1mb250aWNvbnM6IFwiXFxmMjgwXCI7XG4kZmEtdmFyLWZvcnQtYXdlc29tZTogXCJcXGYyODZcIjtcbiRmYS12YXItZm9ydW1iZWU6IFwiXFxmMjExXCI7XG4kZmEtdmFyLWZvcndhcmQ6IFwiXFxmMDRlXCI7XG4kZmEtdmFyLWZvdXJzcXVhcmU6IFwiXFxmMTgwXCI7XG4kZmEtdmFyLWZyZWUtY29kZS1jYW1wOiBcIlxcZjJjNVwiO1xuJGZhLXZhci1mcm93bi1vOiBcIlxcZjExOVwiO1xuJGZhLXZhci1mdXRib2wtbzogXCJcXGYxZTNcIjtcbiRmYS12YXItZ2FtZXBhZDogXCJcXGYxMWJcIjtcbiRmYS12YXItZ2F2ZWw6IFwiXFxmMGUzXCI7XG4kZmEtdmFyLWdicDogXCJcXGYxNTRcIjtcbiRmYS12YXItZ2U6IFwiXFxmMWQxXCI7XG4kZmEtdmFyLWdlYXI6IFwiXFxmMDEzXCI7XG4kZmEtdmFyLWdlYXJzOiBcIlxcZjA4NVwiO1xuJGZhLXZhci1nZW5kZXJsZXNzOiBcIlxcZjIyZFwiO1xuJGZhLXZhci1nZXQtcG9ja2V0OiBcIlxcZjI2NVwiO1xuJGZhLXZhci1nZzogXCJcXGYyNjBcIjtcbiRmYS12YXItZ2ctY2lyY2xlOiBcIlxcZjI2MVwiO1xuJGZhLXZhci1naWZ0OiBcIlxcZjA2YlwiO1xuJGZhLXZhci1naXQ6IFwiXFxmMWQzXCI7XG4kZmEtdmFyLWdpdC1zcXVhcmU6IFwiXFxmMWQyXCI7XG4kZmEtdmFyLWdpdGh1YjogXCJcXGYwOWJcIjtcbiRmYS12YXItZ2l0aHViLWFsdDogXCJcXGYxMTNcIjtcbiRmYS12YXItZ2l0aHViLXNxdWFyZTogXCJcXGYwOTJcIjtcbiRmYS12YXItZ2l0bGFiOiBcIlxcZjI5NlwiO1xuJGZhLXZhci1naXR0aXA6IFwiXFxmMTg0XCI7XG4kZmEtdmFyLWdsYXNzOiBcIlxcZjAwMFwiO1xuJGZhLXZhci1nbGlkZTogXCJcXGYyYTVcIjtcbiRmYS12YXItZ2xpZGUtZzogXCJcXGYyYTZcIjtcbiRmYS12YXItZ2xvYmU6IFwiXFxmMGFjXCI7XG4kZmEtdmFyLWdvb2dsZTogXCJcXGYxYTBcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXM6IFwiXFxmMGQ1XCI7XG4kZmEtdmFyLWdvb2dsZS1wbHVzLWNpcmNsZTogXCJcXGYyYjNcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6IFwiXFxmMmIzXCI7XG4kZmEtdmFyLWdvb2dsZS1wbHVzLXNxdWFyZTogXCJcXGYwZDRcIjtcbiRmYS12YXItZ29vZ2xlLXdhbGxldDogXCJcXGYxZWVcIjtcbiRmYS12YXItZ3JhZHVhdGlvbi1jYXA6IFwiXFxmMTlkXCI7XG4kZmEtdmFyLWdyYXRpcGF5OiBcIlxcZjE4NFwiO1xuJGZhLXZhci1ncmF2OiBcIlxcZjJkNlwiO1xuJGZhLXZhci1ncm91cDogXCJcXGYwYzBcIjtcbiRmYS12YXItaC1zcXVhcmU6IFwiXFxmMGZkXCI7XG4kZmEtdmFyLWhhY2tlci1uZXdzOiBcIlxcZjFkNFwiO1xuJGZhLXZhci1oYW5kLWdyYWItbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1saXphcmQtbzogXCJcXGYyNThcIjtcbiRmYS12YXItaGFuZC1vLWRvd246IFwiXFxmMGE3XCI7XG4kZmEtdmFyLWhhbmQtby1sZWZ0OiBcIlxcZjBhNVwiO1xuJGZhLXZhci1oYW5kLW8tcmlnaHQ6IFwiXFxmMGE0XCI7XG4kZmEtdmFyLWhhbmQtby11cDogXCJcXGYwYTZcIjtcbiRmYS12YXItaGFuZC1wYXBlci1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYW5kLXBlYWNlLW86IFwiXFxmMjViXCI7XG4kZmEtdmFyLWhhbmQtcG9pbnRlci1vOiBcIlxcZjI1YVwiO1xuJGZhLXZhci1oYW5kLXJvY2stbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1zY2lzc29ycy1vOiBcIlxcZjI1N1wiO1xuJGZhLXZhci1oYW5kLXNwb2NrLW86IFwiXFxmMjU5XCI7XG4kZmEtdmFyLWhhbmQtc3RvcC1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYW5kc2hha2UtbzogXCJcXGYyYjVcIjtcbiRmYS12YXItaGFyZC1vZi1oZWFyaW5nOiBcIlxcZjJhNFwiO1xuJGZhLXZhci1oYXNodGFnOiBcIlxcZjI5MlwiO1xuJGZhLXZhci1oZGQtbzogXCJcXGYwYTBcIjtcbiRmYS12YXItaGVhZGVyOiBcIlxcZjFkY1wiO1xuJGZhLXZhci1oZWFkcGhvbmVzOiBcIlxcZjAyNVwiO1xuJGZhLXZhci1oZWFydDogXCJcXGYwMDRcIjtcbiRmYS12YXItaGVhcnQtbzogXCJcXGYwOGFcIjtcbiRmYS12YXItaGVhcnRiZWF0OiBcIlxcZjIxZVwiO1xuJGZhLXZhci1oaXN0b3J5OiBcIlxcZjFkYVwiO1xuJGZhLXZhci1ob21lOiBcIlxcZjAxNVwiO1xuJGZhLXZhci1ob3NwaXRhbC1vOiBcIlxcZjBmOFwiO1xuJGZhLXZhci1ob3RlbDogXCJcXGYyMzZcIjtcbiRmYS12YXItaG91cmdsYXNzOiBcIlxcZjI1NFwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtMTogXCJcXGYyNTFcIjtcbiRmYS12YXItaG91cmdsYXNzLTI6IFwiXFxmMjUyXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy0zOiBcIlxcZjI1M1wiO1xuJGZhLXZhci1ob3VyZ2xhc3MtZW5kOiBcIlxcZjI1M1wiO1xuJGZhLXZhci1ob3VyZ2xhc3MtaGFsZjogXCJcXGYyNTJcIjtcbiRmYS12YXItaG91cmdsYXNzLW86IFwiXFxmMjUwXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1zdGFydDogXCJcXGYyNTFcIjtcbiRmYS12YXItaG91eno6IFwiXFxmMjdjXCI7XG4kZmEtdmFyLWh0bWw1OiBcIlxcZjEzYlwiO1xuJGZhLXZhci1pLWN1cnNvcjogXCJcXGYyNDZcIjtcbiRmYS12YXItaWQtYmFkZ2U6IFwiXFxmMmMxXCI7XG4kZmEtdmFyLWlkLWNhcmQ6IFwiXFxmMmMyXCI7XG4kZmEtdmFyLWlkLWNhcmQtbzogXCJcXGYyYzNcIjtcbiRmYS12YXItaWxzOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1pbWFnZTogXCJcXGYwM2VcIjtcbiRmYS12YXItaW1kYjogXCJcXGYyZDhcIjtcbiRmYS12YXItaW5ib3g6IFwiXFxmMDFjXCI7XG4kZmEtdmFyLWluZGVudDogXCJcXGYwM2NcIjtcbiRmYS12YXItaW5kdXN0cnk6IFwiXFxmMjc1XCI7XG4kZmEtdmFyLWluZm86IFwiXFxmMTI5XCI7XG4kZmEtdmFyLWluZm8tY2lyY2xlOiBcIlxcZjA1YVwiO1xuJGZhLXZhci1pbnI6IFwiXFxmMTU2XCI7XG4kZmEtdmFyLWluc3RhZ3JhbTogXCJcXGYxNmRcIjtcbiRmYS12YXItaW5zdGl0dXRpb246IFwiXFxmMTljXCI7XG4kZmEtdmFyLWludGVybmV0LWV4cGxvcmVyOiBcIlxcZjI2YlwiO1xuJGZhLXZhci1pbnRlcnNleDogXCJcXGYyMjRcIjtcbiRmYS12YXItaW94aG9zdDogXCJcXGYyMDhcIjtcbiRmYS12YXItaXRhbGljOiBcIlxcZjAzM1wiO1xuJGZhLXZhci1qb29tbGE6IFwiXFxmMWFhXCI7XG4kZmEtdmFyLWpweTogXCJcXGYxNTdcIjtcbiRmYS12YXItanNmaWRkbGU6IFwiXFxmMWNjXCI7XG4kZmEtdmFyLWtleTogXCJcXGYwODRcIjtcbiRmYS12YXIta2V5Ym9hcmQtbzogXCJcXGYxMWNcIjtcbiRmYS12YXIta3J3OiBcIlxcZjE1OVwiO1xuJGZhLXZhci1sYW5ndWFnZTogXCJcXGYxYWJcIjtcbiRmYS12YXItbGFwdG9wOiBcIlxcZjEwOVwiO1xuJGZhLXZhci1sYXN0Zm06IFwiXFxmMjAyXCI7XG4kZmEtdmFyLWxhc3RmbS1zcXVhcmU6IFwiXFxmMjAzXCI7XG4kZmEtdmFyLWxlYWY6IFwiXFxmMDZjXCI7XG4kZmEtdmFyLWxlYW5wdWI6IFwiXFxmMjEyXCI7XG4kZmEtdmFyLWxlZ2FsOiBcIlxcZjBlM1wiO1xuJGZhLXZhci1sZW1vbi1vOiBcIlxcZjA5NFwiO1xuJGZhLXZhci1sZXZlbC1kb3duOiBcIlxcZjE0OVwiO1xuJGZhLXZhci1sZXZlbC11cDogXCJcXGYxNDhcIjtcbiRmYS12YXItbGlmZS1ib3V5OiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWZlLWJ1b3k6IFwiXFxmMWNkXCI7XG4kZmEtdmFyLWxpZmUtcmluZzogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlmZS1zYXZlcjogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlnaHRidWxiLW86IFwiXFxmMGViXCI7XG4kZmEtdmFyLWxpbmUtY2hhcnQ6IFwiXFxmMjAxXCI7XG4kZmEtdmFyLWxpbms6IFwiXFxmMGMxXCI7XG4kZmEtdmFyLWxpbmtlZGluOiBcIlxcZjBlMVwiO1xuJGZhLXZhci1saW5rZWRpbi1zcXVhcmU6IFwiXFxmMDhjXCI7XG4kZmEtdmFyLWxpbm9kZTogXCJcXGYyYjhcIjtcbiRmYS12YXItbGludXg6IFwiXFxmMTdjXCI7XG4kZmEtdmFyLWxpc3Q6IFwiXFxmMDNhXCI7XG4kZmEtdmFyLWxpc3QtYWx0OiBcIlxcZjAyMlwiO1xuJGZhLXZhci1saXN0LW9sOiBcIlxcZjBjYlwiO1xuJGZhLXZhci1saXN0LXVsOiBcIlxcZjBjYVwiO1xuJGZhLXZhci1sb2NhdGlvbi1hcnJvdzogXCJcXGYxMjRcIjtcbiRmYS12YXItbG9jazogXCJcXGYwMjNcIjtcbiRmYS12YXItbG9uZy1hcnJvdy1kb3duOiBcIlxcZjE3NVwiO1xuJGZhLXZhci1sb25nLWFycm93LWxlZnQ6IFwiXFxmMTc3XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctcmlnaHQ6IFwiXFxmMTc4XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctdXA6IFwiXFxmMTc2XCI7XG4kZmEtdmFyLWxvdy12aXNpb246IFwiXFxmMmE4XCI7XG4kZmEtdmFyLW1hZ2ljOiBcIlxcZjBkMFwiO1xuJGZhLXZhci1tYWduZXQ6IFwiXFxmMDc2XCI7XG4kZmEtdmFyLW1haWwtZm9yd2FyZDogXCJcXGYwNjRcIjtcbiRmYS12YXItbWFpbC1yZXBseTogXCJcXGYxMTJcIjtcbiRmYS12YXItbWFpbC1yZXBseS1hbGw6IFwiXFxmMTIyXCI7XG4kZmEtdmFyLW1hbGU6IFwiXFxmMTgzXCI7XG4kZmEtdmFyLW1hcDogXCJcXGYyNzlcIjtcbiRmYS12YXItbWFwLW1hcmtlcjogXCJcXGYwNDFcIjtcbiRmYS12YXItbWFwLW86IFwiXFxmMjc4XCI7XG4kZmEtdmFyLW1hcC1waW46IFwiXFxmMjc2XCI7XG4kZmEtdmFyLW1hcC1zaWduczogXCJcXGYyNzdcIjtcbiRmYS12YXItbWFyczogXCJcXGYyMjJcIjtcbiRmYS12YXItbWFycy1kb3VibGU6IFwiXFxmMjI3XCI7XG4kZmEtdmFyLW1hcnMtc3Ryb2tlOiBcIlxcZjIyOVwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS1oOiBcIlxcZjIyYlwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS12OiBcIlxcZjIyYVwiO1xuJGZhLXZhci1tYXhjZG46IFwiXFxmMTM2XCI7XG4kZmEtdmFyLW1lYW5wYXRoOiBcIlxcZjIwY1wiO1xuJGZhLXZhci1tZWRpdW06IFwiXFxmMjNhXCI7XG4kZmEtdmFyLW1lZGtpdDogXCJcXGYwZmFcIjtcbiRmYS12YXItbWVldHVwOiBcIlxcZjJlMFwiO1xuJGZhLXZhci1tZWgtbzogXCJcXGYxMWFcIjtcbiRmYS12YXItbWVyY3VyeTogXCJcXGYyMjNcIjtcbiRmYS12YXItbWljcm9jaGlwOiBcIlxcZjJkYlwiO1xuJGZhLXZhci1taWNyb3Bob25lOiBcIlxcZjEzMFwiO1xuJGZhLXZhci1taWNyb3Bob25lLXNsYXNoOiBcIlxcZjEzMVwiO1xuJGZhLXZhci1taW51czogXCJcXGYwNjhcIjtcbiRmYS12YXItbWludXMtY2lyY2xlOiBcIlxcZjA1NlwiO1xuJGZhLXZhci1taW51cy1zcXVhcmU6IFwiXFxmMTQ2XCI7XG4kZmEtdmFyLW1pbnVzLXNxdWFyZS1vOiBcIlxcZjE0N1wiO1xuJGZhLXZhci1taXhjbG91ZDogXCJcXGYyODlcIjtcbiRmYS12YXItbW9iaWxlOiBcIlxcZjEwYlwiO1xuJGZhLXZhci1tb2JpbGUtcGhvbmU6IFwiXFxmMTBiXCI7XG4kZmEtdmFyLW1vZHg6IFwiXFxmMjg1XCI7XG4kZmEtdmFyLW1vbmV5OiBcIlxcZjBkNlwiO1xuJGZhLXZhci1tb29uLW86IFwiXFxmMTg2XCI7XG4kZmEtdmFyLW1vcnRhci1ib2FyZDogXCJcXGYxOWRcIjtcbiRmYS12YXItbW90b3JjeWNsZTogXCJcXGYyMWNcIjtcbiRmYS12YXItbW91c2UtcG9pbnRlcjogXCJcXGYyNDVcIjtcbiRmYS12YXItbXVzaWM6IFwiXFxmMDAxXCI7XG4kZmEtdmFyLW5hdmljb246IFwiXFxmMGM5XCI7XG4kZmEtdmFyLW5ldXRlcjogXCJcXGYyMmNcIjtcbiRmYS12YXItbmV3c3BhcGVyLW86IFwiXFxmMWVhXCI7XG4kZmEtdmFyLW9iamVjdC1ncm91cDogXCJcXGYyNDdcIjtcbiRmYS12YXItb2JqZWN0LXVuZ3JvdXA6IFwiXFxmMjQ4XCI7XG4kZmEtdmFyLW9kbm9rbGFzc25pa2k6IFwiXFxmMjYzXCI7XG4kZmEtdmFyLW9kbm9rbGFzc25pa2ktc3F1YXJlOiBcIlxcZjI2NFwiO1xuJGZhLXZhci1vcGVuY2FydDogXCJcXGYyM2RcIjtcbiRmYS12YXItb3BlbmlkOiBcIlxcZjE5YlwiO1xuJGZhLXZhci1vcGVyYTogXCJcXGYyNmFcIjtcbiRmYS12YXItb3B0aW4tbW9uc3RlcjogXCJcXGYyM2NcIjtcbiRmYS12YXItb3V0ZGVudDogXCJcXGYwM2JcIjtcbiRmYS12YXItcGFnZWxpbmVzOiBcIlxcZjE4Y1wiO1xuJGZhLXZhci1wYWludC1icnVzaDogXCJcXGYxZmNcIjtcbiRmYS12YXItcGFwZXItcGxhbmU6IFwiXFxmMWQ4XCI7XG4kZmEtdmFyLXBhcGVyLXBsYW5lLW86IFwiXFxmMWQ5XCI7XG4kZmEtdmFyLXBhcGVyY2xpcDogXCJcXGYwYzZcIjtcbiRmYS12YXItcGFyYWdyYXBoOiBcIlxcZjFkZFwiO1xuJGZhLXZhci1wYXN0ZTogXCJcXGYwZWFcIjtcbiRmYS12YXItcGF1c2U6IFwiXFxmMDRjXCI7XG4kZmEtdmFyLXBhdXNlLWNpcmNsZTogXCJcXGYyOGJcIjtcbiRmYS12YXItcGF1c2UtY2lyY2xlLW86IFwiXFxmMjhjXCI7XG4kZmEtdmFyLXBhdzogXCJcXGYxYjBcIjtcbiRmYS12YXItcGF5cGFsOiBcIlxcZjFlZFwiO1xuJGZhLXZhci1wZW5jaWw6IFwiXFxmMDQwXCI7XG4kZmEtdmFyLXBlbmNpbC1zcXVhcmU6IFwiXFxmMTRiXCI7XG4kZmEtdmFyLXBlbmNpbC1zcXVhcmUtbzogXCJcXGYwNDRcIjtcbiRmYS12YXItcGVyY2VudDogXCJcXGYyOTVcIjtcbiRmYS12YXItcGhvbmU6IFwiXFxmMDk1XCI7XG4kZmEtdmFyLXBob25lLXNxdWFyZTogXCJcXGYwOThcIjtcbiRmYS12YXItcGhvdG86IFwiXFxmMDNlXCI7XG4kZmEtdmFyLXBpY3R1cmUtbzogXCJcXGYwM2VcIjtcbiRmYS12YXItcGllLWNoYXJ0OiBcIlxcZjIwMFwiO1xuJGZhLXZhci1waWVkLXBpcGVyOiBcIlxcZjJhZVwiO1xuJGZhLXZhci1waWVkLXBpcGVyLWFsdDogXCJcXGYxYThcIjtcbiRmYS12YXItcGllZC1waXBlci1wcDogXCJcXGYxYTdcIjtcbiRmYS12YXItcGludGVyZXN0OiBcIlxcZjBkMlwiO1xuJGZhLXZhci1waW50ZXJlc3QtcDogXCJcXGYyMzFcIjtcbiRmYS12YXItcGludGVyZXN0LXNxdWFyZTogXCJcXGYwZDNcIjtcbiRmYS12YXItcGxhbmU6IFwiXFxmMDcyXCI7XG4kZmEtdmFyLXBsYXk6IFwiXFxmMDRiXCI7XG4kZmEtdmFyLXBsYXktY2lyY2xlOiBcIlxcZjE0NFwiO1xuJGZhLXZhci1wbGF5LWNpcmNsZS1vOiBcIlxcZjAxZFwiO1xuJGZhLXZhci1wbHVnOiBcIlxcZjFlNlwiO1xuJGZhLXZhci1wbHVzOiBcIlxcZjA2N1wiO1xuJGZhLXZhci1wbHVzLWNpcmNsZTogXCJcXGYwNTVcIjtcbiRmYS12YXItcGx1cy1zcXVhcmU6IFwiXFxmMGZlXCI7XG4kZmEtdmFyLXBsdXMtc3F1YXJlLW86IFwiXFxmMTk2XCI7XG4kZmEtdmFyLXBvZGNhc3Q6IFwiXFxmMmNlXCI7XG4kZmEtdmFyLXBvd2VyLW9mZjogXCJcXGYwMTFcIjtcbiRmYS12YXItcHJpbnQ6IFwiXFxmMDJmXCI7XG4kZmEtdmFyLXByb2R1Y3QtaHVudDogXCJcXGYyODhcIjtcbiRmYS12YXItcHV6emxlLXBpZWNlOiBcIlxcZjEyZVwiO1xuJGZhLXZhci1xcTogXCJcXGYxZDZcIjtcbiRmYS12YXItcXJjb2RlOiBcIlxcZjAyOVwiO1xuJGZhLXZhci1xdWVzdGlvbjogXCJcXGYxMjhcIjtcbiRmYS12YXItcXVlc3Rpb24tY2lyY2xlOiBcIlxcZjA1OVwiO1xuJGZhLXZhci1xdWVzdGlvbi1jaXJjbGUtbzogXCJcXGYyOWNcIjtcbiRmYS12YXItcXVvcmE6IFwiXFxmMmM0XCI7XG4kZmEtdmFyLXF1b3RlLWxlZnQ6IFwiXFxmMTBkXCI7XG4kZmEtdmFyLXF1b3RlLXJpZ2h0OiBcIlxcZjEwZVwiO1xuJGZhLXZhci1yYTogXCJcXGYxZDBcIjtcbiRmYS12YXItcmFuZG9tOiBcIlxcZjA3NFwiO1xuJGZhLXZhci1yYXZlbHJ5OiBcIlxcZjJkOVwiO1xuJGZhLXZhci1yZWJlbDogXCJcXGYxZDBcIjtcbiRmYS12YXItcmVjeWNsZTogXCJcXGYxYjhcIjtcbiRmYS12YXItcmVkZGl0OiBcIlxcZjFhMVwiO1xuJGZhLXZhci1yZWRkaXQtYWxpZW46IFwiXFxmMjgxXCI7XG4kZmEtdmFyLXJlZGRpdC1zcXVhcmU6IFwiXFxmMWEyXCI7XG4kZmEtdmFyLXJlZnJlc2g6IFwiXFxmMDIxXCI7XG4kZmEtdmFyLXJlZ2lzdGVyZWQ6IFwiXFxmMjVkXCI7XG4kZmEtdmFyLXJlbW92ZTogXCJcXGYwMGRcIjtcbiRmYS12YXItcmVucmVuOiBcIlxcZjE4YlwiO1xuJGZhLXZhci1yZW9yZGVyOiBcIlxcZjBjOVwiO1xuJGZhLXZhci1yZXBlYXQ6IFwiXFxmMDFlXCI7XG4kZmEtdmFyLXJlcGx5OiBcIlxcZjExMlwiO1xuJGZhLXZhci1yZXBseS1hbGw6IFwiXFxmMTIyXCI7XG4kZmEtdmFyLXJlc2lzdGFuY2U6IFwiXFxmMWQwXCI7XG4kZmEtdmFyLXJldHdlZXQ6IFwiXFxmMDc5XCI7XG4kZmEtdmFyLXJtYjogXCJcXGYxNTdcIjtcbiRmYS12YXItcm9hZDogXCJcXGYwMThcIjtcbiRmYS12YXItcm9ja2V0OiBcIlxcZjEzNVwiO1xuJGZhLXZhci1yb3RhdGUtbGVmdDogXCJcXGYwZTJcIjtcbiRmYS12YXItcm90YXRlLXJpZ2h0OiBcIlxcZjAxZVwiO1xuJGZhLXZhci1yb3VibGU6IFwiXFxmMTU4XCI7XG4kZmEtdmFyLXJzczogXCJcXGYwOWVcIjtcbiRmYS12YXItcnNzLXNxdWFyZTogXCJcXGYxNDNcIjtcbiRmYS12YXItcnViOiBcIlxcZjE1OFwiO1xuJGZhLXZhci1ydWJsZTogXCJcXGYxNThcIjtcbiRmYS12YXItcnVwZWU6IFwiXFxmMTU2XCI7XG4kZmEtdmFyLXMxNTogXCJcXGYyY2RcIjtcbiRmYS12YXItc2FmYXJpOiBcIlxcZjI2N1wiO1xuJGZhLXZhci1zYXZlOiBcIlxcZjBjN1wiO1xuJGZhLXZhci1zY2lzc29yczogXCJcXGYwYzRcIjtcbiRmYS12YXItc2NyaWJkOiBcIlxcZjI4YVwiO1xuJGZhLXZhci1zZWFyY2g6IFwiXFxmMDAyXCI7XG4kZmEtdmFyLXNlYXJjaC1taW51czogXCJcXGYwMTBcIjtcbiRmYS12YXItc2VhcmNoLXBsdXM6IFwiXFxmMDBlXCI7XG4kZmEtdmFyLXNlbGxzeTogXCJcXGYyMTNcIjtcbiRmYS12YXItc2VuZDogXCJcXGYxZDhcIjtcbiRmYS12YXItc2VuZC1vOiBcIlxcZjFkOVwiO1xuJGZhLXZhci1zZXJ2ZXI6IFwiXFxmMjMzXCI7XG4kZmEtdmFyLXNoYXJlOiBcIlxcZjA2NFwiO1xuJGZhLXZhci1zaGFyZS1hbHQ6IFwiXFxmMWUwXCI7XG4kZmEtdmFyLXNoYXJlLWFsdC1zcXVhcmU6IFwiXFxmMWUxXCI7XG4kZmEtdmFyLXNoYXJlLXNxdWFyZTogXCJcXGYxNGRcIjtcbiRmYS12YXItc2hhcmUtc3F1YXJlLW86IFwiXFxmMDQ1XCI7XG4kZmEtdmFyLXNoZWtlbDogXCJcXGYyMGJcIjtcbiRmYS12YXItc2hlcWVsOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1zaGllbGQ6IFwiXFxmMTMyXCI7XG4kZmEtdmFyLXNoaXA6IFwiXFxmMjFhXCI7XG4kZmEtdmFyLXNoaXJ0c2luYnVsazogXCJcXGYyMTRcIjtcbiRmYS12YXItc2hvcHBpbmctYmFnOiBcIlxcZjI5MFwiO1xuJGZhLXZhci1zaG9wcGluZy1iYXNrZXQ6IFwiXFxmMjkxXCI7XG4kZmEtdmFyLXNob3BwaW5nLWNhcnQ6IFwiXFxmMDdhXCI7XG4kZmEtdmFyLXNob3dlcjogXCJcXGYyY2NcIjtcbiRmYS12YXItc2lnbi1pbjogXCJcXGYwOTBcIjtcbiRmYS12YXItc2lnbi1sYW5ndWFnZTogXCJcXGYyYTdcIjtcbiRmYS12YXItc2lnbi1vdXQ6IFwiXFxmMDhiXCI7XG4kZmEtdmFyLXNpZ25hbDogXCJcXGYwMTJcIjtcbiRmYS12YXItc2lnbmluZzogXCJcXGYyYTdcIjtcbiRmYS12YXItc2ltcGx5YnVpbHQ6IFwiXFxmMjE1XCI7XG4kZmEtdmFyLXNpdGVtYXA6IFwiXFxmMGU4XCI7XG4kZmEtdmFyLXNreWF0bGFzOiBcIlxcZjIxNlwiO1xuJGZhLXZhci1za3lwZTogXCJcXGYxN2VcIjtcbiRmYS12YXItc2xhY2s6IFwiXFxmMTk4XCI7XG4kZmEtdmFyLXNsaWRlcnM6IFwiXFxmMWRlXCI7XG4kZmEtdmFyLXNsaWRlc2hhcmU6IFwiXFxmMWU3XCI7XG4kZmEtdmFyLXNtaWxlLW86IFwiXFxmMTE4XCI7XG4kZmEtdmFyLXNuYXBjaGF0OiBcIlxcZjJhYlwiO1xuJGZhLXZhci1zbmFwY2hhdC1naG9zdDogXCJcXGYyYWNcIjtcbiRmYS12YXItc25hcGNoYXQtc3F1YXJlOiBcIlxcZjJhZFwiO1xuJGZhLXZhci1zbm93Zmxha2UtbzogXCJcXGYyZGNcIjtcbiRmYS12YXItc29jY2VyLWJhbGwtbzogXCJcXGYxZTNcIjtcbiRmYS12YXItc29ydDogXCJcXGYwZGNcIjtcbiRmYS12YXItc29ydC1hbHBoYS1hc2M6IFwiXFxmMTVkXCI7XG4kZmEtdmFyLXNvcnQtYWxwaGEtZGVzYzogXCJcXGYxNWVcIjtcbiRmYS12YXItc29ydC1hbW91bnQtYXNjOiBcIlxcZjE2MFwiO1xuJGZhLXZhci1zb3J0LWFtb3VudC1kZXNjOiBcIlxcZjE2MVwiO1xuJGZhLXZhci1zb3J0LWFzYzogXCJcXGYwZGVcIjtcbiRmYS12YXItc29ydC1kZXNjOiBcIlxcZjBkZFwiO1xuJGZhLXZhci1zb3J0LWRvd246IFwiXFxmMGRkXCI7XG4kZmEtdmFyLXNvcnQtbnVtZXJpYy1hc2M6IFwiXFxmMTYyXCI7XG4kZmEtdmFyLXNvcnQtbnVtZXJpYy1kZXNjOiBcIlxcZjE2M1wiO1xuJGZhLXZhci1zb3J0LXVwOiBcIlxcZjBkZVwiO1xuJGZhLXZhci1zb3VuZGNsb3VkOiBcIlxcZjFiZVwiO1xuJGZhLXZhci1zcGFjZS1zaHV0dGxlOiBcIlxcZjE5N1wiO1xuJGZhLXZhci1zcGlubmVyOiBcIlxcZjExMFwiO1xuJGZhLXZhci1zcG9vbjogXCJcXGYxYjFcIjtcbiRmYS12YXItc3BvdGlmeTogXCJcXGYxYmNcIjtcbiRmYS12YXItc3F1YXJlOiBcIlxcZjBjOFwiO1xuJGZhLXZhci1zcXVhcmUtbzogXCJcXGYwOTZcIjtcbiRmYS12YXItc3RhY2stZXhjaGFuZ2U6IFwiXFxmMThkXCI7XG4kZmEtdmFyLXN0YWNrLW92ZXJmbG93OiBcIlxcZjE2Y1wiO1xuJGZhLXZhci1zdGFyOiBcIlxcZjAwNVwiO1xuJGZhLXZhci1zdGFyLWhhbGY6IFwiXFxmMDg5XCI7XG4kZmEtdmFyLXN0YXItaGFsZi1lbXB0eTogXCJcXGYxMjNcIjtcbiRmYS12YXItc3Rhci1oYWxmLWZ1bGw6IFwiXFxmMTIzXCI7XG4kZmEtdmFyLXN0YXItaGFsZi1vOiBcIlxcZjEyM1wiO1xuJGZhLXZhci1zdGFyLW86IFwiXFxmMDA2XCI7XG4kZmEtdmFyLXN0ZWFtOiBcIlxcZjFiNlwiO1xuJGZhLXZhci1zdGVhbS1zcXVhcmU6IFwiXFxmMWI3XCI7XG4kZmEtdmFyLXN0ZXAtYmFja3dhcmQ6IFwiXFxmMDQ4XCI7XG4kZmEtdmFyLXN0ZXAtZm9yd2FyZDogXCJcXGYwNTFcIjtcbiRmYS12YXItc3RldGhvc2NvcGU6IFwiXFxmMGYxXCI7XG4kZmEtdmFyLXN0aWNreS1ub3RlOiBcIlxcZjI0OVwiO1xuJGZhLXZhci1zdGlja3ktbm90ZS1vOiBcIlxcZjI0YVwiO1xuJGZhLXZhci1zdG9wOiBcIlxcZjA0ZFwiO1xuJGZhLXZhci1zdG9wLWNpcmNsZTogXCJcXGYyOGRcIjtcbiRmYS12YXItc3RvcC1jaXJjbGUtbzogXCJcXGYyOGVcIjtcbiRmYS12YXItc3RyZWV0LXZpZXc6IFwiXFxmMjFkXCI7XG4kZmEtdmFyLXN0cmlrZXRocm91Z2g6IFwiXFxmMGNjXCI7XG4kZmEtdmFyLXN0dW1ibGV1cG9uOiBcIlxcZjFhNFwiO1xuJGZhLXZhci1zdHVtYmxldXBvbi1jaXJjbGU6IFwiXFxmMWEzXCI7XG4kZmEtdmFyLXN1YnNjcmlwdDogXCJcXGYxMmNcIjtcbiRmYS12YXItc3Vid2F5OiBcIlxcZjIzOVwiO1xuJGZhLXZhci1zdWl0Y2FzZTogXCJcXGYwZjJcIjtcbiRmYS12YXItc3VuLW86IFwiXFxmMTg1XCI7XG4kZmEtdmFyLXN1cGVycG93ZXJzOiBcIlxcZjJkZFwiO1xuJGZhLXZhci1zdXBlcnNjcmlwdDogXCJcXGYxMmJcIjtcbiRmYS12YXItc3VwcG9ydDogXCJcXGYxY2RcIjtcbiRmYS12YXItdGFibGU6IFwiXFxmMGNlXCI7XG4kZmEtdmFyLXRhYmxldDogXCJcXGYxMGFcIjtcbiRmYS12YXItdGFjaG9tZXRlcjogXCJcXGYwZTRcIjtcbiRmYS12YXItdGFnOiBcIlxcZjAyYlwiO1xuJGZhLXZhci10YWdzOiBcIlxcZjAyY1wiO1xuJGZhLXZhci10YXNrczogXCJcXGYwYWVcIjtcbiRmYS12YXItdGF4aTogXCJcXGYxYmFcIjtcbiRmYS12YXItdGVsZWdyYW06IFwiXFxmMmM2XCI7XG4kZmEtdmFyLXRlbGV2aXNpb246IFwiXFxmMjZjXCI7XG4kZmEtdmFyLXRlbmNlbnQtd2VpYm86IFwiXFxmMWQ1XCI7XG4kZmEtdmFyLXRlcm1pbmFsOiBcIlxcZjEyMFwiO1xuJGZhLXZhci10ZXh0LWhlaWdodDogXCJcXGYwMzRcIjtcbiRmYS12YXItdGV4dC13aWR0aDogXCJcXGYwMzVcIjtcbiRmYS12YXItdGg6IFwiXFxmMDBhXCI7XG4kZmEtdmFyLXRoLWxhcmdlOiBcIlxcZjAwOVwiO1xuJGZhLXZhci10aC1saXN0OiBcIlxcZjAwYlwiO1xuJGZhLXZhci10aGVtZWlzbGU6IFwiXFxmMmIyXCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyOiBcIlxcZjJjN1wiO1xuJGZhLXZhci10aGVybW9tZXRlci0wOiBcIlxcZjJjYlwiO1xuJGZhLXZhci10aGVybW9tZXRlci0xOiBcIlxcZjJjYVwiO1xuJGZhLXZhci10aGVybW9tZXRlci0yOiBcIlxcZjJjOVwiO1xuJGZhLXZhci10aGVybW9tZXRlci0zOiBcIlxcZjJjOFwiO1xuJGZhLXZhci10aGVybW9tZXRlci00OiBcIlxcZjJjN1wiO1xuJGZhLXZhci10aGVybW9tZXRlci1lbXB0eTogXCJcXGYyY2JcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItZnVsbDogXCJcXGYyYzdcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItaGFsZjogXCJcXGYyYzlcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItcXVhcnRlcjogXCJcXGYyY2FcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6IFwiXFxmMmM4XCI7XG4kZmEtdmFyLXRodW1iLXRhY2s6IFwiXFxmMDhkXCI7XG4kZmEtdmFyLXRodW1icy1kb3duOiBcIlxcZjE2NVwiO1xuJGZhLXZhci10aHVtYnMtby1kb3duOiBcIlxcZjA4OFwiO1xuJGZhLXZhci10aHVtYnMtby11cDogXCJcXGYwODdcIjtcbiRmYS12YXItdGh1bWJzLXVwOiBcIlxcZjE2NFwiO1xuJGZhLXZhci10aWNrZXQ6IFwiXFxmMTQ1XCI7XG4kZmEtdmFyLXRpbWVzOiBcIlxcZjAwZFwiO1xuJGZhLXZhci10aW1lcy1jaXJjbGU6IFwiXFxmMDU3XCI7XG4kZmEtdmFyLXRpbWVzLWNpcmNsZS1vOiBcIlxcZjA1Y1wiO1xuJGZhLXZhci10aW1lcy1yZWN0YW5nbGU6IFwiXFxmMmQzXCI7XG4kZmEtdmFyLXRpbWVzLXJlY3RhbmdsZS1vOiBcIlxcZjJkNFwiO1xuJGZhLXZhci10aW50OiBcIlxcZjA0M1wiO1xuJGZhLXZhci10b2dnbGUtZG93bjogXCJcXGYxNTBcIjtcbiRmYS12YXItdG9nZ2xlLWxlZnQ6IFwiXFxmMTkxXCI7XG4kZmEtdmFyLXRvZ2dsZS1vZmY6IFwiXFxmMjA0XCI7XG4kZmEtdmFyLXRvZ2dsZS1vbjogXCJcXGYyMDVcIjtcbiRmYS12YXItdG9nZ2xlLXJpZ2h0OiBcIlxcZjE1MlwiO1xuJGZhLXZhci10b2dnbGUtdXA6IFwiXFxmMTUxXCI7XG4kZmEtdmFyLXRyYWRlbWFyazogXCJcXGYyNWNcIjtcbiRmYS12YXItdHJhaW46IFwiXFxmMjM4XCI7XG4kZmEtdmFyLXRyYW5zZ2VuZGVyOiBcIlxcZjIyNFwiO1xuJGZhLXZhci10cmFuc2dlbmRlci1hbHQ6IFwiXFxmMjI1XCI7XG4kZmEtdmFyLXRyYXNoOiBcIlxcZjFmOFwiO1xuJGZhLXZhci10cmFzaC1vOiBcIlxcZjAxNFwiO1xuJGZhLXZhci10cmVlOiBcIlxcZjFiYlwiO1xuJGZhLXZhci10cmVsbG86IFwiXFxmMTgxXCI7XG4kZmEtdmFyLXRyaXBhZHZpc29yOiBcIlxcZjI2MlwiO1xuJGZhLXZhci10cm9waHk6IFwiXFxmMDkxXCI7XG4kZmEtdmFyLXRydWNrOiBcIlxcZjBkMVwiO1xuJGZhLXZhci10cnk6IFwiXFxmMTk1XCI7XG4kZmEtdmFyLXR0eTogXCJcXGYxZTRcIjtcbiRmYS12YXItdHVtYmxyOiBcIlxcZjE3M1wiO1xuJGZhLXZhci10dW1ibHItc3F1YXJlOiBcIlxcZjE3NFwiO1xuJGZhLXZhci10dXJraXNoLWxpcmE6IFwiXFxmMTk1XCI7XG4kZmEtdmFyLXR2OiBcIlxcZjI2Y1wiO1xuJGZhLXZhci10d2l0Y2g6IFwiXFxmMWU4XCI7XG4kZmEtdmFyLXR3aXR0ZXI6IFwiXFxmMDk5XCI7XG4kZmEtdmFyLXR3aXR0ZXItc3F1YXJlOiBcIlxcZjA4MVwiO1xuJGZhLXZhci11bWJyZWxsYTogXCJcXGYwZTlcIjtcbiRmYS12YXItdW5kZXJsaW5lOiBcIlxcZjBjZFwiO1xuJGZhLXZhci11bmRvOiBcIlxcZjBlMlwiO1xuJGZhLXZhci11bml2ZXJzYWwtYWNjZXNzOiBcIlxcZjI5YVwiO1xuJGZhLXZhci11bml2ZXJzaXR5OiBcIlxcZjE5Y1wiO1xuJGZhLXZhci11bmxpbms6IFwiXFxmMTI3XCI7XG4kZmEtdmFyLXVubG9jazogXCJcXGYwOWNcIjtcbiRmYS12YXItdW5sb2NrLWFsdDogXCJcXGYxM2VcIjtcbiRmYS12YXItdW5zb3J0ZWQ6IFwiXFxmMGRjXCI7XG4kZmEtdmFyLXVwbG9hZDogXCJcXGYwOTNcIjtcbiRmYS12YXItdXNiOiBcIlxcZjI4N1wiO1xuJGZhLXZhci11c2Q6IFwiXFxmMTU1XCI7XG4kZmEtdmFyLXVzZXI6IFwiXFxmMDA3XCI7XG4kZmEtdmFyLXVzZXItY2lyY2xlOiBcIlxcZjJiZFwiO1xuJGZhLXZhci11c2VyLWNpcmNsZS1vOiBcIlxcZjJiZVwiO1xuJGZhLXZhci11c2VyLW1kOiBcIlxcZjBmMFwiO1xuJGZhLXZhci11c2VyLW86IFwiXFxmMmMwXCI7XG4kZmEtdmFyLXVzZXItcGx1czogXCJcXGYyMzRcIjtcbiRmYS12YXItdXNlci1zZWNyZXQ6IFwiXFxmMjFiXCI7XG4kZmEtdmFyLXVzZXItdGltZXM6IFwiXFxmMjM1XCI7XG4kZmEtdmFyLXVzZXJzOiBcIlxcZjBjMFwiO1xuJGZhLXZhci12Y2FyZDogXCJcXGYyYmJcIjtcbiRmYS12YXItdmNhcmQtbzogXCJcXGYyYmNcIjtcbiRmYS12YXItdmVudXM6IFwiXFxmMjIxXCI7XG4kZmEtdmFyLXZlbnVzLWRvdWJsZTogXCJcXGYyMjZcIjtcbiRmYS12YXItdmVudXMtbWFyczogXCJcXGYyMjhcIjtcbiRmYS12YXItdmlhY29pbjogXCJcXGYyMzdcIjtcbiRmYS12YXItdmlhZGVvOiBcIlxcZjJhOVwiO1xuJGZhLXZhci12aWFkZW8tc3F1YXJlOiBcIlxcZjJhYVwiO1xuJGZhLXZhci12aWRlby1jYW1lcmE6IFwiXFxmMDNkXCI7XG4kZmEtdmFyLXZpbWVvOiBcIlxcZjI3ZFwiO1xuJGZhLXZhci12aW1lby1zcXVhcmU6IFwiXFxmMTk0XCI7XG4kZmEtdmFyLXZpbmU6IFwiXFxmMWNhXCI7XG4kZmEtdmFyLXZrOiBcIlxcZjE4OVwiO1xuJGZhLXZhci12b2x1bWUtY29udHJvbC1waG9uZTogXCJcXGYyYTBcIjtcbiRmYS12YXItdm9sdW1lLWRvd246IFwiXFxmMDI3XCI7XG4kZmEtdmFyLXZvbHVtZS1vZmY6IFwiXFxmMDI2XCI7XG4kZmEtdmFyLXZvbHVtZS11cDogXCJcXGYwMjhcIjtcbiRmYS12YXItd2FybmluZzogXCJcXGYwNzFcIjtcbiRmYS12YXItd2VjaGF0OiBcIlxcZjFkN1wiO1xuJGZhLXZhci13ZWlibzogXCJcXGYxOGFcIjtcbiRmYS12YXItd2VpeGluOiBcIlxcZjFkN1wiO1xuJGZhLXZhci13aGF0c2FwcDogXCJcXGYyMzJcIjtcbiRmYS12YXItd2hlZWxjaGFpcjogXCJcXGYxOTNcIjtcbiRmYS12YXItd2hlZWxjaGFpci1hbHQ6IFwiXFxmMjliXCI7XG4kZmEtdmFyLXdpZmk6IFwiXFxmMWViXCI7XG4kZmEtdmFyLXdpa2lwZWRpYS13OiBcIlxcZjI2NlwiO1xuJGZhLXZhci13aW5kb3ctY2xvc2U6IFwiXFxmMmQzXCI7XG4kZmEtdmFyLXdpbmRvdy1jbG9zZS1vOiBcIlxcZjJkNFwiO1xuJGZhLXZhci13aW5kb3ctbWF4aW1pemU6IFwiXFxmMmQwXCI7XG4kZmEtdmFyLXdpbmRvdy1taW5pbWl6ZTogXCJcXGYyZDFcIjtcbiRmYS12YXItd2luZG93LXJlc3RvcmU6IFwiXFxmMmQyXCI7XG4kZmEtdmFyLXdpbmRvd3M6IFwiXFxmMTdhXCI7XG4kZmEtdmFyLXdvbjogXCJcXGYxNTlcIjtcbiRmYS12YXItd29yZHByZXNzOiBcIlxcZjE5YVwiO1xuJGZhLXZhci13cGJlZ2lubmVyOiBcIlxcZjI5N1wiO1xuJGZhLXZhci13cGV4cGxvcmVyOiBcIlxcZjJkZVwiO1xuJGZhLXZhci13cGZvcm1zOiBcIlxcZjI5OFwiO1xuJGZhLXZhci13cmVuY2g6IFwiXFxmMGFkXCI7XG4kZmEtdmFyLXhpbmc6IFwiXFxmMTY4XCI7XG4kZmEtdmFyLXhpbmctc3F1YXJlOiBcIlxcZjE2OVwiO1xuJGZhLXZhci15LWNvbWJpbmF0b3I6IFwiXFxmMjNiXCI7XG4kZmEtdmFyLXktY29tYmluYXRvci1zcXVhcmU6IFwiXFxmMWQ0XCI7XG4kZmEtdmFyLXlhaG9vOiBcIlxcZjE5ZVwiO1xuJGZhLXZhci15YzogXCJcXGYyM2JcIjtcbiRmYS12YXIteWMtc3F1YXJlOiBcIlxcZjFkNFwiO1xuJGZhLXZhci15ZWxwOiBcIlxcZjFlOVwiO1xuJGZhLXZhci15ZW46IFwiXFxmMTU3XCI7XG4kZmEtdmFyLXlvYXN0OiBcIlxcZjJiMVwiO1xuJGZhLXZhci15b3V0dWJlOiBcIlxcZjE2N1wiO1xuJGZhLXZhci15b3V0dWJlLXBsYXk6IFwiXFxmMTZhXCI7XG4kZmEtdmFyLXlvdXR1YmUtc3F1YXJlOiBcIlxcZjE2NlwiO1xuXG4iLCIvLyBCb3JkZXJlZCAmIFB1bGxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tYm9yZGVyIHtcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcbiAgYm9yZGVyOiBzb2xpZCAuMDhlbSAkZmEtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAuMWVtO1xufVxuXG4uI3skZmEtY3NzLXByZWZpeH0tcHVsbC1sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wdWxsLXJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG5cbi4jeyRmYS1jc3MtcHJlZml4fSB7XG4gICYuI3skZmEtY3NzLXByZWZpeH0tcHVsbC1sZWZ0IHsgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XG4gICYuI3skZmEtY3NzLXByZWZpeH0tcHVsbC1yaWdodCB7IG1hcmdpbi1sZWZ0OiAuM2VtOyB9XG59XG5cbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cbi5wdWxsLXJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG4ucHVsbC1sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cblxuLiN7JGZhLWNzcy1wcmVmaXh9IHtcbiAgJi5wdWxsLWxlZnQgeyBtYXJnaW4tcmlnaHQ6IC4zZW07IH1cbiAgJi5wdWxsLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IC4zZW07IH1cbn1cbiIsIi8vIFNwaW5uaW5nIEljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tc3BpbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uI3skZmEtY3NzLXByZWZpeH0tcHVsc2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmEtc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuIiwiLy8gUm90YXRlZCAmIEZsaXBwZWQgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS05MCAgeyBAaW5jbHVkZSBmYS1pY29uLXJvdGF0ZSg5MGRlZywgMSk7ICB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLTE4MCB7IEBpbmNsdWRlIGZhLWljb24tcm90YXRlKDE4MGRlZywgMik7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtMjcwIHsgQGluY2x1ZGUgZmEtaWNvbi1yb3RhdGUoMjcwZGVnLCAzKTsgfVxuXG4uI3skZmEtY3NzLXByZWZpeH0tZmxpcC1ob3Jpem9udGFsIHsgQGluY2x1ZGUgZmEtaWNvbi1mbGlwKC0xLCAxLCAwKTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsaXAtdmVydGljYWwgICB7IEBpbmNsdWRlIGZhLWljb24tZmxpcCgxLCAtMSwgMik7IH1cblxuLy8gSG9vayBmb3IgSUU4LTlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS05MCxcbjpyb290IC4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtMTgwLFxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS0yNzAsXG46cm9vdCAuI3skZmEtY3NzLXByZWZpeH0tZmxpcC1ob3Jpem9udGFsLFxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LWZsaXAtdmVydGljYWwge1xuICBmaWx0ZXI6IG5vbmU7XG59XG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmYS1pY29uKCkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cblxuQG1peGluIGZhLWljb24tcm90YXRlKCRkZWdyZWVzLCAkcm90YXRpb24pIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0jeyRyb3RhdGlvbn0pXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5cbkBtaXhpbiBmYS1pY29uLWZsaXAoJGhvcml6LCAkdmVydCwgJHJvdGF0aW9uKSB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249I3skcm90YXRpb259LCBtaXJyb3I9MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRob3JpeiwgJHZlcnQpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJGhvcml6LCAkdmVydCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkaG9yaXosICR2ZXJ0KTtcbn1cblxuXG4vLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVycy4gQSBsYSBCb290c3RyYXAgNC5cbi8vXG4vLyBTZWU6IGh0dHA6Ly9hMTF5cHJvamVjdC5jb20vcG9zdHMvaG93LXRvLWhpZGUtY29udGVudC9cblxuQG1peGluIHNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gVXNlIGluIGNvbmp1bmN0aW9uIHdpdGggLnNyLW9ubHkgdG8gb25seSBkaXNwbGF5IGNvbnRlbnQgd2hlbiBpdCdzIGZvY3VzZWQuXG4vL1xuLy8gVXNlZnVsIGZvciBcIlNraXAgdG8gbWFpbiBjb250ZW50XCIgbGlua3M7IHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG4vL1xuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG5AbWl4aW4gc3Itb25seS1mb2N1c2FibGUge1xuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNsaXA6IGF1dG87XG4gIH1cbn1cbiIsIi8vIFN0YWNrZWQgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTF4LCAuI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMXggeyBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTJ4IHsgZm9udC1zaXplOiAyZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnZlcnNlIHsgY29sb3I6ICRmYS1pbnZlcnNlOyB9XG4iLCIvKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXG5cbi4jeyRmYS1jc3MtcHJlZml4fS1nbGFzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsYXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbXVzaWM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tdXNpYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNlYXJjaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZWFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Rhci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoLWxhcmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGgtbGFyZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGgtbGlzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoLWxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGVjazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZWNrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVtb3ZlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jbG9zZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW1lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlYXJjaC1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VhcmNoLXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZWFyY2gtbWludXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zZWFyY2gtbWludXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wb3dlci1vZmY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wb3dlci1vZmY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaWduYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZWFyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jb2c6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFzaC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhc2gtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvbWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ob21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvY2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcm9hZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZG93bmxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmJveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluYm94OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGxheS1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYXktY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlcGVhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlcGVhdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWZyZXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdC1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saXN0LWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvY2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb2NrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxhZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZsYWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZWFkcGhvbmVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhZHBob25lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZvbHVtZS1vZmY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12b2x1bWUtb2ZmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdm9sdW1lLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12b2x1bWUtZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZvbHVtZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXFyY29kZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXFyY29kZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhcmNvZGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXJjb2RlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFnOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFnczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRhZ3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9vazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9va21hcms7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wcmludDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXByaW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FtZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9udDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ib2xkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9sZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWl0YWxpYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWl0YWxpYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRleHQtaGVpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGV4dC1oZWlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZXh0LXdpZHRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGV4dC13aWR0aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFsaWduLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tY2VudGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWxpZ24tY2VudGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFsaWduLWp1c3RpZnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1qdXN0aWZ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZWRlbnQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LW91dGRlbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vdXRkZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5kZW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5kZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlkZW8tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlkZW8tY2FtZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGhvdG86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWltYWdlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1waWN0dXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWN0dXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZW5jaWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wZW5jaWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtbWFya2VyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwLW1hcmtlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFkanVzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkanVzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZWRpdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVuY2lsLXNxdWFyZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hhcmUtc3F1YXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1zcXVhcmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvd3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RlcC1iYWNrd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhc3QtYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYXN0LWJhY2t3YXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYWNrd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBsYXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbGF5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGF1c2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXVzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0b3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdG9wOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYXN0LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYXN0LWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGVwLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGVwLWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lamVjdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVqZWN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVzLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWludXMtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGltZXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hlY2stY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVlc3Rpb24tY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5mby1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbmZvLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNyb3NzaGFpcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jcm9zc2hhaXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW1lcy1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leHBhbmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21wcmVzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbXByZXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taW51czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pbnVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXN0ZXJpc2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hc3RlcmlzazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4Y2xhbWF0aW9uLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGVhZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxlYWY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV5ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV5ZS1zbGFzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZS1zbGFzaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdhcm5pbmc6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhjbGFtYXRpb24tdHJpYW5nbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYW5lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJhbmRvbTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJhbmRvbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbW1lbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21tZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFnbmV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFnbmV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZXR3ZWV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmV0d2VldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNob3BwaW5nLWNhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1jYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9sZGVyLW9wZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb2xkZXItb3BlbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93cy12OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3dzLXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3MtaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93cy1oOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFyLWNoYXJ0LW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhci1jaGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhci1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHdpdHRlci1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYWNlYm9vay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYW1lcmEtcmV0cm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYW1lcmEtcmV0cm87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1rZXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1rZXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZWFyczpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY29nczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZ3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGh1bWJzLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtby11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRodW1icy1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtby1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Rhci1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhcnQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhlYXJ0LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduLW91dDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNpZ24tb3V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlua2VkaW4tc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGh1bWItdGFjazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1iLXRhY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leHRlcm5hbC1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXh0ZXJuYWwtbGluazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ24taW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaWduLWluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJvcGh5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJvcGh5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2l0aHViLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdGh1Yi1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11cGxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZW1vbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGVtb24tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGhvbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcXVhcmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNxdWFyZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYm9va21hcmstbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJvb2ttYXJrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1waG9uZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waG9uZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10d2l0dGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHdpdHRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhY2Vib29rLWY6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhY2Vib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmFjZWJvb2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXRodWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naXRodWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11bmxvY2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bmxvY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcmVkaXQtY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNyZWRpdC1jYXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmVlZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcnNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcnNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGRkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZGQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1bGxob3JuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnVsbGhvcm47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNlcnRpZmljYXRlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2VydGlmaWNhdGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLW8tcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtby1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1vLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1vLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2xvYmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nbG9iZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdyZW5jaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdyZW5jaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhc2tzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFza3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWx0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWx0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1icmllZmNhc2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3MtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3dzLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyb3VwOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hhaW46YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbms6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jbG91ZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhc2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jdXQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNjaXNzb3JzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2Npc3NvcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb3B5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlcy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZXMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyY2xpcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhcGVyY2xpcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNhdmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsb3BweS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxvcHB5LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1uYXZpY29uOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yZW9yZGVyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmFyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpc3QtdWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saXN0LXVsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdC1vbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3Qtb2w7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RyaWtldGhyb3VnaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuZGVybGluZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVuZGVybGluZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhYmxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWdpYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hZ2ljOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJ1Y2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cnVjazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpbnRlcmVzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waW50ZXJlc3Qtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXBsdXMtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlLXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGUtcGx1czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vbmV5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW9uZXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb2x1bW5zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29sdW1uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuc29ydGVkOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtZG93bjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1kZXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC11cDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LWFzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW52ZWxvcGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saW5rZWRpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpbmtlZGluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLWxlZnQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuZG86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bmRvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGVnYWw6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdhdmVsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2F2ZWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kYXNoYm9hcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhY2hvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWNob21ldGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tbWVudC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudHMtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mbGFzaDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYm9sdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJvbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaXRlbWFwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2l0ZW1hcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVtYnJlbGxhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW1icmVsbGE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXN0ZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xpcGJvYXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlnaHRidWxiLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saWdodGJ1bGItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2hhbmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhjaGFuZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG91ZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb3VkLWRvd25sb2FkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvdWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xvdWQtdXBsb2FkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1tZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItbWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGV0aG9zY29wZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZXRob3Njb3BlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3VpdGNhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdWl0Y2FzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlbGwtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZmZlZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZmZlZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWN1dGxlcnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jdXRsZXJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS10ZXh0LW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXRleHQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1aWxkaW5nLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWlsZGluZy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG9zcGl0YWwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvc3BpdGFsLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbWJ1bGFuY2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbWJ1bGFuY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWRraXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWdodGVyLWpldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpZ2h0ZXItamV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWgtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1cy1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbHVzLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5nbGUtZG91YmxlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3VibGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3VibGUtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWRvdWJsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVza3RvcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRlc2t0b3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sYXB0b3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10YWJsZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWJsZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vYmlsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vYmlsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdW90ZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVvdGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXF1b3RlLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVvdGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcGlubmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Bpbm5lcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1haWwtcmVwbHk6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlcGx5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVwbHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXRodWItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2l0aHViLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvbGRlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyLW9wZW4tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNtaWxlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbWlsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZnJvd24tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZyb3duLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWgtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1laC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2FtZXBhZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdhbWVwYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1rZXlib2FyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIta2V5Ym9hcmQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYWctbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZsYWctbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhZy1jaGVja2VyZWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZXJtaW5hbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRlcm1pbmFsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmVwbHktYWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVwbHktYWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyLWhhbGYtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvY2F0aW9uLWFycm93OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9jYXRpb24tYXJyb3c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JvcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZGUtZm9yazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGUtZm9yazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVubGluazpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2hhaW4tYnJva2VuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hhaW4tYnJva2VuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVlc3Rpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdWVzdGlvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWluZm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbmZvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXhjbGFtYXRpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leGNsYW1hdGlvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1cGVyc2NyaXB0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3VwZXJzY3JpcHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdWJzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdWJzY3JpcHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lcmFzZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lcmFzZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wdXp6bGUtcGllY2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wdXp6bGUtcGllY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taWNyb3Bob25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWljcm9waG9uZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taWNyb3Bob25lLXNsYXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hpZWxkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hpZWxkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpcmUtZXh0aW5ndWlzaGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm9ja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcm9ja2V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWF4Y2RuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWF4Y2RuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWNpcmNsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taHRtbDU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1odG1sNTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNzczM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jc3MzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5jaG9yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5jaG9yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW5sb2NrLWFsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVubG9jay1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idWxsc2V5ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJ1bGxzZXllOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZWxsaXBzaXMtaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVsbGlwc2lzLWg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbGxpcHNpcy12OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWxsaXBzaXMtdjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJzcy1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yc3Mtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGxheS1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbGF5LWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpY2tldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRpY2tldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pbnVzLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pbnVzLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXMtc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZXZlbC11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxldmVsLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGV2ZWwtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxldmVsLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGVjay1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGVjay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVuY2lsLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXh0ZXJuYWwtbGluay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tcGFzczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1kb3duOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtc3F1YXJlLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS11cDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1zcXVhcmUtby11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1yaWdodDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1zcXVhcmUtby1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV1cm86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWV1cjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV1cjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdicDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdicDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRvbGxhcjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdXNkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcnVwZWU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWlucjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlucjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNueTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcm1iOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS15ZW46YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWpweTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWpweTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJ1YmxlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yb3VibGU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJ1YjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJ1YjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdvbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0ta3J3OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIta3J3OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0Y29pbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYnRjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnRjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXRleHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXRleHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFscGhhLWFzYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvcnQtYWxwaGEtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbHBoYS1kZXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbW91bnQtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbW91bnQtZGVzYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvcnQtYW1vdW50LWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1udW1lcmljLWFzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1udW1lcmljLWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYnMtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYnMtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1icy1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW91dHViZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b3V0dWJlLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXlvdXR1YmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b3V0dWJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXhpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS14aW5nLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXhpbmctc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW91dHViZS1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteW91dHViZS1wbGF5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZHJvcGJveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRyb3Bib3g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFjay1vdmVyZmxvdzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0YWNrLW92ZXJmbG93OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5zdGFncmFtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5zdGFncmFtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxpY2tyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxpY2tyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0YnVja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYml0YnVja2V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0YnVja2V0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpdGJ1Y2tldC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10dW1ibHI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10dW1ibHI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10dW1ibHItc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHVtYmxyLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvbmctYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvbmctYXJyb3ctZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvbmctYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb25nLWFycm93LXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9uZy1hcnJvdy1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvbmctYXJyb3ctcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcHBsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFwcGxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpbmRvd3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmRyb2lkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5kcm9pZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbnV4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGludXg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcmliYmJsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRyaWJiYmxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2t5cGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1za3lwZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvdXJzcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb3Vyc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJlbGxvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJlbGxvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmVtYWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmVtYWxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXR0aXA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyYXRpcGF5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ3JhdGlwYXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdW4tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1bi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW9vbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW9vbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFyY2hpdmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12azpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2VpYm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13ZWlibzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlbnJlbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlbnJlbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhZ2VsaW5lczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhZ2VsaW5lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RhY2stZXhjaGFuZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1vLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1vLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10b2dnbGUtbGVmdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcmV0LXNxdWFyZS1vLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kb3QtY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kb3QtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aGVlbGNoYWlyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2hlZWxjaGFpcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZpbWVvLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpbWVvLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR1cmtpc2gtbGlyYTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdHJ5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1cy1zcXVhcmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXMtc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3BhY2Utc2h1dHRsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNsYWNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2xhY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13b3JkcHJlc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13b3JkcHJlc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vcGVuaWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcGVuaWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnN0aXR1dGlvbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmFuazpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdW5pdmVyc2l0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVuaXZlcnNpdHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ3JhZHVhdGlvbi1jYXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15YWhvbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXlhaG9vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVkZGl0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVkZGl0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVkZGl0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZGRpdC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdHVtYmxldXBvbi1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHVtYmxldXBvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0dW1ibGV1cG9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVsaWNpb3VzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGVsaWNpb3VzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGlnZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRpZ2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1waWVkLXBpcGVyLXBwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGllZC1waXBlci1wcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGllZC1waXBlci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcnVwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kcnVwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1qb29tbGE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1qb29tbGE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYW5ndWFnZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxhbmd1YWdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmF4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmF4OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVpbGRpbmc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWlsZGluZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoaWxkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hpbGQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcG9vbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNwb29uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3ViZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWN1YmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jdWJlczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWN1YmVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVoYW5jZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlaGFuY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlaGFuY2Utc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RlYW06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGVhbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0ZWFtLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZWFtLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXV0b21vYmlsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FiOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10YXhpOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGF4aTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyZWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmVlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3BvdGlmeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNwb3RpZnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZXZpYW50YXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGV2aWFudGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvdW5kY2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3VuZGNsb3VkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGF0YWJhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kYXRhYmFzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcGRmLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXBkZi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS13b3JkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXdvcmQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtZXhjZWwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtZXhjZWwtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1wb3dlcnBvaW50LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXBob3RvLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWltYWdlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLWltYWdlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXppcC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWFyY2hpdmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtYXJjaGl2ZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1zb3VuZC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWF1ZGlvLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLWF1ZGlvLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLW1vdmllLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtdmlkZW8tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtdmlkZW8tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtY29kZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1jb2RlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmluZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZGVwZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2RlcGVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tanNmaWRkbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1qc2ZpZGRsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpZmUtYm91eTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tbGlmZS1idW95OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1saWZlLXNhdmVyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zdXBwb3J0OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1saWZlLXJpbmc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saWZlLXJpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaXJjbGUtby1ub3RjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZS1vLW5vdGNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmE6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlc2lzdGFuY2U6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlYmVsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmViZWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZW1waXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW1waXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2l0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS15Yy1zcXVhcmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhY2tlci1uZXdzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFja2VyLW5ld3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVuY2VudC13ZWlibzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXFxOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13ZWNoYXQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXdlaXhpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdlaXhpbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlbmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFwZXItcGxhbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZW5kLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyLXBsYW5lLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXBlci1wbGFuZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGlzdG9yeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhpc3Rvcnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaXJjbGUtdGhpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZS10aGluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhZGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGFyYWdyYXBoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFyYWdyYXBoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2xpZGVyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNsaWRlcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hhcmUtYWx0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvbWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ib21iOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29jY2VyLWJhbGwtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZnV0Ym9sLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mdXRib2wtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXR0eTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJpbm9jdWxhcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iaW5vY3VsYXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1ZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbGlkZXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2xpZGVzaGFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR3aXRjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXR3aXRjaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXllbHA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15ZWxwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbmV3c3BhcGVyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1uZXdzcGFwZXItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdpZmk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aWZpOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGN1bGF0b3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXlwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXlwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXdhbGxldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLXZpc2E6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy12aXNhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtbWFzdGVyY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLW1hc3RlcmNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1kaXNjb3ZlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWRpc2NvdmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtYW1leDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWFtZXg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1wYXlwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy1wYXlwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1zdHJpcGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy1zdHJpcGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWxsLXNsYXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbC1zbGFzaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGwtc2xhc2gtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlbGwtc2xhc2gtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhc2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb3B5cmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb3B5cmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXllZHJvcHBlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZWRyb3BwZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYWludC1icnVzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhaW50LWJydXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmlydGhkYXktY2FrZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpcnRoZGF5LWNha2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcmVhLWNoYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJlYS1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZS1jaGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpZS1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbmUtY2hhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5lLWNoYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGFzdGZtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGFzdGZtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGFzdGZtLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxhc3RmbS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10b2dnbGUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdG9nZ2xlLW9mZjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1vbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRvZ2dsZS1vbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJpY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iaWN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW94aG9zdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlveGhvc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdlbGxpc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdlbGxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hla2VsOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zaGVxZWw6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWlsczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlsczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lYW5wYXRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWVhbnBhdGg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idXlzZWxsYWRzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnV5c2VsbGFkczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29ubmVjdGRldmVsb3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kYXNoY3ViZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRhc2hjdWJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9ydW1iZWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb3J1bWJlZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxlYW5wdWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sZWFucHViOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VsbHN5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VsbHN5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hpcnRzaW5idWxrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hpcnRzaW5idWxrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2ltcGx5YnVpbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaW1wbHlidWlsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNreWF0bGFzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2t5YXRsYXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJ0LXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJ0LXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJ0LWFycm93LWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kaWFtb25kOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGlhbW9uZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoaXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGlwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1zZWNyZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLXNlY3JldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vdG9yY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb3RvcmN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RyZWV0LXZpZXc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdHJlZXQtdmlldzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhlYXJ0YmVhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhlYXJ0YmVhdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZlbnVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmVudXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lcmN1cnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZXJjdXJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW50ZXJzZXg6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYW5zZ2VuZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhbnNnZW5kZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFuc2dlbmRlci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12ZW51cy1kb3VibGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12ZW51cy1kb3VibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLWRvdWJsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtZG91YmxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmVudXMtbWFyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZlbnVzLW1hcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLXN0cm9rZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtc3Ryb2tlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFycy1zdHJva2UtdjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtc3Ryb2tlLXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFycy1zdHJva2UtaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW5ldXRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW5ldXRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdlbmRlcmxlc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nZW5kZXJsZXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYWNlYm9vay1vZmZpY2lhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdC1wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGludGVyZXN0LXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aGF0c2FwcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdoYXRzYXBwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VydmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VydmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci1wbHVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci10aW1lczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItdGltZXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3RlbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmVkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhY29pbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpYWNvaW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyYWluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Vid2F5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Vid2F5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWVkaXVtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWVkaXVtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teWM6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXktY29tYmluYXRvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXktY29tYmluYXRvcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW9wdGluLW1vbnN0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcHRpbi1tb25zdGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb3BlbmNhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcGVuY2FydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4cGVkaXRlZHNzbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4cGVkaXRlZHNzbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktNDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS1mdWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS1mdWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS0zOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS10aHJlZS1xdWFydGVyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktMjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS0xOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LXF1YXJ0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LTA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktZW1wdHk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LWVtcHR5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW91c2UtcG9pbnRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vdXNlLXBvaW50ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pLWN1cnNvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWktY3Vyc29yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2JqZWN0LWdyb3VwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItb2JqZWN0LWdyb3VwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vYmplY3QtdW5ncm91cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0aWNreS1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RpY2t5LW5vdGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RpY2t5LW5vdGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLWpjYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWpjYjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLWRpbmVycy1jbHViOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtZGluZXJzLWNsdWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG9uZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb25lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFsYW5jZS1zY2FsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhbGFuY2Utc2NhbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLTE6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1zdGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1zdGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy0yOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLTM6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ob3VyZ2xhc3MtZW5kOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91cmdsYXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1ncmFiLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtcm9jay1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1yb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXN0b3AtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1wYXBlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1wYXBlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1zY2lzc29ycy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1saXphcmQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtbGl6YXJkLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXNwb2NrLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXNwb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXBvaW50ZXItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtcG9pbnRlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1wZWFjZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1wZWFjZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJhZGVtYXJrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhZGVtYXJrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVnaXN0ZXJlZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZ2lzdGVyZWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JlYXRpdmUtY29tbW9uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nZy1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmlwYWR2aXNvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyaXBhZHZpc29yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2Rub2tsYXNzbmlraTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9kbm9rbGFzc25pa2k7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9kbm9rbGFzc25pa2ktc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2V0LXBvY2tldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdldC1wb2NrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aWtpcGVkaWEtdzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpa2lwZWRpYS13OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2FmYXJpOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2FmYXJpOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hyb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hyb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlyZWZveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpcmVmb3g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vcGVyYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9wZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbnRlcm5ldC1leHBsb3JlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR2OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10ZWxldmlzaW9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVsZXZpc2lvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbnRhbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbnRhbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTUwMHB4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItNTAwcHg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbWF6b246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbWF6b247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhci1wbHVzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FsZW5kYXItbWludXMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhci10aW1lcy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXItY2hlY2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLWNoZWNrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmR1c3RyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluZHVzdHJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFwLXBpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcC1waW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtc2lnbnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXAtc2lnbnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50aW5nLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21tZW50aW5nLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3V6ejpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXp6OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmltZW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12aW1lbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsYWNrLXRpZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJsYWNrLXRpZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvbnRpY29uczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvbnRpY29uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlZGRpdC1hbGllbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZGRpdC1hbGllbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVkZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lZGdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JlZGl0LWNhcmQtYWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kaWVwaWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2RpZXBpZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vZHg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb2R4OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9ydC1hd2Vzb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9ydC1hd2Vzb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNiOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcHJvZHVjdC1odW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcHJvZHVjdC1odW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWl4Y2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taXhjbG91ZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNjcmliZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNjcmliZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhdXNlLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhdXNlLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGF1c2UtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdG9wLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0b3AtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RvcC1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0b3AtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaG9wcGluZy1iYWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1iYWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1iYXNrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYXNodGFnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFzaHRhZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsdWV0b290aDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJsdWV0b290aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsdWV0b290aC1iOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmx1ZXRvb3RoLWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZXJjZW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVyY2VudDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdGxhYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdGxhYjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdwYmVnaW5uZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13cGJlZ2lubmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3Bmb3JtczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdwZm9ybXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbnZpcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZpcmE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW5pdmVyc2FsLWFjY2VzczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2hlZWxjaGFpci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXF1ZXN0aW9uLWNpcmNsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmxpbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ibGluZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXVkaW8tZGVzY3JpcHRpb247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS1jb250cm9sLXBob25lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnJhaWxsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJyYWlsbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVhZm5lc3M6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZGVhZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRlYWY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nbGlkZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsaWRlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2xpZGUtZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsaWRlLWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduaW5nOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduLWxhbmd1YWdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2lnbi1sYW5ndWFnZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvdy12aXNpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb3ctdmlzaW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhZGVvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlhZGVvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhZGVvLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpYWRlby1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbmFwY2hhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNuYXBjaGF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbmFwY2hhdC1naG9zdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNuYXBjaGF0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZWQtcGlwZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWVkLXBpcGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlyc3Qtb3JkZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maXJzdC1vcmRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXlvYXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteW9hc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVtZWlzbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVtZWlzbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtcGx1cy1jaXJjbGU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXBsdXMtb2ZmaWNpYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZm9udC1hd2Vzb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9udC1hd2Vzb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZHNoYWtlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kc2hha2UtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlLW9wZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1vcGVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW52ZWxvcGUtb3Blbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlub2RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlub2RlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRkcmVzcy1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRkcmVzcy1ib29rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRkcmVzcy1ib29rLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZGRyZXNzLWJvb2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZjYXJkOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWNhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZGRyZXNzLWNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12Y2FyZC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkZHJlc3MtY2FyZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVzZXItY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLWNpcmNsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taWQtYmFkZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pZC1iYWRnZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taWQtY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlkLWNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taWQtY2FyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaWQtY2FyZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVvcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdW9yYTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZnJlZS1jb2RlLWNhbXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZWxlZ3JhbTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRlbGVncmFtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItNDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci1mdWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItMzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLTI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLWhhbGY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItMTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLXF1YXJ0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci0wOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLWVtcHR5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hvd2VyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0aHR1YjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tczE1OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBvZGNhc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wb2RjYXN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LW1heGltaXplOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LW1heGltaXplOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LW1pbmltaXplOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LW1pbmltaXplOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LXJlc3RvcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctcmVzdG9yZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LWNsb3NlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LWNsb3NlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYW5kY2FtcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhbmRjYW1wOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ3JhdjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdyYXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ldHN5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXRzeTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWltZGI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbWRiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmF2ZWxyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJhdmVscnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lZXJjYXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWVyY2FzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pY3JvY2hpcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pY3JvY2hpcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNub3dmbGFrZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc25vd2ZsYWtlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdXBlcnBvd2VyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1cGVycG93ZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3BleHBsb3JlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdwZXhwbG9yZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWV0dXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWV0dXA7IH1cbiIsIi8vIFNjcmVlbiBSZWFkZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5zci1vbmx5IHsgQGluY2x1ZGUgc3Itb25seSgpOyB9XG4uc3Itb25seS1mb2N1c2FibGUgeyBAaW5jbHVkZSBzci1vbmx5LWZvY3VzYWJsZSgpOyB9XG4iLCIkZmEtZm9udC1wYXRoOiBcImh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzXCIgIWRlZmF1bHQ7IC8vIGZvciByZWZlcmVuY2luZyBCb290c3RyYXAgQ0ROIGZvbnQgZmlsZXMgZGlyZWN0bHlcbkBpbXBvcnQgXCJ+Zm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lLnNjc3NcIjtcblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDo4cHg7XG4gICAgaGVpZ2h0OjhweDtcbiAgICBjdXJzb3I6IG53c2UtcmVzaXplO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KVxuICB9XG59XG5cbi5hbmd1bGFyLWVkaXRvci10b29sYmFyIHtcbiAgZm9udDogMTAwIDE0cHgvMTVweCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXG4gIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgbWluLXdpZHRoOiAyLjByZW07XG4gICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICB9XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmLmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgID4gLmNvbG9yLWxhYmVsIHtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgICAgJi5mb3JlZ3JvdW5kIHtcbiAgICAgICAgICAgIDphZnRlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU1NTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU1NTU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjViOTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYTk4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2VsZWN0LWhlYWRpbmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICBAc3VwcG9ydHMgbm90KCAtbW96LWFwcGVhcmFuY2U6bm9uZSApIHtcbiAgICAgICAgb3B0Z3JvdXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5kZWZhdWx0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmg1IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmg2IHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0LWZvbnQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICBAc3VwcG9ydHMgbm90KCAtbW96LWFwcGVhcmFuY2U6bm9uZSApIHtcbiAgICAgICAgb3B0Z3JvdXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QtZm9udC1zaXplIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgQHN1cHBvcnRzIG5vdCggLW1vei1hcHBlYXJhbmNlOm5vbmUgKSB7XG4gICAgICAgIG9wdGdyb3VwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTYge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0LWN1c3RvbS1zdHlsZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIEBzdXBwb3J0cyBub3QoIC1tb3otYXBwZWFyYW5jZTpub25lICkge1xuICAgICAgICBvcHRncm91cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLyouc2l6ZTEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTYge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2l6ZTcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfSovXG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb2xvci1sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJhY2tncm91bmQge1xuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgYmFja2dyb3VuZDogIzFiMWIxYjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAuZm9yZWdyb3VuZCB7XG4gICAgICA6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMWIxYjFiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQ6bm90KFtzdHlsZSo9XCJkaXNwbGF5Om5vbmVcIl0pOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXSl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4iXX0= */"]
        });
        return AngularEditorComponent;
      }();
      /***/

    },

    /***/
    "bdER":
    /*!**********************************************************************************!*\
      !*** ./projects/angular-editor-app/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function bdER(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "bdER";
      /***/
    },

    /***/
    "k6Zp":
    /*!*******************************************************************!*\
      !*** ./projects/angular-editor/src/lib/angular-editor.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AngularEditorService */

    /***/
    function k6Zp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorService", function () {
        return AngularEditorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AngularEditorService = /*@__PURE__*/function () {
        var AngularEditorService = /*#__PURE__*/function () {
          function AngularEditorService(http, doc) {
            var _this6 = this;

            _classCallCheck(this, AngularEditorService);

            this.http = http;
            this.doc = doc;
            /**
             * save selection when the editor is focussed out
             */

            this.saveSelection = function () {
              if (_this6.doc.getSelection) {
                var sel = _this6.doc.getSelection();

                if (sel.getRangeAt && sel.rangeCount) {
                  _this6.savedSelection = sel.getRangeAt(0);
                  _this6.selectedText = sel.toString();
                }
              } else if (_this6.doc.getSelection && _this6.doc.createRange) {
                _this6.savedSelection = document.createRange();
              } else {
                _this6.savedSelection = null;
              }
            };
          }
          /**
           * Executed command from editor header buttons exclude toggleEditorMode
           * @param command string from triggerCommand
           */


          _createClass(AngularEditorService, [{
            key: "executeCommand",
            value: function executeCommand(command) {
              var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];

              if (commands.includes(command)) {
                this.doc.execCommand('formatBlock', false, command);
                return;
              }

              this.doc.execCommand(command, false, null);
            }
            /**
             * Create URL link
             * @param url string from UI prompt
             */

          }, {
            key: "createLink",
            value: function createLink(url) {
              if (!url.includes('http')) {
                this.doc.execCommand('createlink', false, url);
              } else {
                var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
                this.insertHtml(newUrl);
              }
            }
            /**
             * insert color either font or background
             *
             * @param color color to be inserted
             * @param where where the color has to be inserted either text/background
             */

          }, {
            key: "insertColor",
            value: function insertColor(color, where) {
              var restored = this.restoreSelection();

              if (restored) {
                if (where === 'textColor') {
                  this.doc.execCommand('foreColor', false, color);
                } else {
                  this.doc.execCommand('hiliteColor', false, color);
                }
              }
            }
            /**
             * Set font name
             * @param fontName string
             */

          }, {
            key: "setFontName",
            value: function setFontName(fontName) {
              this.doc.execCommand('fontName', false, fontName);
            }
            /**
             * Set font size
             * @param fontSize string
             */

          }, {
            key: "setFontSize",
            value: function setFontSize(fontSize) {
              this.doc.execCommand('fontSize', false, fontSize);
            }
            /**
             * Create raw HTML
             * @param html HTML string
             */

          }, {
            key: "insertHtml",
            value: function insertHtml(html) {
              var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);

              if (!isHTMLInserted) {
                throw new Error('Unable to perform the operation');
              }
            }
            /**
             * restore selection when the editor is focused in
             *
             * saved selection when the editor is focused out
             */

          }, {
            key: "restoreSelection",
            value: function restoreSelection() {
              if (this.savedSelection) {
                if (this.doc.getSelection) {
                  var sel = this.doc.getSelection();
                  sel.removeAllRanges();
                  sel.addRange(this.savedSelection);
                  return true;
                } else if (this.doc.getSelection
                /*&& this.savedSelection.select*/
                ) {
                    // this.savedSelection.select();
                    return true;
                  }
              } else {
                return false;
              }
            }
            /**
             * setTimeout used for execute 'saveSelection' method in next event loop iteration
             */

          }, {
            key: "executeInNextQueueIteration",
            value: function executeInNextQueueIteration(callbackFn) {
              var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
              setTimeout(callbackFn, timeout);
            }
            /** check any selection is made or not */

          }, {
            key: "checkSelection",
            value: function checkSelection() {
              var selectedText = this.savedSelection.toString();

              if (selectedText.length === 0) {
                throw new Error('No Selection Made');
              }

              return true;
            }
            /**
             * Upload file to uploadUrl
             * @param file The file
             */

          }, {
            key: "uploadImage",
            value: function uploadImage(file) {
              var uploadData = new FormData();
              uploadData.append('file', file, file.name);
              return this.http.post(this.uploadUrl, uploadData, {
                reportProgress: true,
                observe: 'events',
                withCredentials: this.uploadWithCredentials
              });
            }
            /**
             * Insert image with Url
             * @param imageUrl The imageUrl.
             */

          }, {
            key: "insertImage",
            value: function insertImage(imageUrl) {
              this.doc.execCommand('insertImage', false, imageUrl);
            }
          }, {
            key: "setDefaultParagraphSeparator",
            value: function setDefaultParagraphSeparator(separator) {
              this.doc.execCommand('defaultParagraphSeparator', false, separator);
            }
          }, {
            key: "createCustomClass",
            value: function createCustomClass(customClass) {
              var newTag = this.selectedText;

              if (customClass) {
                var tagName = customClass.tag ? customClass.tag : 'span';
                newTag = '<' + tagName + ' class="' + customClass["class"] + '">' + this.selectedText + '</' + tagName + '>';
              }

              this.insertHtml(newTag);
            }
          }, {
            key: "insertVideo",
            value: function insertVideo(videoUrl) {
              if (videoUrl.match('www.youtube.com')) {
                this.insertYouTubeVideoTag(videoUrl);
              }

              if (videoUrl.match('vimeo.com')) {
                this.insertVimeoVideoTag(videoUrl);
              }
            }
          }, {
            key: "insertYouTubeVideoTag",
            value: function insertYouTubeVideoTag(videoUrl) {
              var id = videoUrl.split('v=')[1];
              var imageUrl = "https://img.youtube.com/vi/".concat(id, "/0.jpg");
              var thumbnail = "\n      <div style='position: relative'>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"click to watch\"/>\n          <img style='position: absolute; left:200px; top:140px'\n          src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        </a>\n      </div>");
              this.insertHtml(thumbnail);
            }
          }, {
            key: "insertVimeoVideoTag",
            value: function insertVimeoVideoTag(videoUrl) {
              var _this7 = this;

              var sub = this.http.get("https://vimeo.com/api/oembed.json?url=".concat(videoUrl)).subscribe(function (data) {
                var imageUrl = data.thumbnail_url_with_play_button;
                var thumbnail = "<div>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"").concat(data.title, "\"/>\n        </a>\n      </div>");

                _this7.insertHtml(thumbnail);

                sub.unsubscribe();
              });
            }
          }, {
            key: "nextNode",
            value: function nextNode(node) {
              if (node.hasChildNodes()) {
                return node.firstChild;
              } else {
                while (node && !node.nextSibling) {
                  node = node.parentNode;
                }

                if (!node) {
                  return null;
                }

                return node.nextSibling;
              }
            }
          }, {
            key: "getRangeSelectedNodes",
            value: function getRangeSelectedNodes(range, includePartiallySelectedContainers) {
              var node = range.startContainer;
              var endNode = range.endContainer;
              var rangeNodes = []; // Special case for a range that is contained within a single node

              if (node === endNode) {
                rangeNodes = [node];
              } else {
                // Iterate nodes until we hit the end container
                while (node && node !== endNode) {
                  rangeNodes.push(node = this.nextNode(node));
                } // Add partially selected nodes at the start of the range


                node = range.startContainer;

                while (node && node !== range.commonAncestorContainer) {
                  rangeNodes.unshift(node);
                  node = node.parentNode;
                }
              } // Add ancestors of the range container, if required


              if (includePartiallySelectedContainers) {
                node = range.commonAncestorContainer;

                while (node) {
                  rangeNodes.push(node);
                  node = node.parentNode;
                }
              }

              return rangeNodes;
            }
          }, {
            key: "getSelectedNodes",
            value: function getSelectedNodes() {
              var nodes = [];

              if (this.doc.getSelection) {
                var sel = this.doc.getSelection();

                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                  nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
                }
              }

              return nodes;
            }
          }, {
            key: "replaceWithOwnChildren",
            value: function replaceWithOwnChildren(el) {
              var parent = el.parentNode;

              while (el.hasChildNodes()) {
                parent.insertBefore(el.firstChild, el);
              }

              parent.removeChild(el);
            }
          }, {
            key: "removeSelectedElements",
            value: function removeSelectedElements(tagNames) {
              var _this8 = this;

              var tagNamesArray = tagNames.toLowerCase().split(',');
              this.getSelectedNodes().forEach(function (node) {
                if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
                  // Remove the node and replace it with its children
                  _this8.replaceWithOwnChildren(node);
                }
              });
            }
          }]);

          return AngularEditorService;
        }();

        AngularEditorService.ɵfac = function AngularEditorService_Factory(t) {
          return new (t || AngularEditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        AngularEditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AngularEditorService,
          factory: AngularEditorService.ɵfac
        });
        return AngularEditorService;
      }();
      /***/

    },

    /***/
    "mqih":
    /*!*********************************************************************!*\
      !*** ./projects/angular-editor-app/src/environments/environment.ts ***!
      \*********************************************************************/

    /*! exports provided: environment */

    /***/
    function mqih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "sc1s":
    /*!***************************************************!*\
      !*** ./projects/angular-editor/src/lib/config.ts ***!
      \***************************************************/

    /*! exports provided: angularEditorConfig */

    /***/
    function sc1s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "angularEditorConfig", function () {
        return angularEditorConfig;
      });

      var angularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [{
          "class": 'arial',
          name: 'Arial'
        }, {
          "class": 'times-new-roman',
          name: 'Times New Roman'
        }, {
          "class": 'calibri',
          name: 'Calibri'
        }, {
          "class": 'comic-sans-ms',
          name: 'Comic Sans MS'
        }],
        uploadUrl: 'v1/image',
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        outline: true
      };
      /***/
    },

    /***/
    "t6FZ":
    /*!**************************************************************!*\
      !*** ./projects/angular-editor-app/src/app/app.component.ts ***!
      \**************************************************************/

    /*! exports provided: AppComponent */

    /***/
    function t6FZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_editor_src_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../angular-editor/src/lib/angular-editor.component */
      "aTUH");

      var AppComponent = /*@__PURE__*/function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(formBuilder) {
            _classCallCheck(this, AppComponent);

            this.formBuilder = formBuilder;
            this.title = 'app';
            this.htmlContent1 = '';
            this.htmlContent2 = '';
            this.config1 = {
              editable: true,
              spellcheck: true,
              minHeight: '5rem',
              maxHeight: '15rem',
              placeholder: 'Enter text here...',
              translate: 'no',
              sanitize: false,
              // toolbarPosition: 'top',
              outline: true,
              defaultFontName: 'Comic Sans MS',
              defaultFontSize: '5',
              // showToolbar: false,
              defaultParagraphSeparator: 'p',
              customClasses: [{
                name: 'quote',
                "class": 'quote'
              }, {
                name: 'redText',
                "class": 'redText'
              }, {
                name: 'titleText',
                "class": 'titleText',
                tag: 'h1'
              }],
              toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
            };
            this.config2 = {
              editable: true,
              spellcheck: true,
              minHeight: '5rem',
              maxHeight: '15rem',
              placeholder: 'Enter text here...',
              translate: 'no',
              sanitize: true,
              toolbarPosition: 'bottom',
              defaultFontName: 'Comic Sans MS',
              defaultFontSize: '5',
              defaultParagraphSeparator: 'p',
              customClasses: [{
                name: 'quote',
                "class": 'quote'
              }, {
                name: 'redText',
                "class": 'redText'
              }, {
                name: 'titleText',
                "class": 'titleText',
                tag: 'h1'
              }]
            };
          }

          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.form = this.formBuilder.group({
                signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
              console.log(this.htmlContent1);
            }
          }, {
            key: "onChange",
            value: function onChange(event) {
              console.log('changed');
            }
          }, {
            key: "onBlur",
            value: function onBlur(event) {
              console.log('blur ' + event);
            }
          }, {
            key: "onChange2",
            value: function onChange2(event) {
              console.warn(this.form.value);
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 20,
          vars: 7,
          consts: [[1, "container"], ["href", "https://github.com/kolkov/angular-editor"], ["for", "test_input"], ["id", "test_input"], ["id", "editor1", 3, "ngModel", "config", "ngModelChange", "blur"], [1, "html"], [3, "formGroup"], ["autofocus", "true", "id", "editor2", "formControlName", "signature", 3, "config", "ngModelChange"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular Editor");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get it here");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Test input ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "angular-editor", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_angular_editor_ngModelChange_11_listener($event) {
                return ctx.htmlContent1 = $event;
              })("ngModelChange", function AppComponent_Template_angular_editor_ngModelChange_11_listener($event) {
                return ctx.onChange($event);
              })("blur", function AppComponent_Template_angular_editor_blur_11_listener($event) {
                return ctx.onBlur($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "angular-editor", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_angular_editor_ngModelChange_15_listener($event) {
                return ctx.onChange2($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.htmlContent1)("config", ctx.config1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HTML Output: ", ctx.htmlContent1, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Form Value: ", ctx.form.value.signature, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Form Status: ", ctx.form.status, " ");
            }
          },
          directives: [_angular_editor_src_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_2__["AngularEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return AppComponent;
      }();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map