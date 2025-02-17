import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class MessagesListComponent {
  messagesService = inject(MessagesService);
  // gonna be used with async pipe
  messages$ = this.messagesService.messages$;
  messages: string[] = [];

  // Creating a subscription manually
  // private cdRef = inject(ChangeDetectorRef);
  // destroyRef = inject(DestroyRef);

  // ngOnInit() {
  //   const messagesSubscription = this.messagesService.messages$.subscribe(
  //     (messages) => {
  //       this.messages = messages;
  //       this.cdRef.markForCheck();
  //     }
  //   );

  //   this.destroyRef.onDestroy(() => {
  //     console.log('Unsubscribing from messages$.');
  //     messagesSubscription.unsubscribe();
  //   });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
