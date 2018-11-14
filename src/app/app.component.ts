import { Component } from "@angular/core";
import { BoxAuthService } from "./box-auth.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    public title = "desk-ideas";
    constructor(private BoxAuth: BoxAuthService) {}
    public login() {
        this.BoxAuth.signIn();
    }
}
