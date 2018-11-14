import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BoxConfig } from "../../box.config";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class BoxAuthService {
    private user = new BehaviorSubject(null);
    private signInUrl = [
        "https://account.box.com/api/oauth2/authorize?response_type=code",
        `client_id=${BoxConfig.oauthClientId}`,
        `redirect_uri=${environment.apiOrigin}/login`,
        "state=OMGYousefIsKewl"
    ].join("&");

    constructor() {}

    public signIn() {
        location.href = this.signInUrl;
    }
}
