export type ActionCancelReason =
  | 'BUYER_CANCELED'
  | 'SELLER_CANCELED'
  | 'TIMED_OUT';

export type ActivityType =
  | 'ADJUSTMENT'
  | 'APP_FEE_REFUND'
  | 'APP_FEE_REVENUE'
  | 'AUTOMATIC_SAVINGS'
  | 'AUTOMATIC_SAVINGS_REVERSED'
  | 'CHARGE'
  | 'DEPOSIT_FEE'
  | 'DISPUTE'
  | 'ESCHEATMENT'
  | 'FEE'
  | 'FREE_PROCESSING'
  | 'HOLD_ADJUSTMENT'
  | 'INITIAL_BALANCE_CHANGE'
  | 'MONEY_TRANSFER'
  | 'MONEY_TRANSFER_REVERSAL'
  | 'OPEN_DISPUTE'
  | 'OTHER'
  | 'OTHER_ADJUSTMENT'
  | 'PAID_SERVICE_FEE'
  | 'PAID_SERVICE_FEE_REFUND'
  | 'REDEMPTION_CODE'
  | 'REFUND'
  | 'RELEASE_ADJUSTMENT'
  | 'RESERVE_HOLD'
  | 'RESERVE_RELEASE'
  | 'RETURNED_PAYOUT'
  | 'SQUARE_CAPITAL_PAYMENT'
  | 'SQUARE_CAPITAL_REVERSED_PAYMENT'
  | 'SUBSCRIPTION_FEE'
  | 'SUBSCRIPTION_FEE_PAID_REFUND'
  | 'SUBSCRIPTION_FEE_REFUND'
  | 'TAX_ON_FEE'
  | 'THIRD_PARTY_FEE'
  | 'THIRD_PARTY_FEE_REFUND';

export type ApplicationDetailsExternalSquareProduct =
  | 'APPOINTMENTS'
  | 'ECOMMERCE_API'
  | 'INVOICES'
  | 'ONLINE_STORE'
  | 'OTHER'
  | 'RESTAURANTS'
  | 'RETAIL'
  | 'SQUARE_POS'
  | 'TERMINAL_API'
  | 'VIRTUAL_TERMINAL';

export type BankAccountStatus =
  | 'VERIFICATION_IN_PROGRESS'
  | 'VERIFIED'
  | 'DISABLED';

export type BankAccountType =
  | 'CHECKING'
  | 'SAVINGS'
  | 'INVESTMENT'
  | 'OTHER'
  | 'BUSINESS_CHECKING';

export type BatchRequestHttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type BookingBookingSource =
  | 'FIRST_PARTY_MERCHANT'
  | 'FIRST_PARTY_BUYER'
  | 'THIRD_PARTY_BUYER'
  | 'API';

export type BookingCreatorDetailsCreatorType = 'TEAM_MEMBER' | 'CUSTOMER';

export type BookingStatus =
  | 'PENDING'
  | 'CANCELED_BY_CUSTOMER'
  | 'CANCELED_BY_SELLER'
  | 'DECLINED'
  | 'ACCEPTED'
  | 'NO_SHOW';

export type BusinessAppointmentSettingsAlignmentTime =
  | 'SERVICE_DURATION'
  | 'QUARTER_HOURLY'
  | 'HALF_HOURLY'
  | 'HOURLY';

export type BusinessAppointmentSettingsBookingLocationType =
  | 'BUSINESS_LOCATION'
  | 'CUSTOMER_LOCATION'
  | 'PHONE';

export type BusinessAppointmentSettingsCancellationPolicy =
  | 'CANCELLATION_TREATED_AS_NO_SHOW'
  | 'CUSTOM_POLICY';

export type BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType =
  | 'PER_TEAM_MEMBER'
  | 'PER_LOCATION';

export type BusinessBookingProfileBookingPolicy =
  | 'ACCEPT_ALL'
  | 'REQUIRES_ACCEPTANCE';

export type BusinessBookingProfileCustomerTimezoneChoice =
  | 'BUSINESS_LOCATION_TIMEZONE'
  | 'CUSTOMER_CHOICE';

export type CardBrand =
  | 'OTHER_BRAND'
  | 'VISA'
  | 'MASTERCARD'
  | 'AMERICAN_EXPRESS'
  | 'DISCOVER'
  | 'DISCOVER_DINERS'
  | 'JCB'
  | 'CHINA_UNIONPAY'
  | 'SQUARE_GIFT_CARD'
  | 'SQUARE_CAPITAL_CARD'
  | 'INTERAC'
  | 'EFTPOS'
  | 'FELICA'
  | 'EBT';

export type CardCoBrand = 'UNKNOWN' | 'AFTERPAY' | 'CLEARPAY';

export type CardPrepaidType =
  | 'UNKNOWN_PREPAID_TYPE'
  | 'NOT_PREPAID'
  | 'PREPAID';

export type CardType = 'UNKNOWN_CARD_TYPE' | 'CREDIT' | 'DEBIT';

export type CashDrawerEventType =
  | 'NO_SALE'
  | 'CASH_TENDER_PAYMENT'
  | 'OTHER_TENDER_PAYMENT'
  | 'CASH_TENDER_CANCELED_PAYMENT'
  | 'OTHER_TENDER_CANCELED_PAYMENT'
  | 'CASH_TENDER_REFUND'
  | 'OTHER_TENDER_REFUND'
  | 'PAID_IN'
  | 'PAID_OUT';

export type CashDrawerShiftState = 'OPEN' | 'ENDED' | 'CLOSED';

export type CatalogCustomAttributeDefinitionAppVisibility =
  | 'APP_VISIBILITY_HIDDEN'
  | 'APP_VISIBILITY_READ_ONLY'
  | 'APP_VISIBILITY_READ_WRITE_VALUES';

export type CatalogCustomAttributeDefinitionSellerVisibility =
  | 'SELLER_VISIBILITY_HIDDEN'
  | 'SELLER_VISIBILITY_READ_WRITE_VALUES';

export type CatalogCustomAttributeDefinitionType =
  | 'STRING'
  | 'BOOLEAN'
  | 'NUMBER'
  | 'SELECTION';

export type CatalogDiscountModifyTaxBasis =
  | 'MODIFY_TAX_BASIS'
  | 'DO_NOT_MODIFY_TAX_BASIS';

export type CatalogDiscountType =
  | 'FIXED_PERCENTAGE'
  | 'FIXED_AMOUNT'
  | 'VARIABLE_PERCENTAGE'
  | 'VARIABLE_AMOUNT';

export type CatalogItemProductType =
  | 'REGULAR'
  | 'GIFT_CARD'
  | 'APPOINTMENTS_SERVICE';

export type CatalogModifierListSelectionType = 'SINGLE' | 'MULTIPLE';

export type CatalogObjectType =
  | 'ITEM'
  | 'IMAGE'
  | 'CATEGORY'
  | 'ITEM_VARIATION'
  | 'TAX'
  | 'DISCOUNT'
  | 'MODIFIER_LIST'
  | 'MODIFIER'
  | 'PRICING_RULE'
  | 'PRODUCT_SET'
  | 'TIME_PERIOD'
  | 'MEASUREMENT_UNIT'
  | 'SUBSCRIPTION_PLAN'
  | 'ITEM_OPTION'
  | 'ITEM_OPTION_VAL'
  | 'CUSTOM_ATTRIBUTE_DEFINITION'
  | 'QUICK_AMOUNTS_SETTINGS';

export type CatalogPricingType = 'FIXED_PRICING' | 'VARIABLE_PRICING';

export type CatalogQuickAmountType =
  | 'QUICK_AMOUNT_TYPE_MANUAL'
  | 'QUICK_AMOUNT_TYPE_AUTO';

export type CatalogQuickAmountsSettingsOption = 'DISABLED' | 'MANUAL' | 'AUTO';

export type ChangeTiming = 'IMMEDIATE' | 'END_OF_BILLING_CYCLE';

export type CheckoutOptionsPaymentType =
  | 'CARD_PRESENT'
  | 'MANUAL_CARD_ENTRY'
  | 'FELICA_ID'
  | 'FELICA_QUICPAY'
  | 'FELICA_TRANSPORTATION_GROUP'
  | 'FELICA_ALL'
  | 'PAYPAY';

type UPPERCASE_LETTER =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type Country = `${UPPERCASE_LETTER}${UPPERCASE_LETTER}`;

export type V1CreateRefundRequestType = 'FULL' | 'PARTIAL';

export type Currency =
  | 'UNKNOWN_CURRENCY'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'USS'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XTS'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'BTC';

export type CustomAttributeDefinitionVisibility =
  | 'VISIBILITY_HIDDEN'
  | 'VISIBILITY_READ_ONLY'
  | 'VISIBILITY_READ_WRITE_VALUES';

export type CustomerCreationSource =
  | 'OTHER'
  | 'APPOINTMENTS'
  | 'COUPON'
  | 'DELETION_RECOVERY'
  | 'DIRECTORY'
  | 'EGIFTING'
  | 'EMAIL_COLLECTION'
  | 'FEEDBACK'
  | 'IMPORT'
  | 'INVOICES'
  | 'LOYALTY'
  | 'MARKETING'
  | 'MERGE'
  | 'ONLINE_STORE'
  | 'INSTANT_PROFILE'
  | 'TERMINAL'
  | 'THIRD_PARTY'
  | 'THIRD_PARTY_IMPORT'
  | 'UNMERGE_RECOVERY';

export type CustomerInclusionExclusion = 'INCLUDE' | 'EXCLUDE';

export type CustomerSortField = 'DEFAULT' | 'CREATED_AT';

export type DayOfWeek = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';

export type DestinationType =
  | 'BANK_ACCOUNT'
  | 'CARD'
  | 'SQUARE_BALANCE'
  | 'SQUARE_STORED_BALANCE';

export type DeviceCodeStatus = 'UNKNOWN' | 'UNPAIRED' | 'PAIRED' | 'EXPIRED';

export type DisputeEvidenceType =
  | 'GENERIC_EVIDENCE'
  | 'ONLINE_OR_APP_ACCESS_LOG'
  | 'AUTHORIZATION_DOCUMENTATION'
  | 'CANCELLATION_OR_REFUND_DOCUMENTATION'
  | 'CARDHOLDER_COMMUNICATION'
  | 'CARDHOLDER_INFORMATION'
  | 'PURCHASE_ACKNOWLEDGEMENT'
  | 'DUPLICATE_CHARGE_DOCUMENTATION'
  | 'PRODUCT_OR_SERVICE_DESCRIPTION'
  | 'RECEIPT'
  | 'SERVICE_RECEIVED_DOCUMENTATION'
  | 'PROOF_OF_DELIVERY_DOCUMENTATION'
  | 'RELATED_TRANSACTION_DOCUMENTATION'
  | 'REBUTTAL_EXPLANATION'
  | 'TRACKING_NUMBER';

export type DisputeReason =
  | 'AMOUNT_DIFFERS'
  | 'CANCELED'
  | 'DUPLICATE'
  | 'NO_KNOWLEDGE'
  | 'NOT_AS_DESCRIBED'
  | 'NOT_RECEIVED'
  | 'PAID_BY_OTHER_MEANS'
  | 'CUSTOMER_REQUESTS_CREDIT'
  | 'EMV_LIABILITY_SHIFT';

export type DisputeState =
  | 'INQUIRY_EVIDENCE_REQUIRED'
  | 'INQUIRY_PROCESSING'
  | 'INQUIRY_CLOSED'
  | 'EVIDENCE_REQUIRED'
  | 'PROCESSING'
  | 'WON'
  | 'LOST'
  | 'ACCEPTED';

export type EcomVisibility = 'UNINDEXED' | 'UNAVAILABLE' | 'HIDDEN' | 'VISIBLE';

export type EmployeeStatus = 'ACTIVE' | 'INACTIVE';

export type ErrorCategory =
  | 'API_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'INVALID_REQUEST_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'PAYMENT_METHOD_ERROR'
  | 'REFUND_ERROR'
  | 'MERCHANT_SUBSCRIPTION_ERROR';

export type ErrorCode =
  | 'INTERNAL_SERVER_ERROR'
  | 'UNAUTHORIZED'
  | 'ACCESS_TOKEN_EXPIRED'
  | 'ACCESS_TOKEN_REVOKED'
  | 'CLIENT_DISABLED'
  | 'FORBIDDEN'
  | 'INSUFFICIENT_SCOPES'
  | 'APPLICATION_DISABLED'
  | 'V1_APPLICATION'
  | 'V1_ACCESS_TOKEN'
  | 'CARD_PROCESSING_NOT_ENABLED'
  | 'MERCHANT_SUBSCRIPTION_NOT_FOUND'
  | 'BAD_REQUEST'
  | 'MISSING_REQUIRED_PARAMETER'
  | 'INCORRECT_TYPE'
  | 'INVALID_TIME'
  | 'INVALID_TIME_RANGE'
  | 'INVALID_VALUE'
  | 'INVALID_CURSOR'
  | 'UNKNOWN_QUERY_PARAMETER'
  | 'CONFLICTING_PARAMETERS'
  | 'EXPECTED_JSON_BODY'
  | 'INVALID_SORT_ORDER'
  | 'VALUE_REGEX_MISMATCH'
  | 'VALUE_TOO_SHORT'
  | 'VALUE_TOO_LONG'
  | 'VALUE_TOO_LOW'
  | 'VALUE_TOO_HIGH'
  | 'VALUE_EMPTY'
  | 'ARRAY_LENGTH_TOO_LONG'
  | 'ARRAY_LENGTH_TOO_SHORT'
  | 'ARRAY_EMPTY'
  | 'EXPECTED_BOOLEAN'
  | 'EXPECTED_INTEGER'
  | 'EXPECTED_FLOAT'
  | 'EXPECTED_STRING'
  | 'EXPECTED_OBJECT'
  | 'EXPECTED_ARRAY'
  | 'EXPECTED_MAP'
  | 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY'
  | 'INVALID_ARRAY_VALUE'
  | 'INVALID_ENUM_VALUE'
  | 'INVALID_CONTENT_TYPE'
  | 'INVALID_FORM_VALUE'
  | 'CUSTOMER_NOT_FOUND'
  | 'ONE_INSTRUMENT_EXPECTED'
  | 'NO_FIELDS_SET'
  | 'TOO_MANY_MAP_ENTRIES'
  | 'MAP_KEY_LENGTH_TOO_SHORT'
  | 'MAP_KEY_LENGTH_TOO_LONG'
  | 'CUSTOMER_MISSING_NAME'
  | 'CUSTOMER_MISSING_EMAIL'
  | 'INVALID_PAUSE_LENGTH'
  | 'INVALID_DATE'
  | 'CARD_EXPIRED'
  | 'INVALID_EXPIRATION'
  | 'INVALID_EXPIRATION_YEAR'
  | 'INVALID_EXPIRATION_DATE'
  | 'UNSUPPORTED_CARD_BRAND'
  | 'UNSUPPORTED_ENTRY_METHOD'
  | 'INVALID_ENCRYPTED_CARD'
  | 'INVALID_CARD'
  | 'PAYMENT_AMOUNT_MISMATCH'
  | 'GENERIC_DECLINE'
  | 'CVV_FAILURE'
  | 'ADDRESS_VERIFICATION_FAILURE'
  | 'INVALID_ACCOUNT'
  | 'CURRENCY_MISMATCH'
  | 'INSUFFICIENT_FUNDS'
  | 'INSUFFICIENT_PERMISSIONS'
  | 'CARDHOLDER_INSUFFICIENT_PERMISSIONS'
  | 'INVALID_LOCATION'
  | 'TRANSACTION_LIMIT'
  | 'VOICE_FAILURE'
  | 'PAN_FAILURE'
  | 'EXPIRATION_FAILURE'
  | 'CARD_NOT_SUPPORTED'
  | 'INVALID_PIN'
  | 'MISSING_PIN'
  | 'MISSING_ACCOUNT_TYPE'
  | 'INVALID_POSTAL_CODE'
  | 'INVALID_FEES'
  | 'MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED'
  | 'PAYMENT_LIMIT_EXCEEDED'
  | 'GIFT_CARD_AVAILABLE_AMOUNT'
  | 'ACCOUNT_UNUSABLE'
  | 'BUYER_REFUSED_PAYMENT'
  | 'DELAYED_TRANSACTION_EXPIRED'
  | 'DELAYED_TRANSACTION_CANCELED'
  | 'DELAYED_TRANSACTION_CAPTURED'
  | 'DELAYED_TRANSACTION_FAILED'
  | 'CARD_TOKEN_EXPIRED'
  | 'CARD_TOKEN_USED'
  | 'AMOUNT_TOO_HIGH'
  | 'UNSUPPORTED_INSTRUMENT_TYPE'
  | 'REFUND_AMOUNT_INVALID'
  | 'REFUND_ALREADY_PENDING'
  | 'PAYMENT_NOT_REFUNDABLE'
  | 'REFUND_DECLINED'
  | 'INVALID_CARD_DATA'
  | 'SOURCE_USED'
  | 'SOURCE_EXPIRED'
  | 'UNSUPPORTED_LOYALTY_REWARD_TIER'
  | 'LOCATION_MISMATCH'
  | 'IDEMPOTENCY_KEY_REUSED'
  | 'UNEXPECTED_VALUE'
  | 'SANDBOX_NOT_SUPPORTED'
  | 'INVALID_EMAIL_ADDRESS'
  | 'INVALID_PHONE_NUMBER'
  | 'CHECKOUT_EXPIRED'
  | 'BAD_CERTIFICATE'
  | 'INVALID_SQUARE_VERSION_FORMAT'
  | 'API_VERSION_INCOMPATIBLE'
  | 'CARD_DECLINED'
  | 'VERIFY_CVV_FAILURE'
  | 'VERIFY_AVS_FAILURE'
  | 'CARD_DECLINED_CALL_ISSUER'
  | 'CARD_DECLINED_VERIFICATION_REQUIRED'
  | 'BAD_EXPIRATION'
  | 'CHIP_INSERTION_REQUIRED'
  | 'ALLOWABLE_PIN_TRIES_EXCEEDED'
  | 'RESERVATION_DECLINED'
  | 'UNKNOWN_BODY_PARAMETER'
  | 'NOT_FOUND'
  | 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'NOT_ACCEPTABLE'
  | 'REQUEST_TIMEOUT'
  | 'CONFLICT'
  | 'GONE'
  | 'REQUEST_ENTITY_TOO_LARGE'
  | 'UNSUPPORTED_MEDIA_TYPE'
  | 'UNPROCESSABLE_ENTITY'
  | 'RATE_LIMITED'
  | 'NOT_IMPLEMENTED'
  | 'BAD_GATEWAY'
  | 'SERVICE_UNAVAILABLE'
  | 'TEMPORARY_ERROR'
  | 'GATEWAY_TIMEOUT';

export type ExcludeStrategy = 'LEAST_EXPENSIVE' | 'MOST_EXPENSIVE';

export type GiftCardActivityAdjustDecrementReason =
  | 'SUSPICIOUS_ACTIVITY'
  | 'BALANCE_ACCIDENTALLY_INCREASED'
  | 'SUPPORT_ISSUE'
  | 'PURCHASE_WAS_REFUNDED';

export type GiftCardActivityAdjustIncrementReason =
  | 'COMPLIMENTARY'
  | 'SUPPORT_ISSUE'
  | 'TRANSACTION_VOIDED';

export type GiftCardActivityBlockReason = 'CHARGEBACK_BLOCK';

export type GiftCardActivityClearBalanceReason =
  | 'SUSPICIOUS_ACTIVITY'
  | 'REUSE_GIFTCARD'
  | 'UNKNOWN_REASON';

export type GiftCardActivityDeactivateReason =
  | 'SUSPICIOUS_ACTIVITY'
  | 'UNKNOWN_REASON'
  | 'CHARGEBACK_DEACTIVATE';

export type GiftCardActivityRedeemStatus = 'PENDING' | 'COMPLETED' | 'CANCELED';

export type GiftCardActivityType =
  | 'ACTIVATE'
  | 'LOAD'
  | 'REDEEM'
  | 'CLEAR_BALANCE'
  | 'DEACTIVATE'
  | 'ADJUST_INCREMENT'
  | 'ADJUST_DECREMENT'
  | 'REFUND'
  | 'UNLINKED_ACTIVITY_REFUND'
  | 'IMPORT'
  | 'BLOCK'
  | 'UNBLOCK'
  | 'IMPORT_REVERSAL';

export type GiftCardActivityUnblockReason = 'CHARGEBACK_UNBLOCK';

export type GiftCardGANSource = 'SQUARE' | 'OTHER';

export type GiftCardStatus = 'ACTIVE' | 'DEACTIVATED' | 'BLOCKED' | 'PENDING';

export type GiftCardType = 'PHYSICAL' | 'DIGITAL';

export type InventoryAlertType = 'NONE' | 'LOW_QUANTITY';

export type InventoryChangeType = 'PHYSICAL_COUNT' | 'ADJUSTMENT' | 'TRANSFER';

export type InventoryState =
  | 'CUSTOM'
  | 'IN_STOCK'
  | 'SOLD'
  | 'RETURNED_BY_CUSTOMER'
  | 'RESERVED_FOR_SALE'
  | 'SOLD_ONLINE'
  | 'ORDERED_FROM_VENDOR'
  | 'RECEIVED_FROM_VENDOR'
  | 'IN_TRANSIT_TO'
  | 'NONE'
  | 'WASTE'
  | 'UNLINKED_RETURN'
  | 'COMPOSED'
  | 'DECOMPOSED'
  | 'SUPPORTED_BY_NEWER_VERSION';

export type InvoiceAutomaticPaymentSource =
  | 'NONE'
  | 'CARD_ON_FILE'
  | 'BANK_ON_FILE';

export type InvoiceCustomFieldPlacement =
  | 'ABOVE_LINE_ITEMS'
  | 'BELOW_LINE_ITEMS';

export type InvoiceDeliveryMethod = 'EMAIL' | 'SHARE_MANUALLY' | 'SMS';

export type InvoicePaymentReminderStatus =
  | 'PENDING'
  | 'NOT_APPLICABLE'
  | 'SENT';

export type InvoiceRequestMethod =
  | 'EMAIL'
  | 'CHARGE_CARD_ON_FILE'
  | 'SHARE_MANUALLY'
  | 'CHARGE_BANK_ON_FILE'
  | 'SMS'
  | 'SMS_CHARGE_CARD_ON_FILE'
  | 'SMS_CHARGE_BANK_ON_FILE';

export type InvoiceRequestType = 'BALANCE' | 'DEPOSIT' | 'INSTALLMENT';

export type InvoiceSortField = 'INVOICE_SORT_DATE';

export type InvoiceStatus =
  | 'DRAFT'
  | 'UNPAID'
  | 'SCHEDULED'
  | 'PARTIALLY_PAID'
  | 'PAID'
  | 'PARTIALLY_REFUNDED'
  | 'REFUNDED'
  | 'CANCELED'
  | 'FAILED'
  | 'PAYMENT_PENDING';

export type JobAssignmentPayType = 'NONE' | 'HOURLY' | 'SALARY';

export type V1ListSettlementsRequestStatus = 'SENT' | 'FAILED';

export type LocationCapability =
  | 'CREDIT_CARD_PROCESSING'
  | 'AUTOMATIC_TRANSFERS';

export type LocationStatus = 'ACTIVE' | 'INACTIVE';

export type LocationType = 'PHYSICAL' | 'MOBILE';

export type LoyaltyAccountMappingType = 'PHONE';

export type LoyaltyEventSource = 'SQUARE' | 'LOYALTY_API';

export type LoyaltyEventType =
  | 'ACCUMULATE_POINTS'
  | 'CREATE_REWARD'
  | 'REDEEM_REWARD'
  | 'DELETE_REWARD'
  | 'ADJUST_POINTS'
  | 'EXPIRE_POINTS'
  | 'OTHER'
  | 'ACCUMULATE_PROMOTION_POINTS';

export type LoyaltyProgramAccrualRuleTaxMode = 'BEFORE_TAX' | 'AFTER_TAX';

export type LoyaltyProgramAccrualRuleType =
  | 'VISIT'
  | 'SPEND'
  | 'ITEM_VARIATION'
  | 'CATEGORY';

export type LoyaltyProgramRewardDefinitionScope =
  | 'ORDER'
  | 'ITEM_VARIATION'
  | 'CATEGORY';

export type LoyaltyProgramRewardDefinitionType =
  | 'FIXED_AMOUNT'
  | 'FIXED_PERCENTAGE';

export type LoyaltyProgramStatus = 'INACTIVE' | 'ACTIVE';

export type LoyaltyPromotionIncentiveType =
  | 'POINTS_MULTIPLIER'
  | 'POINTS_ADDITION';

export type LoyaltyPromotionStatus =
  | 'ACTIVE'
  | 'ENDED'
  | 'CANCELED'
  | 'SCHEDULED';

export type LoyaltyPromotionTriggerLimitInterval = 'ALL_TIME' | 'DAY';

export type LoyaltyRewardStatus = 'ISSUED' | 'REDEEMED' | 'DELETED';

export type MeasurementUnitArea =
  | 'IMPERIAL_ACRE'
  | 'IMPERIAL_SQUARE_INCH'
  | 'IMPERIAL_SQUARE_FOOT'
  | 'IMPERIAL_SQUARE_YARD'
  | 'IMPERIAL_SQUARE_MILE'
  | 'METRIC_SQUARE_CENTIMETER'
  | 'METRIC_SQUARE_METER'
  | 'METRIC_SQUARE_KILOMETER';

export type MeasurementUnitGeneric = 'UNIT';

export type MeasurementUnitLength =
  | 'IMPERIAL_INCH'
  | 'IMPERIAL_FOOT'
  | 'IMPERIAL_YARD'
  | 'IMPERIAL_MILE'
  | 'METRIC_MILLIMETER'
  | 'METRIC_CENTIMETER'
  | 'METRIC_METER'
  | 'METRIC_KILOMETER';

export type MeasurementUnitTime =
  | 'GENERIC_MILLISECOND'
  | 'GENERIC_SECOND'
  | 'GENERIC_MINUTE'
  | 'GENERIC_HOUR'
  | 'GENERIC_DAY';

export type MeasurementUnitUnitType =
  | 'TYPE_CUSTOM'
  | 'TYPE_AREA'
  | 'TYPE_LENGTH'
  | 'TYPE_VOLUME'
  | 'TYPE_WEIGHT'
  | 'TYPE_GENERIC';

export type MeasurementUnitVolume =
  | 'GENERIC_FLUID_OUNCE'
  | 'GENERIC_SHOT'
  | 'GENERIC_CUP'
  | 'GENERIC_PINT'
  | 'GENERIC_QUART'
  | 'GENERIC_GALLON'
  | 'IMPERIAL_CUBIC_INCH'
  | 'IMPERIAL_CUBIC_FOOT'
  | 'IMPERIAL_CUBIC_YARD'
  | 'METRIC_MILLILITER'
  | 'METRIC_LITER';

export type MeasurementUnitWeight =
  | 'IMPERIAL_WEIGHT_OUNCE'
  | 'IMPERIAL_POUND'
  | 'IMPERIAL_STONE'
  | 'METRIC_MILLIGRAM'
  | 'METRIC_GRAM'
  | 'METRIC_KILOGRAM';

export type MerchantStatus = 'ACTIVE' | 'INACTIVE';

export type OAuthPermission =
  | 'BANK_ACCOUNTS_READ'
  | 'CASH_DRAWER_READ'
  | 'CUSTOMERS_READ'
  | 'CUSTOMERS_WRITE'
  | 'DEVICE_CREDENTIAL_MANAGEMENT'
  | 'EMPLOYEES_READ'
  | 'EMPLOYEES_WRITE'
  | 'INVENTORY_READ'
  | 'INVENTORY_WRITE'
  | 'ITEMS_READ'
  | 'ITEMS_WRITE'
  | 'LOYALTY_READ'
  | 'LOYALTY_WRITE'
  | 'MERCHANT_PROFILE_READ'
  | 'ORDERS_READ'
  | 'ORDERS_WRITE'
  | 'PAYMENTS_READ'
  | 'PAYMENTS_WRITE'
  | 'PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS'
  | 'PAYMENTS_WRITE_IN_PERSON'
  | 'SETTLEMENTS_READ'
  | 'TIMECARDS_READ'
  | 'TIMECARDS_WRITE'
  | 'TIMECARDS_SETTINGS_READ'
  | 'TIMECARDS_SETTINGS_WRITE'
  | 'APPOINTMENTS_READ'
  | 'APPOINTMENTS_WRITE'
  | 'APPOINTMENTS_BUSINESS_SETTINGS_READ'
  | 'INVOICES_READ'
  | 'INVOICES_WRITE'
  | 'SUBSCRIPTIONS_READ'
  | 'SUBSCRIPTIONS_WRITE'
  | 'DISPUTES_READ'
  | 'DISPUTES_WRITE'
  | 'GIFTCARDS_READ'
  | 'GIFTCARDS_WRITE'
  | 'ONLINE_STORE_SNIPPETS_WRITE'
  | 'ONLINE_STORE_SNIPPETS_READ'
  | 'ONLINE_STORE_SITE_READ'
  | 'PAYMENTS_WRITE_SHARED_ONFILE'
  | 'APPOINTMENTS_ALL_READ'
  | 'APPOINTMENTS_ALL_WRITE'
  | 'MERCHANT_PROFILE_WRITE'
  | 'VENDOR_READ'
  | 'VENDOR_WRITE'
  | 'PAYOUTS_READ';

export type OauthAuthorizationRevokedWebhookRevokerType =
  | 'APPLICATION'
  | 'MERCHANT'
  | 'SQUARE';

export type OrderFulfillmentFulfillmentLineItemApplication =
  | 'ALL'
  | 'ENTRY_LIST';

export type OrderFulfillmentPickupDetailsScheduleType = 'SCHEDULED' | 'ASAP';

export type OrderFulfillmentState =
  | 'PROPOSED'
  | 'RESERVED'
  | 'PREPARED'
  | 'COMPLETED'
  | 'CANCELED'
  | 'FAILED';

export type OrderFulfillmentType = 'PICKUP' | 'SHIPMENT';

export type OrderLineItemDiscountScope =
  | 'OTHER_DISCOUNT_SCOPE'
  | 'LINE_ITEM'
  | 'ORDER';

export type OrderLineItemDiscountType =
  | 'UNKNOWN_DISCOUNT'
  | 'FIXED_PERCENTAGE'
  | 'FIXED_AMOUNT'
  | 'VARIABLE_PERCENTAGE'
  | 'VARIABLE_AMOUNT';

export type OrderLineItemItemType = 'ITEM' | 'CUSTOM_AMOUNT' | 'GIFT_CARD';

export type OrderLineItemTaxScope = 'OTHER_TAX_SCOPE' | 'LINE_ITEM' | 'ORDER';

export type OrderLineItemTaxType = 'UNKNOWN_TAX' | 'ADDITIVE' | 'INCLUSIVE';

export type OrderServiceChargeCalculationPhase =
  | 'SUBTOTAL_PHASE'
  | 'TOTAL_PHASE';

export type OrderServiceChargeType = 'AUTO_GRATUITY' | 'CUSTOM';

export type OrderState = 'OPEN' | 'COMPLETED' | 'CANCELED' | 'DRAFT';

export type V1PaymentItemizationItemizationType =
  | 'ITEM'
  | 'CUSTOM_AMOUNT'
  | 'GIFT_CARD_ACTIVATION'
  | 'GIFT_CARD_RELOAD'
  | 'GIFT_CARD_UNKNOWN'
  | 'OTHER';

export type V1PaymentSurchargeType = 'UNKNOWN' | 'AUTO_GRATUITY' | 'CUSTOM';

export type V1PaymentTaxInclusionType = 'ADDITIVE' | 'INCLUSIVE';

export type PayoutFeeType = 'TRANSFER_FEE' | 'TAX_ON_TRANSFER_FEE';

export type PayoutStatus = 'SENT' | 'PAID' | 'FAILED';

export type PayoutType = 'BATCH' | 'SIMPLE';

export type Product =
  | 'SQUARE_POS'
  | 'EXTERNAL_API'
  | 'BILLING'
  | 'APPOINTMENTS'
  | 'INVOICES'
  | 'ONLINE_STORE'
  | 'PAYROLL'
  | 'DASHBOARD'
  | 'ITEM_LIBRARY_IMPORT'
  | 'OTHER';

export type ProductType = 'TERMINAL_API';

export type RefundStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'FAILED';

export type V1RefundType = 'FULL' | 'PARTIAL';

export type RegisterDomainResponseStatus = 'PENDING' | 'VERIFIED';

export type RiskEvaluationRiskLevel =
  | 'PENDING'
  | 'NORMAL'
  | 'MODERATE'
  | 'HIGH';

export type SearchCatalogItemsRequestStockLevel = 'OUT' | 'LOW';

export type SearchOrdersSortField = 'CREATED_AT' | 'UPDATED_AT' | 'CLOSED_AT';

export type SearchVendorsRequestSortField = 'NAME' | 'CREATED_AT';

export type V1SettlementEntryType =
  | 'ADJUSTMENT'
  | 'BALANCE_CHARGE'
  | 'CHARGE'
  | 'FREE_PROCESSING'
  | 'HOLD_ADJUSTMENT'
  | 'PAID_SERVICE_FEE'
  | 'PAID_SERVICE_FEE_REFUND'
  | 'REDEMPTION_CODE'
  | 'REFUND'
  | 'RETURNED_PAYOUT'
  | 'SQUARE_CAPITAL_ADVANCE'
  | 'SQUARE_CAPITAL_PAYMENT'
  | 'SQUARE_CAPITAL_REVERSED_PAYMENT'
  | 'SUBSCRIPTION_FEE'
  | 'SUBSCRIPTION_FEE_REFUND'
  | 'OTHER'
  | 'RETURNED_ACH_ENTRY'
  | 'RETURNED_SQUARE_275'
  | 'SQUARE_275'
  | 'SQUARE_CARD';

export type V1SettlementStatus = 'FAILED' | 'SENT';

export type ShiftFilterStatus = 'OPEN' | 'CLOSED';

export type ShiftSortField =
  | 'START_AT'
  | 'END_AT'
  | 'CREATED_AT'
  | 'UPDATED_AT';

export type ShiftStatus = 'OPEN' | 'CLOSED';

export type ShiftWorkdayMatcher = 'START_AT' | 'END_AT' | 'INTERSECTION';

export type SortOrder = 'DESC' | 'ASC';

export type SubscriptionActionType =
  | 'CANCEL'
  | 'PAUSE'
  | 'RESUME'
  | 'SWAP_PLAN';

export type SubscriptionCadence =
  | 'DAILY'
  | 'WEEKLY'
  | 'EVERY_TWO_WEEKS'
  | 'THIRTY_DAYS'
  | 'SIXTY_DAYS'
  | 'NINETY_DAYS'
  | 'MONTHLY'
  | 'EVERY_TWO_MONTHS'
  | 'QUARTERLY'
  | 'EVERY_FOUR_MONTHS'
  | 'EVERY_SIX_MONTHS'
  | 'ANNUAL'
  | 'EVERY_TWO_YEARS';

export type SubscriptionEventInfoCode =
  | 'LOCATION_NOT_ACTIVE'
  | 'LOCATION_CANNOT_ACCEPT_PAYMENT'
  | 'CUSTOMER_DELETED'
  | 'CUSTOMER_NO_EMAIL'
  | 'CUSTOMER_NO_NAME'
  | 'USER_PROVIDED';

export type SubscriptionEventSubscriptionEventType =
  | 'START_SUBSCRIPTION'
  | 'PLAN_CHANGE'
  | 'STOP_SUBSCRIPTION'
  | 'DEACTIVATE_SUBSCRIPTION'
  | 'RESUME_SUBSCRIPTION'
  | 'PAUSE_SUBSCRIPTION';

export type SubscriptionStatus =
  | 'PENDING'
  | 'ACTIVE'
  | 'CANCELED'
  | 'DEACTIVATED'
  | 'PAUSED';

export type TaxCalculationPhase = 'TAX_SUBTOTAL_PHASE' | 'TAX_TOTAL_PHASE';

export type TaxInclusionType = 'ADDITIVE' | 'INCLUSIVE';

export type TeamMemberAssignedLocationsAssignmentType =
  | 'ALL_CURRENT_AND_FUTURE_LOCATIONS'
  | 'EXPLICIT_LOCATIONS';

export type TeamMemberInvitationStatus = 'UNINVITED' | 'PENDING' | 'ACCEPTED';

export type TeamMemberStatus = 'ACTIVE' | 'INACTIVE';

export type V1TenderCardBrand =
  | 'OTHER_BRAND'
  | 'VISA'
  | 'MASTER_CARD'
  | 'AMERICAN_EXPRESS'
  | 'DISCOVER'
  | 'DISCOVER_DINERS'
  | 'JCB'
  | 'CHINA_UNIONPAY'
  | 'SQUARE_GIFT_CARD';

export type TenderCardDetailsEntryMethod =
  | 'SWIPED'
  | 'KEYED'
  | 'EMV'
  | 'ON_FILE'
  | 'CONTACTLESS';

export type TenderCardDetailsStatus =
  | 'AUTHORIZED'
  | 'CAPTURED'
  | 'VOIDED'
  | 'FAILED';

export type V1TenderEntryMethod =
  | 'MANUAL'
  | 'SCANNED'
  | 'SQUARE_CASH'
  | 'SQUARE_WALLET'
  | 'SWIPED'
  | 'WEB_FORM'
  | 'OTHER';

export type TenderType =
  | 'CARD'
  | 'CASH'
  | 'THIRD_PARTY_CARD'
  | 'SQUARE_GIFT_CARD'
  | 'NO_SALE'
  | 'WALLET'
  | 'OTHER';

export type V1TenderType =
  | 'CREDIT_CARD'
  | 'CASH'
  | 'THIRD_PARTY_CARD'
  | 'NO_SALE'
  | 'SQUARE_WALLET'
  | 'SQUARE_GIFT_CARD'
  | 'UNKNOWN'
  | 'OTHER';

export type TerminalActionActionType = 'PING' | 'SAVE_CARD';

export type TransactionProduct =
  | 'REGISTER'
  | 'EXTERNAL_API'
  | 'BILLING'
  | 'APPOINTMENTS'
  | 'INVOICES'
  | 'ONLINE_STORE'
  | 'PAYROLL'
  | 'OTHER';

export type TransactionType = 'DEBIT' | 'CREDIT';

export type VendorCreatedWebhookObjectOperation = 'CREATED';

export type VendorStatus = 'ACTIVE' | 'INACTIVE';

export type VendorUpdatedWebhookObjectOperation = 'UPDATED';

export type VisibilityFilter = 'ALL' | 'READ' | 'READ_WRITE';

export type V1WebhooksEvents =
  | 'PAYMENT_UPDATED'
  | 'INVENTORY_UPDATED'
  | 'TIMECARD_UPDATED';

export type Weekday = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
