import { MessageViewModel } from './../../model/message-view.model';
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class MessageBoxComponent {
    @Input() message: MessageViewModel;
  }  