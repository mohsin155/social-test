import { Component } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-test';
  constructor(
    private fb: FacebookService
  ) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '439167654430785',
      version: 'v2.9'
    });

  }


  /**
   * Show the share dialog
   */
   share() {

    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/zyramedia/ng2-facebook-sdk'
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }
   
    private handleError(error: any) {
      console.error('Error processing action', error);
    }

}
