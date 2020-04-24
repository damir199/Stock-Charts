import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Receipt } from "../models/receipt.model";

@Injectable({
  providedIn: "root",
})
export class ReceiptsService {
  public receipts: Receipt[] = [];

  constructor(private http: HttpClient) {}

  getReceipts() {
   this.http.get<Receipt[]>("https://api.loyverse.com/v0.7/receipts/")
   .subscribe((receiptData) => {
    this.receipts = receiptData;
   });
  }

  
}
