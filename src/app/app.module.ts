import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule, Store } from '@ngxs/store';
import { DialogBoxComponent } from './shared-component/dialog-box/dialog-box.component';
import { ConversationState } from './states/conversation-state/conversation.state';
import { MessageBoxComponent } from './shared-component/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ConversationState]),
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
