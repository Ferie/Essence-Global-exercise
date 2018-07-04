// Import Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import Routing Module
import { AppRoutingModule } from './app-routing.module';

// Import Services
import {
    DataService
} from './services';

// Import Pipes
import { SearchPipe, OrderByPipe } from './pipes';

// Import Components
import { AppComponent } from './app.component';
import {
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    OverlayComponent,
    ProductComponent
} from './components';

@NgModule({
    declarations: [
        // Main Component
        AppComponent,

        // Pipes
        SearchPipe,
        OrderByPipe,

        // Page Components
        HomeComponent,
        AboutComponent,

        // Components
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        OverlayComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
