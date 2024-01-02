export default Object.freeze({
  RET_CONTEXT_TTL: 'PT30S',
  RET_CONTEXT_ACTION: 'action',
  DB_PATH: 'dbfiles',
  RET_SEARCH: 'search',
  RET_ONSEARCH: 'on_search',
  RET_ONSEARCHINC: 'on_search_inc',
  RET_SELECT: 'select',
  RET_ONSELECT: 'on_select',
  RET_INIT: 'init',
  RET_ONINIT: 'on_init',
  RET_CONFIRM: 'confirm',
  RET_ONCONFIRM: 'on_confirm',
  RET_TRACK: 'track',
  RET_ONTRACK: 'on_track',
  RET_CANCEL: 'cancel',
  RET_ONCANCEL: 'on_cancel',
  RET_UPDATE: 'update',
  RET_ONUPDATE: 'on_update',
  RET_STATUS: 'status',
  RET_ONSTATUS: 'on_status',
  RET_SUPPORT: 'support',
  RET_ONSUPPORT: 'on_support',
  DECIMAL_PRECISION: 6,
  ORDER_PICKED: 'Order-picked-up',
  ORDER_DELIVERED: 'Order-delivered',
  FIS_SEARCH: 'search',
  FIS_ONSEARCH: 'on_search',
  FIS_SELECT: 'select',
  FIS_ONSELECT: 'on_select',
  FIS_CONFIRM: 'confirm',
  FIS_ONCONFIRM: 'on_confirm',
  FIS_INIT: 'init',
  FIS_ONINIT: 'on_init',
  FIS_STATUS: 'status',
  FIS_UPDATE: 'update',
  FIS_ONUPDATE: 'on_update',
  FIS_ONSTATUS: 'on_status',
  FIS_CONTEXT_TTL: 'PT30S',
  FIS_CONTEXT_ACTION: 'action',
  MOB_SEARCH: 'search',
  MOB_ONSEARCH: 'on_search',
  MOB_SELECT: 'select',
  MOB_ONSELECT: 'on_select',
  MOB_CONFIRM: 'confirm',
  MOB_ONCONFIRM: 'on_confirm',
  MOB_CANCEL: 'cancel',
  MOB_ONCANCEL: 'on_cancel',
  MOB_INIT: 'init',
  MOB_ONINIT: 'on_init',
  MOB_STATUS: 'status',
  MOB_UPDATE: 'update',
  MOB_ONUPDATE: 'on_update',
  MOB_ONSTATUS: 'on_status',
  MOB_CONTEXT_TTL: 'PT30S',
  MOB_CONTEXT_ACTION: 'action',
  RET_ISSUE: 'issue',
  RET_ONISSUE: 'on_issue',
  RET_ISSUE_STATUS: 'issue_status',
  RET_ONISSUE_STATUS: 'on_issue_status',
})

export const ApiSequence = {
  SEARCH: 'search_full_catalog_refresh',
  ON_SEARCH: 'on_search_full_catalog_refresh',
  INC_SEARCH: 'search_inc_refresh',
  INC_ONSEARCH: 'on_search_inc_refresh',
  SELECT: 'select',
  ON_SELECT: 'on_select',
  INIT: 'init',
  ON_INIT: 'on_init',
  CONFIRM: 'confirm',
  ON_CONFIRM: 'on_confirm',
  CANCEL: 'cancel',
  ON_CANCEL: 'on_cancel',
  TRACK: 'track',
  ON_TRACK: 'on_track',
  STATUS: 'status',
  ON_STATUS_PENDING: 'on_status_pending',
  ON_STATUS_PICKED: 'on_status_picked',
  ON_STATUS_DELIVERED: 'on_status_delivered',
  UPDATE: 'update',
  ON_UPDATE: 'on_update',
}

export const FisApiSequence = {
  SEARCH: 'search',
  ON_SEARCH: 'on_search',
  SELECT: 'select',
  SELECT_2: 'select2',
  SELECT_3: 'select3',
  ON_SELECT: 'on_select',
  ON_SELECT_2: 'on_select2',
  ON_SELECT_3: 'on_select3',
  INIT: 'init',
  INIT_2: 'init2',
  INIT_3: 'init3',
  ON_INIT: 'on_init',
  ON_INIT_2: 'on_init2',
  ON_INIT_3: 'on_init3',
  CONFIRM: 'confirm',
  ON_CONFIRM: 'on_confirm',
  CANCEL: 'cancel',
  ON_CANCEL: 'on_cancel',
  TRACK: 'track',
  ON_TRACK: 'on_track',
  STATUS: 'status',
  ON_STATUS: 'on_status',
  UPDATE: 'update',
  ON_UPDATE: 'on_update',
  ON_UPDATE_1: 'on_update1',
}

export const mobilitySequence = {
  SEARCH: 'search',
  ON_SEARCH: 'on_search',
  SELECT: 'select',
  ON_SELECT: 'on_select',
  INIT: 'init',
  ON_INIT: 'on_init',
  CONFIRM: 'confirm',
  ON_CONFIRM: 'on_confirm',
  CANCEL: 'cancel',
  SOFT_CANCEL: 'soft_cancel',
  ON_CANCEL: 'on_cancel',
  SOFT_ON_CANCEL: 'soft_on_cancel',
  UPDATE: 'update',
  ON_UPDATE: 'on_update',
  STATUS: 'status',
  ON_STATUS: 'on_status',
}
export const mobilityFlow: any = {
  AIRLINES: 'airlines',
  METRO: 'metro',
  ONDEMAND: 'on-demand',
  INTERCITY: 'intercity',
  INTRACITY: 'intracity',
}

export const formHeadingsFis: any = {
  INVOICE_BASED_LOAN: {
    on_search: ['Organization Information'],
    on_select: ['Set Loan Amount', 'Know your Customer'],
    on_init: 'Account details based loan form',
  },
  PERSONAL_LOAN: {
    on_search: ['Personal Information'],
    on_select: ['Set Loan Amount', 'Know your Customer'],
    on_init: ['Loan Agreement details form'],
  },
}

export const fisFlows = {
  INVOICE: 'INVOICE_BASED_LOAN',
  PERSONAL: 'PERSONAL_LOAN',
  PRE_INVOICE: 'PERSONAL_LOAN',
  PRE_PERSONAL: 'INVOICE_BASED_LOAN',
}

export const onDemandFlows = {
  HAPPY_FLOW: 'HAPPY_FLOW',
  RIDER_CANCEL: 'RIDER_CANCEL',
  DRIVER_CANCEL: 'DRIVER_CANCEL',
  PRICE_UPDATE: 'PRICE_UPDATE',
}

export const IGMApiSequence = {
  RET_ISSUE: 'ret_issue',
  RET_ON_ISSUE: 'ret_on_issue',
  RET_ISSUE_STATUS: 'ret_issue_status',
  RET_ON_ISSUE_STATUS: 'ret_on_issue_status',
  RET_ON_ISSUE_STATUS_UNSOLICITED: 'ret_on_issue_status_unsolicited',
  LSP_ISSUE: 'lsp_issue',
  LSP_ISSUE_CLOSE: 'lsp_issue_close',
  LSP_ON_ISSUE: 'lsp_on_issue',
  LSP_ISSUE_STATUS: 'lsp_issue_status',
  LSP_ON_ISSUE_STATUS: 'lsp_on_issue_status',
}

export const actionsArray = [
  'search',
  'on_search',
  'select',
  'on_select',
  'init',
  'on_init',
  'confirm',
  'on_confirm',
  'update',
  'on_update',
  'cancel',
  'on_cancel',
  'track',
  'on_track',
  'status',
  'on_status',
]

export const statusArray = [
  'Pending',
  'Packed',
  'Agent-assigned',
  'Order-picked-up',
  'Out-for-delivery',
  'Order-delivered',
  'Cancelled',
]

export const buyerCancellationRid = new Set(['001', '003', '006', '009', '010'])
