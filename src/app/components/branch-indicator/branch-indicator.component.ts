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
    window.location.href.includes('fifa-exam-develop')
      ? (this.devBranch = true)
      : window.location.href.includes('fifa-exam')
        ? (this.masterBranch = true)
        : null;

    this.branchName = this.devBranch
      ? 'Develop'
      : this.masterBranch
        ? 'Master'
        : 'Localhost';
  }
}
