import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  query: string = '';
  users: any[] = [];

  constructor(private githubService: GithubService) { }

  onSubmit(): void {
    this.githubService.searchUsers(this.query).subscribe(response => {
      this.users = response.items;
    });
  }
}
