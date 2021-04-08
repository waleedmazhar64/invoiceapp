import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/menu/dashboard', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'invoice', loadChildren: './pages/invoice/invoice.module#InvoicePageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'invoice-info', loadChildren: './pages/invoice-info/invoice-info.module#InvoiceInfoPageModule' },
  { path: 'client', loadChildren: './pages/client/client.module#ClientPageModule' },
  { path: 'invoicedetails', loadChildren: './pages/invoicedetails/invoicedetails.module#InvoicedetailsPageModule' },
  { path: 'addinvoice', loadChildren: './pages/addinvoice/addinvoice.module#AddinvoicePageModule' },
  { path: 'add-client', loadChildren: './pages/add-client/add-client.module#AddClientPageModule' },
  { path: 'add-item', loadChildren: './pages/add-item/add-item.module#AddItemPageModule' },
  { path: 'comment', loadChildren: './pages/comment/comment.module#CommentPageModule' },
  { path: 'additem', loadChildren: './pages/additem/additem.module#AdditemPageModule' },
  { path: 'add-client-clients', loadChildren: './pages/add-client-clients/add-client-clients.module#AddClientClientsPageModule' },
  { path: 'itemamount', loadChildren: './pages/itemamount/itemamount.module#ItemamountPageModule' },
  { path: 'edit-item', loadChildren: './pages/edit-item/edit-item.module#EditItemPageModule' },
  { path: 'menu-editclient', loadChildren: './pages/menu-editclient/menu-editclient.module#MenuEditclientPageModule' },
  { path: 'menu-clientdetails', loadChildren: './pages/menu-clientdetails/menu-clientdetails.module#MenuClientdetailsPageModule' },
  { path: 'menu-addclient', loadChildren: './pages/menu-addclient/menu-addclient.module#MenuAddclientPageModule' },
  { path: 'menu-additem', loadChildren: './pages/menu-additem/menu-additem.module#MenuAdditemPageModule' },
  { path: 'menu-edititem', loadChildren: './pages/menu-edititem/menu-edititem.module#MenuEdititemPageModule' },
  { path: 'menu-itemdetails', loadChildren: './pages/menu-itemdetails/menu-itemdetails.module#MenuItemdetailsPageModule' },
  { path: 'new-expense', loadChildren: './pages/new-expense/new-expense.module#NewExpensePageModule' },
  { path: 'payment-info', loadChildren: './pages/payment-info/payment-info.module#PaymentInfoPageModule' },
  // { path: 'trash-purchased-orders', loadChildren: './pages/trash-purchased-orders/trash-purchased-orders.module#TrashPurchasedOrdersPageModule' },
  { path: 'addpurchasedorder', loadChildren: './pages/addpurchasedorder/addpurchasedorder.module#AddpurchasedorderPageModule' },
  { path: 'purchase-order-info', loadChildren: './pages/purchase-order-info/purchase-order-info.module#PurchaseOrderInfoPageModule' },
  { path: 'addcreditmemos', loadChildren: './pages/addcreditmemos/addcreditmemos.module#AddcreditmemosPageModule' },
  { path: 'credit-memo-info', loadChildren: './pages/credit-memo-info/credit-memo-info.module#CreditMemoInfoPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'dashboard-invoices', loadChildren: './pages/dashboard-invoices/dashboard-invoices.module#DashboardInvoicesPageModule' },
  { path: 'defaultcomment', loadChildren: './pages/settings/defaultcomment/defaultcomment.module#DefaultcommentPageModule' },
  { path: 'editexpense', loadChildren: './pages/expenses/editexpense/editexpense.module#EditexpensePageModule' },
  { path: 'add', loadChildren: './pages/vendors/add/add.module#AddPageModule' },
  { path: 'vendor-edit', loadChildren: './pages/vendors/vendor-edit/vendor-edit.module#VendorEditPageModule' },
  { path: 'podetails', loadChildren: './pages/purchased-orders/podetails/podetails.module#PodetailsPageModule' },

  /*{
    path: 'addvendor',
    loadChildren: () => import('./pages/addpurchasedorder/addvendor/addvendor.module').then( m => m.AddvendorPageModule)
  }*/
  {
    path: 'ledger',
    loadChildren: () => import('./pages/ledger/ledger.module').then( m => m.LedgerPageModule)
  },
  {
    path: 'payment-info-vendors',
    loadChildren: () => import('./pages/payment-info-vendors/payment-info-vendors.module').then( m => m.PaymentInfoVendorsPageModule)
  },
  {
    path: 'ledgers-vendors',
    loadChildren: () => import('./pages/ledgers-vendors/ledgers-vendors.module').then( m => m.LedgersVendorsPageModule)
  },
  {
    path: 'trash-invoices',
    loadChildren: () => import('./pages/trash-invoices/trash-invoices.module').then( m => m.TrashInvoicesPageModule)
  },
  {
    path: 'day',
    loadChildren: () => import('./pages/reports/day/day.module').then( m => m.DayPageModule)
  },
  {
    path: 'month',
    loadChildren: () => import('./pages/reports/month/month.module').then( m => m.MonthPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/reports/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./pages/reports/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'expensejournal',
    loadChildren: () => import('./pages/reports/expensejournal/expensejournal.module').then( m => m.ExpensejournalPageModule)
  },
  {
    path: 'expensecategory',
    loadChildren: () => import('./pages/reports/expensecategory/expensecategory.module').then( m => m.ExpensecategoryPageModule)
  },
  {
    path: 'customeraging',
    loadChildren: () => import('./pages/reports/customeraging/customeraging.module').then( m => m.CustomeragingPageModule)
  },
  {
    path: 'year',
    loadChildren: () => import('./pages/reports/year/year.module').then( m => m.YearPageModule)
  },
  {
    path: 'quarter',
    loadChildren: () => import('./pages/reports/quarter/quarter.module').then( m => m.QuarterPageModule)
  },
  {
    path: 'customerstatement',
    loadChildren: () => import('./pages/reports/customerstatement/customerstatement.module').then( m => m.CustomerstatementPageModule)
  },
  {
    path: 'outstanding',
    loadChildren: () => import('./pages/outstanding/outstanding.module').then( m => m.OutstandingPageModule)
  },
  {
    path: 'printer-list-modal',
    loadChildren: () => import('./pages/printer-list-modal/printer-list-modal.module').then( m => m.PrinterListModalPageModule)
  },
  /*{
    path: 'adduser',
    loadChildren: () => import('./pages/users/adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./pages/users/userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'acl',
    loadChildren: () => import('./pages/acl/acl.module').then( m => m.AclPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },*/
  // {
  //   path: 'slides',
  //   loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  // },
  // {
  //   path: 'logs',
  //   loadChildren: () => import('./pages/logs/logs.module').then( m => m.LogsPageModule)
  // },

  // { path: 'addpurchasedorder', loadChildren: './pages/purchased-orders/addpurchasedorder/addpurchasedorder.module#AddpurchasedorderPageModule' },
  // { path: 'vendors', loadChildren: './pages/vendors/vendors.module#VendorsPageModule' },
  // { path: 'purchased-orders', loadChildren: './pages/purchased-orders/purchased-orders.module#PurchasedOrdersPageModule' },
  // { path: 'menu-clients', loadChildren: './pages/menu-clients/menu-clients.module#MenuClientsPageModule' },
  // { path: 'additem-items', loadChildren: './pages/additem-items/additem-items.module#AdditemItemsPageModule' },
  // { path: 'additem-time', loadChildren: './pages/additem-time/additem-time.module#AdditemTimePageModule' },
  // { path: 'additem-expenses', loadChildren: './pages/additem-expenses/additem-expenses.module#AdditemExpensesPageModule' },
  // { path: 'trash-credit-memos', loadChildren: './pages/trash-credit-memos/trash-credit-memos.module#TrashCreditMemosPageModule' },
  // { path: 'credit-memos', loadChildren: './pages/credit-memos/credit-memos.module#CreditMemosPageModule' },
  // { path: 'clients', loadChildren: './pages/clients/clients.module#ClientsPageModule' },
  // { path: 'items', loadChildren: './pages/items/items.module#ItemsPageModule' },
  // { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsPageModule' },
  // { path: 'expenses', loadChildren: './pages/expenses/expenses.module#ExpensesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
