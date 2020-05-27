import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletModel} from "../../../../models/wallet.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {WalletService} from "../../../../services/wallet/wallet.service";
import {UserService} from "../../../../services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";
import {Subscription} from "rxjs";
import {Validation} from "../../../../form-validation/validation";
import {finalize} from "rxjs/operators";
import {CreditCard} from "../../../../models/credit-card/credit.card";
import {DepositModel} from "../../../../models/deposit/deposit.model";
import {AuthService} from "../../../../services/security/auth-service";
import {LoginService} from "../../../../services/security/login-service";
import {UserModel} from "../../../../models/user.model";
import {StorageService} from "../../../../services/security/storage.service";
import {Router} from "@angular/router";
import {CurrentWalletService} from "../../../../services/current-wallet/current-wallet.service";

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public wallet: WalletModel;
  public depositValue: number;
  public creditCard: CreditCard = new CreditCard();


  public depositForm: FormGroup;
  public validationMessages = Validation.validationMessages;

  public isLoading: boolean;
  public hideDepositBlock: boolean = false;

  constructor(private walletService: WalletService,

              private currentWalletService: CurrentWalletService,

              private loadingService: LoadingService,

              private fb: FormBuilder,
              public formValidationService: FormValidationService,

              private router: Router) { }

  ngOnInit(): void {
    this.findWalletByUserId();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createSignInForms() {
    this.depositForm = this.fb.group({
      depositValue: ['0',
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.pattern(Validation.validatorsPatterns.numbers)
        ]],
      cardNumber: ['',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(16),
          Validators.pattern(Validation.validatorsPatterns.numbers)
        ]],
      cardMonthOfEnding: ['',
        [
          Validators.required,
          Validators.pattern(Validation.validatorsPatterns.month)
        ]],
      cardYearOfEnding: ['',
        [
          Validators.required,
          Validators.pattern(Validation.validatorsPatterns.year)
        ]],
      cardCVV: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern(Validation.validatorsPatterns.numbers)
        ]],
      cardOwner: ['',
        [
          Validators.required,
          Validators.pattern(Validation.validatorsPatterns.letters_numbers_space)
        ]]
    });
  }

  private findWalletByUserId() {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this.getCurrentWallet();
  }

  private getCurrentWallet(): void {
    this._subscriptions.push(this.currentWalletService.getCurrentWallet()
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe(wallet => this.wallet = wallet));
  }

  public deposit() {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(
      this.walletService.deposit(new DepositModel(this.wallet.id, Number(this.depositValue)))
        .pipe(finalize(() => {
          this.isLoading = this.loadingService.changeLoadingStatus(false);
          this.hideDepositBlock = false;
        }))
        .subscribe((wallet: WalletModel) => this.wallet = wallet,
          error => alert(error.message)));
  }

  public showDepositBlock() {
    this.createSignInForms();
    this.hideDepositBlock = true;
  }
}
