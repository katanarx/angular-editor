import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["labelButton"];
const _c1 = function (a0, a1) { return { "selected": a0, "focused": a1 }; };
function AeSelectComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const item_r3 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.optionSelect(item_r3, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function AeSelectComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, "No items for select");
    i0.ɵɵelementEnd();
} }
const _c2 = function (a0) { return { "ae-expanded": a0 }; };
export class AeSelectComponent {
    constructor(elRef, r) {
        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block';
        // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename
        this.changeEvent = new EventEmitter();
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    get label() {
        return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
    }
    get value() {
        return this.selectedOption.value;
    }
    ngOnInit() {
        this.selectedOption = this.options[0];
        if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
        }
    }
    hide() {
        this.hidden = 'none';
    }
    optionSelect(option, event) {
        event.stopPropagation();
        this.setValue(option.value);
        this.onChange(this.selectedOption.value);
        this.changeEvent.emit(this.selectedOption.value);
        this.onTouched();
        this.opened = false;
    }
    toggleOpen(event) {
        // event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.opened = !this.opened;
    }
    onClick($event) {
        if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
        }
    }
    close() {
        this.opened = false;
    }
    get isOpen() {
        return this.opened;
    }
    writeValue(value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        this.setValue(value);
    }
    setValue(value) {
        let index = 0;
        const selectedEl = this.options.find((el, i) => {
            index = i;
            return el.value === value;
        });
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.labelButton.nativeElement.disabled = isDisabled;
        const div = this.labelButton.nativeElement;
        const action = isDisabled ? 'addClass' : 'removeClass';
        this.r[action](div, 'disabled');
        this.disabled = isDisabled;
    }
    handleKeyDown($event) {
        if (!this.opened) {
            return;
        }
        // console.log($event.key);
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
        }
        // } else if ($event.key && $event.key.length === 1) {
        // this._keyPress$.next($event.key.toLocaleLowerCase());
        // }
    }
    _handleArrowDown($event) {
        if (this.optionId < this.options.length - 1) {
            this.optionId++;
        }
    }
    _handleArrowUp($event) {
        if (this.optionId >= 1) {
            this.optionId--;
        }
    }
    _handleSpace($event) {
    }
    _handleEnter($event) {
        this.optionSelect(this.options[this.optionId], $event);
    }
    _handleTab($event) {
    }
    _handleBackspace() {
    }
}
AeSelectComponent.ɵfac = function AeSelectComponent_Factory(t) { return new (t || AeSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
AeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AeSelectComponent, selectors: [["ae-select"]], viewQuery: function AeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labelButton = _t.first);
    } }, hostVars: 2, hostBindings: function AeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function AeSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, i0.ɵɵresolveDocument)("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.hidden);
    } }, inputs: { options: "options", isHidden: ["hidden", "isHidden"] }, outputs: { changeEvent: "change" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AeSelectComponent),
                multi: true,
            }
        ])], decls: 10, vars: 7, consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]], template: function AeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "button", 1, 2);
        i0.ɵɵlistener("click", function AeSelectComponent_Template_button_click_1_listener($event) { return ctx.toggleOpen($event); });
        i0.ɵɵtext(3);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 3);
        i0.ɵɵelement(5, "polygon", 4);
        i0.ɵɵelement(6, "polygon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(7, "span", 6);
        i0.ɵɵtemplate(8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);
        i0.ɵɵtemplate(9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx.isOpen));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("tabIndex", -1);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.label, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.length);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf], styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:21px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'ae-select',
                templateUrl: './ae-select.component.html',
                styleUrls: ['./ae-select.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AeSelectComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { options: [{
            type: Input
        }], isHidden: [{
            type: Input,
            args: ['hidden']
        }], hidden: [{
            type: HostBinding,
            args: ['style.display']
        }], changeEvent: [{
            type: Output,
            args: ['change']
        }], labelButton: [{
            type: ViewChild,
            args: ['labelButton', { static: true }]
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], handleKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yL3NyYy9saWIvYWUtc2VsZWN0L2FlLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci9zcmMvbGliL2FlLXNlbGVjdC9hZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUFFLFdBQVcsRUFDdkIsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7OztJQ04vQixpQ0FHMkM7SUFBckMsOE9BQW9DO0lBQ3BDLFlBQ047SUFBQSxpQkFBUzs7Ozs7SUFISCw4R0FBeUU7SUFFekUsZUFDTjtJQURNLDhDQUNOOzs7SUFDQSxnQ0FBb0Q7SUFBQSxtQ0FBbUI7SUFBQSxpQkFBTzs7O0FEb0JsRixNQUFNLE9BQU8saUJBQWlCO0lBMEI1QixZQUFvQixLQUFpQixFQUNqQixDQUFZO1FBRFosVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixNQUFDLEdBQUQsQ0FBQyxDQUFXO1FBMUJ2QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUt0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFNYixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWUsV0FBTSxHQUFHLGNBQWMsQ0FBQztRQUV0RCw4RkFBOEY7UUFDNUUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0VuRCxhQUFR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QkFBK0Q7UUFDakUsaUJBQU07UUFDUixpQkFBUztRQUNULG9CQUFnQztRQUFoQywrQkFBZ0M7UUFDOUIsd0VBS1M7UUFDVCxvRUFBOEU7UUFDaEYsaUJBQU87UUFDVCxpQkFBTzs7UUFqQnlCLGdFQUFrQztRQUN4RCxlQUFlO1FBQWYsNkJBQWU7UUFBNkcsZUFDbEk7UUFEa0kseUNBQ2xJO1FBUXVCLGVBQVk7UUFBWixxQ0FBWTtRQUtOLGVBQXFCO1FBQXJCLDBDQUFxQjs7dUZEb0J6QyxpQkFBaUI7Y0FiN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjtxRkFFVSxPQUFPO2tCQUFmLEtBQUs7WUFFVyxRQUFRO2tCQUF4QixLQUFLO21CQUFDLFFBQVE7WUFnQmUsTUFBTTtrQkFBbkMsV0FBVzttQkFBQyxlQUFlO1lBR1YsV0FBVztrQkFBNUIsTUFBTTttQkFBQyxRQUFRO1lBRTBCLFdBQVc7a0JBQXBELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQW1DeEMsT0FBTztrQkFETixZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBd0QxQyxhQUFhO2tCQURaLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXR0cmlidXRlLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtpc0RlZmluZWR9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWUtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWVTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNlbGVjdE9wdGlvbltdID0gW107XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnaGlkZGVuJykgaXNIaWRkZW46IGJvb2xlYW47XG5cbiAgc2VsZWN0ZWRPcHRpb246IFNlbGVjdE9wdGlvbjtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgb3B0aW9uSWQgPSAwO1xuXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24uaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsIDogJ1NlbGVjdCc7XG4gIH1cblxuICBvcGVuZWQgPSBmYWxzZTtcblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGhpZGRlbiA9ICdpbmxpbmUtYmxvY2snO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW5hdGl2ZSwgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnY2hhbmdlJykgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnbGFiZWxCdXR0b24nLCB7c3RhdGljOiB0cnVlfSkgbGFiZWxCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zWzBdO1xuICAgIGlmIChpc0RlZmluZWQodGhpcy5pc0hpZGRlbikgJiYgdGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmhpZGRlbiA9ICdub25lJztcbiAgfVxuXG4gIG9wdGlvblNlbGVjdChvcHRpb246IFNlbGVjdE9wdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihldmVudDogTW91c2VFdmVudCkge1xuICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbmVkO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCBzZWxlY3RlZEVsID0gdGhpcy5vcHRpb25zLmZpbmQoKGVsLCBpKSA9PiB7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICByZXR1cm4gZWwudmFsdWUgPT09IHZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChzZWxlY3RlZEVsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gc2VsZWN0ZWRFbDtcbiAgICAgIHRoaXMub3B0aW9uSWQgPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge1xuICB9XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubGFiZWxCdXR0b24ubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5sYWJlbEJ1dHRvbi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGFjdGlvbiA9IGlzRGlzYWJsZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICB0aGlzLnJbYWN0aW9uXShkaXYsICdkaXNhYmxlZCcpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleURvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQua2V5KTtcbiAgICAvLyBpZiAoS2V5Q29kZVskZXZlbnQua2V5XSkge1xuICAgIHN3aXRjaCAoJGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2hhbmRsZUFycm93VXAoJGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgIHRoaXMuX2hhbmRsZVNwYWNlKCRldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIHRoaXMuX2hhbmRsZVRhYigkZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgdGhpcy5faGFuZGxlQmFja3NwYWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyB9IGVsc2UgaWYgKCRldmVudC5rZXkgJiYgJGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyB0aGlzLl9rZXlQcmVzcyQubmV4dCgkZXZlbnQua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgIC8vIH1cbiAgfVxuXG4gIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uSWQgPCB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5vcHRpb25JZCsrO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVBcnJvd1VwKCRldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbklkID49IDEpIHtcbiAgICAgIHRoaXMub3B0aW9uSWQtLTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlU3BhY2UoJGV2ZW50KSB7XG5cbiAgfVxuXG4gIF9oYW5kbGVFbnRlcigkZXZlbnQpIHtcbiAgICB0aGlzLm9wdGlvblNlbGVjdCh0aGlzLm9wdGlvbnNbdGhpcy5vcHRpb25JZF0sICRldmVudCk7XG4gIH1cblxuICBfaGFuZGxlVGFiKCRldmVudCkge1xuXG4gIH1cblxuICBfaGFuZGxlQmFja3NwYWNlKCkge1xuXG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwiYWUtZm9udCBhZS1waWNrZXJcIiBbbmdDbGFzc109XCJ7J2FlLWV4cGFuZGVkJzppc09wZW59XCI+XG4gIDxidXR0b24gW3RhYkluZGV4XT1cIi0xXCIgI2xhYmVsQnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZS1waWNrZXItbGFiZWxcIiAoY2xpY2spPVwidG9nZ2xlT3BlbigkZXZlbnQpO1wiPnt7bGFiZWx9fVxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxOCAxOFwiPlxuICAgICA8IS0tIDx1c2UgeD1cIjBcIiB5PVwiMFwiIHhsaW5rOmhyZWY9XCIuLi9hc3NldHMvaWNvbnMuc3ZnI2hvbVwiPjwvdXNlPi0tPlxuICAgICAgPHBvbHlnb24gY2xhc3M9XCJhZS1zdHJva2VcIiBwb2ludHM9XCI3IDExIDkgMTMgMTEgMTEgNyAxMVwiPjwvcG9seWdvbj5cbiAgICAgIDxwb2x5Z29uIGNsYXNzPVwiYWUtc3Ryb2tlXCIgcG9pbnRzPVwiNyA3IDkgNSAxMSA3IDcgN1wiPjwvcG9seWdvbj5cbiAgICA8L3N2Zz5cbiAgPC9idXR0b24+XG4gIDxzcGFuIGNsYXNzPVwiYWUtcGlja2VyLW9wdGlvbnNcIj5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWUtcGlja2VyLWl0ZW1cIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBpdGVtLnZhbHVlID09PSB2YWx1ZSwgJ2ZvY3VzZWQnOiBpID09PSBvcHRpb25JZH1cIlxuICAgICAgICAgIChjbGljayk9XCJvcHRpb25TZWxlY3QoaXRlbSwgJGV2ZW50KVwiPlxuICAgICAgICAgIHt7aXRlbS5sYWJlbH19XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKm5nSWY9XCIhb3B0aW9ucy5sZW5ndGhcIj5ObyBpdGVtcyBmb3Igc2VsZWN0PC9zcGFuPlxuICA8L3NwYW4+XG48L3NwYW4+XG4iXX0=