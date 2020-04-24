import { Component, OnInit, Input } from "@angular/core";
import { Receipt } from "/Users/damirpasic/Documents/Stock-Charts/src/app/models/receipt.model";
import { ReceiptsService } from "src/app/services/receipts.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent implements OnInit {
  @Input() receipts: Receipt[] = [];
  constructor(public receiptsService: ReceiptsService) {}

  ngOnInit() {
    this.receiptsService.getReceipts();
  }
}
