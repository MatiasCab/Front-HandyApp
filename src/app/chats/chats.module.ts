import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './components/chats/chats.component';
import { SearchChatsComponent } from './components/search-chats/search-chats.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';


@NgModule({
  declarations: [
    ChatsComponent,
    SearchChatsComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
