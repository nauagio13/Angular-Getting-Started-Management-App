import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { RemoveSpacePipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    RemoveSpacePipe
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule,
    RemoveSpacePipe
  ]

})
export class SharedModule { }
