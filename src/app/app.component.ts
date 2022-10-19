
import { Component, OnInit } from '@angular/core';
import { ColorMessageEnum } from './enum/color-message.enum';
import { ConversationUser } from './model/conversation-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = "test lucca";
  userA: ConversationUser;
  userB: ConversationUser;
  
  ngOnInit(): void {
    //initialisation of the user for the exercice
    this.userA = {name: "Agathe", colorMessage: ColorMessageEnum.RED};
    this.userB = {name: "Baptiste", colorMessage: ColorMessageEnum.GREEN};
  }
}
