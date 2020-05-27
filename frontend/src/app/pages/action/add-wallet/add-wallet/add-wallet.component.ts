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
import {CurrentUserService} from "../../../../services/current-user/current.user.service";
import {CurrentWalletService} from "../../../../services/current-wallet/current-wallet.service";

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

              private currentUserService: CurrentUserService,
              private currentWalletService: CurrentWalletService,

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
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers)
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
    else alert('Oh, you sly beetle!');
  }

  private saveWalletInDb(): void {
    this.currentUserService.getCurrentUser().subscribe(user => {
      this.walletService.saveWalletInDb(new FullWalletModel(this.wallet, user))
        .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe((savedWallet: WalletModel) => {
          if (savedWallet != null) {
            this.currentWalletService.setCurrentWallet(savedWallet);
            this.router.navigate(['my-wallet']);
          }
        }, error => {
          alert(error.message);
        });
    });
  }
}
