import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { youtubeDataServiceInjectables } from './app/shared/youtube-data.service';
import { YoutubeAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(YoutubeAppComponent, [HTTP_PROVIDERS, youtubeDataServiceInjectables]);

