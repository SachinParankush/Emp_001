
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, SkipSelf } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators, FormControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Optional } from '@angular/core';
// import { throwIfAlreadyLoaded } from './core/module-import-guard.ts';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { OrderCardComponent } from './order-card/order-card.component';
import { AppStateModule } from '../appstate.module';
import { MetricsComponent } from './metrics/metrics.component';

@NgModule({
    declarations: [
    OrderCardComponent,
    MetricsComponent
    ],
    imports: [        
        CommonModule,
        FormsModule,
        Ng2TableModule,
        SharedModule,
        AppStateModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        RouterModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule.forRoot(),
    ],
    exports: [
        OrderCardComponent,
        MetricsComponent
    ]
})

export class genericModule { 
  
}