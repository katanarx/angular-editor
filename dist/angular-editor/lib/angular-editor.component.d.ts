import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AngularEditorConfig } from './config';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AngularEditorService } from './angular-editor.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class AngularEditorComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
    private r;
    private editorService;
    private doc;
    private sanitizer;
    private cdRef;
    private autoFocus;
    private onChange;
    private onTouched;
    modeVisual: boolean;
    showPlaceholder: boolean;
    disabled: boolean;
    focused: boolean;
    touched: boolean;
    changed: boolean;
    focusInstance: any;
    blurInstance: any;
    id: string;
    config: AngularEditorConfig;
    placeholder: string;
    tabIndex: number | null;
    html: any;
    textArea: ElementRef;
    editorWrapper: ElementRef;
    editorToolbar: AngularEditorToolbarComponent;
    viewMode: EventEmitter<boolean>;
    /** emits `blur` event when focused out from the textarea */
    blurEvent: EventEmitter<FocusEvent>;
    /** emits `focus` event when focused in to the textarea */
    focusEvent: EventEmitter<FocusEvent>;
    tabindex: number;
    onFocus(): void;
    constructor(r: Renderer2, editorService: AngularEditorService, doc: any, sanitizer: DomSanitizer, cdRef: ChangeDetectorRef, defaultTabIndex: string, autoFocus: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onPaste(event: ClipboardEvent): string;
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    executeCommand(command: string): void;
    /**
     * focus event
     */
    onTextAreaFocus(event: FocusEvent): void;
    /**
     * @description fires when cursor leaves textarea
     */
    onTextAreaMouseOut(event: MouseEvent): void;
    /**
     * blur event
     */
    onTextAreaBlur(event: FocusEvent): void;
    /**
     *  focus the text area when the editor is focused
     */
    focus(): void;
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */
    onContentChange(element: HTMLElement): void;
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    registerOnChange(fn: any): void;
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    registerOnTouched(fn: any): void;
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    writeValue(value: any): void;
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    refreshView(value: string): void;
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    togglePlaceholder(value: boolean): void;
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    toggleEditorMode(bToSource: boolean): void;
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    exec(): void;
    private configure;
    getFonts(): {
        label: string;
        value: string;
    }[];
    getCustomTags(): string;
    ngOnDestroy(): void;
    filterStyles(html: string): string;
    static ɵfac: i0.ɵɵFactoryDef<AngularEditorComponent, [null, null, null, null, null, { attribute: "tabindex"; }, { attribute: "autofocus"; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AngularEditorComponent, "angular-editor", never, { "id": "id"; "config": "config"; "placeholder": "placeholder"; "tabIndex": "tabIndex"; }, { "html": "html"; "viewMode": "viewMode"; "blurEvent": "blur"; "focusEvent": "focus"; }, never, never>;
}
//# sourceMappingURL=angular-editor.component.d.ts.map