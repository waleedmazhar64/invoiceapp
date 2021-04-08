import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      // { path: 'estimate', loadChildren: '../estimate/estimate.module#EstimatePageModule' },
      { path: 'invoice', loadChildren: '../invoice/invoice.module#InvoicePageModule' },
      { path: 'purchased-orders', loadChildren: '../purchased-orders/purchased-orders.module#PurchasedOrdersPageModule' },
      { path: 'trash-purchased-orders', loadChildren: '../trash-purchased-orders/trash-purchased-orders.module#TrashPurchasedOrdersPageModule' },
      { path: 'creditmemos', loadChildren: '../credit-memos/credit-memos.module#CreditMemosPageModule' },
      { path: 'trash-credit-memos', loadChildren: '../trash-credit-memos/trash-credit-memos.module#TrashCreditMemosPageModule' },
      { path: 'expenses', loadChildren: '../expenses/expenses.module#ExpensesPageModule' },
      { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
      { path: 'clients', loadChildren: '../clients/clients.module#ClientsPageModule' },
      { path: 'items', loadChildren: '../items/items.module#ItemsPageModule' },
      { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
      { path: 'vendors', loadChildren: '../vendors/vendors.module#VendorsPageModule' },
      {
        path: 'logs',
        loadChildren: () => import('../logs/logs.module').then( m => m.LogsPageModule)
      },
      {
        path: 'trash-invoices',
        loadChildren: '../trash-invoices/trash-invoices.module#TrashInvoicesPageModule'
      },
      //{
      //  path: 'users',
      //  loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
      //},


    ]
  }
];
// const footer: Routes = [
//   {
//     path: '',
//     component: MenuPage,
//     children: [
//       { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
//       // { path: 'estimate', loadChildren: '../estimate/estimate.module#EstimatePageModule' },
//       { path: 'invoice', loadChildren: '../invoice/invoice.module#InvoicePageModule' },
//       { path: 'expenses', loadChildren: '../expenses/expenses.module#ExpensesPageModule' },
//       { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
     
//       { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
//     ]
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    File,
    WebView
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
