import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Message } from 'src/app/model/message.model';
import { AddNewMessage } from './conversation.action';
import { ConversationStateModel } from './conversation.state.model';

const defaultState: ConversationStateModel = {
    messages: []
}

@State<ConversationStateModel>({
  name: 'ConversationState',
  defaults: defaultState
})
@Injectable()
export class ConversationState {

  @Selector()
  static messages(state: ConversationStateModel): Message[] {
    return state.messages;
  }

  //Action to add a new message to the list of messages
  @Action(AddNewMessage)
  addNewMessage({getState, patchState}: StateContext<ConversationStateModel>, action: AddNewMessage) {
      const state = getState();

      //add the message to the liste of already send messages
      patchState({
          ...state,
          messages: state.messages.concat(action.newMessage)
      });
  }
}