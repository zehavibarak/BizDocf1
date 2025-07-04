import { Component, inject, OnInit } from '@angular/core';
import { BrowseItemsComponent, DocumentModel, RecipientModel } from '@bizdoc/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  standalone: false,
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  folderId!: string;

  ngOnInit(): void {
    this._route.params.subscribe(p =>
      this.folderId = p['id'])
  }
  /** */
  onItemClick(evt: any) {
    this._router.navigate(['/form', evt.id], { state: { data: evt } });
  }
}
