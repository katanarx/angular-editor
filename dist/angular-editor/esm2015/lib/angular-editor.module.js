import { NgModule } from '@angular/core';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import * as i0 from "@angular/core";
export class AngularEditorModule {
}
AngularEditorModule.ɵfac = function AngularEditorModule_Factory(t) { return new (t || AngularEditorModule)(); };
AngularEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularEditorModule });
AngularEditorModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule, FormsModule, ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularEditorModule, { declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularEditorComponent, AngularEditorToolbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularEditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule, FormsModule, ReactiveFormsModule
                ],
                declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
                exports: [AngularEditorComponent, AngularEditorToolbarComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3Ivc3JjL2xpYi9hbmd1bGFyLWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQVNwRSxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3VEQUFuQixtQkFBbUI7MkRBTnJCO1lBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7U0FDL0M7d0ZBSVUsbUJBQW1CLG1CQUhmLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixhQUZyRixZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixhQUd0QyxzQkFBc0IsRUFBRSw2QkFBNkI7dUZBRXBELG1CQUFtQjtjQVAvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CO2lCQUMvQztnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDeEYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLENBQUM7YUFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckVkaXRvckNvbXBvbmVudH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHtBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50LCBBZVNlbGVjdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyRWRpdG9yQ29tcG9uZW50LCBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvck1vZHVsZSB7XG59XG4iXX0=