import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TicketModel} from "../../../../models/ticket.model";
import {UserService} from "../../../../services/user/user.service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";
import {CurrentUserService} from "../../../../services/current-user/current.user.service";
import {CurrentWalletService} from "../../../../services/current-wallet/current-wallet.service";
import {CompleteTicket} from "../../../../models/complete-ticket/complete.ticket";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public completeTickets: CompleteTicket[];
  public isLoading: boolean;

  constructor(private usersService: UserService,
              private currentUserService: CurrentUserService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getTicketsByUser();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getTicketsByUser() {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.currentUserService.getCurrentUser().subscribe(user => {
      this.usersService.getCompleteTicketsByUserId(user.id)
        .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe(completeTickets => {
          this.completeTickets = completeTickets;
        })
    }));
  }
}
