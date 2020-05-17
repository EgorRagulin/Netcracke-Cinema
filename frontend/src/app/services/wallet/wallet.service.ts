import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WalletModel } from "../../models/wallet.model";
import { FullWalletModel } from "../../models/full-models/full.wallet.model";

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private rootPath = 'api/wallets';

  constructor(private http: HttpClient) { }

  public getWalletById(id: number): Observable<WalletModel> {
    return this.http.get<WalletModel>(this.rootPath + '/?id=' + id);
  }

  public saveWalletInDb(fullWallet: FullWalletModel): Observable<WalletModel> {
    return this.http.post<WalletModel>(this.rootPath, fullWallet);
  }

  public deleteWallet(id: number): Observable<any> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }
}
