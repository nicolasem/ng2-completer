import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatInputModule, MatListModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollapseModule } from "ng2-bootstrap/collapse";

import { AppComponent } from "./app-cmp";
import { MaterialCmp } from "./material-cmp";
import { NativeCmp } from "./native-cmp";
import { routing } from "./app.routing";
import { Ng2CompleterModule } from "../src/ng2-completer";
import { CompleterCmpMd } from "./completer-cmp-md";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CompleterCmpMd, NativeCmp, MaterialCmp],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CompleterModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    routing,
    CollapseModule
  ]
})
export class AppModule { }
