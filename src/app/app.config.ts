import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(
            withInterceptors([
                authInterceptor
            ])
        ),
        provideAnimations(),
        provideToastr({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            closeButton: true,
            progressBar: true
        }),
    ]
};
