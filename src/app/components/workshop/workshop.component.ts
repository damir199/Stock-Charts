import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-workshop",
  templateUrl: "./workshop.component.html",
  styleUrls: ["./workshop.component.scss"],
})
export class WorkshopComponent implements OnInit {
  panelOpenState = false;

  chassis = ["J6321", "J6322", "J6323"];
  build = ["J6324", "J6325"];
  fitout = ["J6326", "J6327", "J6328"];
  trim = ["J6340", "J6341", "J6342"];
  spray = ["J6329", "J6330", "J6331"];
  finish = ["J6332", "J6333", "J6334", "J6335"];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
