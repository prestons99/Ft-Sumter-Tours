import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharePageRoutingModule } from './share-routing.module';

import { SharePage } from './share.page';

this.socialSharing.shareViaWhatsApp(Text, Image, URL).then((res) => {
  // Success
}).catch((e) => {
  // Error!
});

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageRoutingModule
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
