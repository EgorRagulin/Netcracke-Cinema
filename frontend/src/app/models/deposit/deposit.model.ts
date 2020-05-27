export class DepositModel {
  public walletId: number;
  public depositValue: number

  constructor(walletId: number, depositValue: number) {
    this.walletId = walletId;
    this.depositValue = depositValue;
  }
}
