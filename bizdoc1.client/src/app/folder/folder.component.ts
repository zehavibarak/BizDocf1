import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  standalone: false,
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  private readonly _router = inject(Router);

  folderId: string = 'ib';

  /** */
  onItemClick(id: string) {
    this._router.navigate(['/form', id]);
  }
}
