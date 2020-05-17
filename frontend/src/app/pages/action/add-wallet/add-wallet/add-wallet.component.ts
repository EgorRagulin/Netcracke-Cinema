import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {StorageService} from "../../../../services/security/storage.service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";
import {Router} from "@angular/router";
import {PictureModel} from "../../../../models/picture/picture.model";
import {FullUserModel} from "../../../../models/full-models/full.user.model";
import {LoginModel} from "../../../../models/login.model";
import {finalize} from "rxjs/operators";
import {WalletModel} from "../../../../models/wallet.model";
import {WalletService} from "../../../../services/wallet/wallet.service";
import {UserModel} from "../../../../models/user.model";
import {FullWalletModel} from "../../../../models/full-models/full.wallet.model";

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public wallet: WalletModel = new WalletModel();

  public addWalletForm: FormGroup;

  public validationMessages = Validation.validationMessages;

  public isLoading: boolean;

  constructor(private walletService: WalletService,
              public storageService: StorageService,
              private loadingService: LoadingService,
              private fb: FormBuilder,
              public formValidationService: FormValidationService,
              private router: Router) { }

  ngOnInit(): void {
    this.createCreateUserForms();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createCreateUserForms() {
    this.addWalletForm = this.fb.group({
      walletName: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(Validation.validatorsPatterns.wallet_name)
        ]],
      balance: ['',
        [
          Validators.pattern(Validation.validatorsPatterns.wallet_balance)
        ]]
    });
  }

  public addWallet(): void {
    if (this.addWalletForm.valid) {
      this.isLoading = this.loadingService.changeLoadingStatus(true);

      this.saveWalletInDb();
    }
    else alert('Ах ты хитрый жук');
  }

  private connectUserToWallet(): FullWalletModel {
    let user: UserModel = this.storageService.getCurrentUser();
    return new FullWalletModel(this.wallet, user);
  }

  private saveWalletInDb(): void {
    let fullWallet: FullWalletModel = this.connectUserToWallet();
    this.walletService.saveWalletInDb(fullWallet)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe((savedWallet: WalletModel) => {
        console.log(savedWallet);
      }, error => {
        alert(error.message);
      });
  }
}
