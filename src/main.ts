import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';
if (environment.production) {
  enableProdMode();
}




Amplify.configure({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Auth: {
    region: environment.region,
    userPoolId: environment.userPoolId,
    userPoolWebClientId: environment.userPoolWebClientId,
  }
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
