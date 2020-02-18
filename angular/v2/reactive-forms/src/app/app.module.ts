import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { IdentityRevealedDirective } from './identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormValidationComponent,
    ForbiddenNameDirective,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
