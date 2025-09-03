import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library-component/library-component.component';

@NgModule({
  imports: [CommonModule, LibraryComponent],
  exports: [LibraryComponent]
})
export class MyLibraryModule {}
