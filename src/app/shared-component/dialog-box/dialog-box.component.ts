import { MessageViewModel } from './../../model/message-view.model';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { ConversationUser } from 'src/app/model/conversation-user.model';
import { Message } from 'src/app/model/message.model';
import { Store } from '@ngxs/store';
import { AddNewMessage } from 'src/app/states/conversation-state/conversation.action';
import { ConversationState } from 'src/app/states/conversation-state/conversation.state';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnDestroy {

  @Input() user: ConversationUser;
  messageForm: FormGroup;
  newMessage: FormControl;
  messagesList$: Observable<MessageViewModel[]>;
  subscriptions: Subscription[] = [];
  
  constructor(private readonly store: Store) {
    //initialisation on the form
    this.newMessage = new FormControl('', Validators.required);
    this.messageForm = new FormGroup({
        newMessage: this.newMessage
    });

    //get the async value of the messages in the state and map them to view model
    this.messagesList$ = this.store.select(ConversationState.messages).pipe(
     map((msgList: Message[]) => {
      return msgList
        .sort((msg1: Message, msg2: Message) => msg1.date.getTime() - msg2.date.getTime())
        .map((msg: Message) => {
          return {
            color: msg.writer.colorMessage,
            content: msg.writer && msg.writer.name && msg.content ? msg.writer.name.concat(' : ').concat(msg.content): 'message error',
          }
        })
      })
    );
  }

  //send the message of the input to the state to save it
  sendMessage(): void {
    let messageToAdd: Message = {
      writer: this.user,
      content: this.newMessage.value,
      date: new Date()
    };
    this.subscriptions.push(this.store.dispatch(new AddNewMessage(messageToAdd)).subscribe(() => {
      this.newMessage.reset();
    }));
  }

  ngOnDestroy() {
    //unsubscribe all subscribtion at the end of the component life cyle
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

}