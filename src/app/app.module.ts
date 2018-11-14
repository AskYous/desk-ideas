import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        FormsModule,
        MatTooltipModule,
        MatTableModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatDialogModule,
        MatCardModule,
        MatAutocompleteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
