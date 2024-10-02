import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-indicator',
  templateUrl: './branch-indicator.component.html',
  styleUrl: './branch-indicator.component.scss',
})
export class BranchIndicatorComponent implements OnInit {
  branchName: string = '';
  private devBranch: boolean = false;
  private masterBranch: boolean = false;

  ngOnInit(): void {
    const url = window.location.href;
    // console.log("URL actual:", url); 

    if (url.includes('fifa-exam-develop')) {
      this.devBranch = true;
    } else if (url.includes('fifa-exam')) {
      this.masterBranch = true;
    }

    this.branchName = this.devBranch
      ? 'Develop'
      : this.masterBranch
        ? 'Master'
        : 'Localhost';

    // console.log("Branch:", this.branchName); 
  }
}
