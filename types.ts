import {
  ApplicationDetailsExternalSquareProduct,
  BankAccountType,
  Country,
  Currency,
  Product,
} from './enums';

/**
 * ACHDetails
 * ACH-specific details about BANK_ACCOUNT type payments with the transfer_type of ACH.
 *
 *
 * @property {string} routing_number
 * The routing number for the bank account.
 *
 * Max Length 50
 *
 * @property {string} account_number_suffix
 * The last few digits of the bank account number.
 *
 * Min Length 1 Max Length 4
 *
 * @property {BankAccountType} account_type
 * The type of the bank account performing the transfer. The account type can be CHECKING, SAVINGS, or UNKNOWN.
 *
 * Max Length 50
 */
export type ACHDetails = {
  routing_number: string;
  account_number_suffix: string;
  account_type: BankAccountType | 'UNKNOWN';
};
/**
 * AcceptedPaymentMethods
 *
 *
 *
 * @property {boolean} apple_pay
 * Whether Apple Pay is accepted at checkout.
 *
 * @property {boolean} google_pay
 * Whether Google Pay is accepted at checkout.
 *
 * @property {boolean} cash_app_pay
 * Whether Cash App Pay is accepted at checkout.
 *
 * @property {boolean} afterpay_clearpay
 * Whether Afterpay/Clearpay is accepted at checkout.
 */
export type AcceptedPaymentMethods = {
  apple_pay: boolean;
  google_pay: boolean;
  cash_app_pay: boolean;
  afterpay_clearpay: boolean;
};

/**
 * AdditionalRecipient
 * DEPRECATED
 * Represents an additional recipient (other than the merchant) receiving a portion of this tender.
 *
 * @property {string} location_id
 * The location ID for a recipient (other than the merchant) receiving a portion of this tender.
 *
 * Min Length 1 Max Length 50
 *
 * @property {string} description
 * The description of the additional recipient.
 *
 * Max Length 100
 *
 * @property {Money} amount_money
 * The amount of money distributed to the recipient.
 *
 * @property {string} receivable_id
 * The unique ID for the RETIRED AdditionalRecipientReceivable object. This field should be empty for any AdditionalRecipient objects created after the retirement.
 *
 * Max Length 192
 */
export type AdditionalRecipient = {
  location_id: string;
  description: string;
  amount_money: Money;
  receivable_id: string;
};

/**
 * Address
 * Represents a postal address in a country.
 *
 * @property {string} address_line_1
 *
 * The first line of the address.
 *
 * Fields that start with address_line provide the address's most specific details, like street number, street name, and building name. They do not provide less specific details like city, state/province, or country (these details are provided in other fields).
 *
 * @property {string} address_line_2
 *
 * The second line of the address, if any.
 *
 * @property {string} address_line_3
 *
 * The third line of the address, if any.
 *
 * @property {string} locality
 *
 * The city or town of the address. For a full list of field meanings by country, see Working with Addresses.
 *
 * @property {string} sublocality
 *
 * A civil region within the address's locality, if any.
 *
 * @property {string} sublocality_2
 *
 * A civil region within the address's sublocality, if any.
 *
 * @property {string} sublocality_3
 *
 * A civil region within the address's sublocality_2, if any.
 *
 * @property {string} administrative_district_level_1
 *
 * A civil entity within the address's country. In the US, this is the state. For a full list of field meanings by country, see Working with Addresses.
 *
 * @property {string} administrative_district_level_2
 *
 * A civil entity within the address's administrative_district_level_1. In the US, this is the county.
 *
 * @property {string} administrative_district_level_3
 *
 * A civil entity within the address's administrative_district_level_2, if any.
 *
 * @property {string} postal_code
 *
 * The address's postal code. For a full list of field meanings by country, see Working with Addresses.
 *
 * @property {Country} country
 *
 * The address's country, in the two-letter format of ISO 3166. For example, US or FR.
 *
 * @property {string} first_name
 *
 * Optional first name when it's representing recipient.
 *
 * @property {string} last_name
 *
 * Optional last name when it's representing recipient.
 */
export type Address = {
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  locality: string;
  sublocality: string;
  sublocality_2: string;
  sublocality_3: string;
  administrative_district_level_1: string;
  administrative_district_level_2: string;
  administrative_district_level_3: string;
  postal_code: string;
  country: Country;
  first_name: string;
  last_name: string;
};

/**
 * AfterpayDetails

 * Additional details about Afterpay payments.
 * 
 *  @property {string} email_address
 *  
 * Email address on the buyer's Afterpay account.
 * 
 * Max Length 255
 */
export type AfterpayDetails = {
  email_address: string;
};

/**
 * ApplicationDetails
 *
 * Details about the application that took the payment.
 *
 *
 * @property {ApplicationDetailsExternalSquareProduct} square_product
 *
 * The Square product, such as Square Point of Sale (POS), Square Invoices, or Square Virtual Terminal.
 *
 * @property {string} application_id
 *
 * The Square ID assigned to the application used to take the payment. Application developers can use this information to identify payments that their application processed. For example, if a developer uses a custom application to process payments, this field contains the application ID from the Developer Dashboard. If a seller uses a Square App Marketplace application to process payments, the field contains the corresponding application ID.
 */
export type ApplicationDetails = {
  square_product: ApplicationDetailsExternalSquareProduct;
  application_id: string;
};

/**
 *
 */
export type AppointmentSegment = {};

/**
 *
 */
export type Availability = {};

/**
 *
 */
export type BankAccount = {};

/**
 *
 */
export type BankAccountCreatedWebhookData = {};

/**
 *
 */
export type BankAccountCreatedWebhookObject = {};

/**
 *
 */
export type BankAccountDisabledWebhookData = {};

/**
 *
 */
export type BankAccountDisabledWebhookObject = {};

/**
 *
 */
export type BankAccountPaymentDetails = {};

/**
 *
 */
export type BankAccountVerifiedWebhookData = {};

/**
 *
 */
export type BankAccountVerifiedWebhookObject = {};

/**
 *
 */
export type Booking = {};

/**
 *
 */
export type BookingCreatedWebhookData = {};

/**
 *
 */
export type BookingCreatedWebhookObject = {};

/**
 *
 */
export type BookingCreatorDetails = {};

/**
 *
 */
export type BookingUpdatedWebhookData = {};

/**
 *
 */
export type BookingUpdatedWebhookObject = {};

/**
 *
 */
export type Break = {};

/**
 *
 */
export type BreakType = {};

/**
 *
 */
export type BusinessAppointmentSettings = {};

/**
 *
 */
export type BusinessBookingProfile = {};

/**
 *
 */
export type BusinessHours = {};

/**
 *
 */
export type BusinessHoursPeriod = {};

/**
 *
 */
export type BuyNowPayLaterDetails = {};

/**
 *
 */
export type Card = {};

/**
 *
 */
export type CardAutomaticallyUpdatedWebhookData = {};

/**
 *
 */
export type CardAutomaticallyUpdatedWebhookObject = {};

/**
 *
 */
export type CardCreatedWebhookData = {};

/**
 *
 */
export type CardCreatedWebhookObject = {};

/**
 *
 */
export type CardDisabledWebhookData = {};

/**
 *
 */
export type CardDisabledWebhookObject = {};

/**
 *
 */
export type CardForgottenWebhookCard = {};

/**
 *
 */
export type CardForgottenWebhookData = {};

/**
 *
 */
export type CardForgottenWebhookObject = {};

/**
 *
 */
export type CardPaymentDetails = {};

/**
 *
 */
export type CardPaymentTimeline = {};

/**
 *
 */
export type CardUpdatedWebhookData = {};

/**
 *
 */
export type CardUpdatedWebhookObject = {};

/**
 *
 */
export type CashAppDetails = {};

/**
 *
 */
export type CashDrawerDevice = {};

/**
 *
 */
export type CashDrawerShift = {};

/**
 *
 */
export type CashDrawerShiftEvent = {};

/**
 *
 */
export type CashDrawerShiftSummary = {};

/**
 *
 */
export type CashPaymentDetails = {};

/**
 *
 */
export type CatalogCategory = {};

/**
 *
 */
export type CatalogCustomAttributeDefinition = {};

/**
 *
 */
export type CatalogCustomAttributeDefinitionNumberConfig = {};

/**
 *
 */
export type CatalogCustomAttributeDefinitionSelectionConfig = {};

/**
 *
 */
export type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection =
  {};

/**
 *
 */
export type CatalogCustomAttributeDefinitionStringConfig = {};

/**
 *
 */
export type CatalogCustomAttributeValue = {};

/**
 *
 */
export type CatalogDiscount = {};

/**
 *
 */
export type CatalogIdMapping = {};

/**
 *
 */
export type CatalogImage = {};

/**
 *
 */
export type CatalogInfoResponseLimits = {};

/**
 *
 */
export type CatalogItem = {};

/**
 *
 */
export type CatalogItemModifierListInfo = {};

/**
 *
 */
export type CatalogItemOption = {};

/**
 *
 */
export type CatalogItemOptionForItem = {};

/**
 *
 */
export type CatalogItemOptionValue = {};

/**
 *
 */
export type CatalogItemOptionValueForItemVariation = {};

/**
 *
 */
export type CatalogItemVariation = {};

/**
 *
 */
export type CatalogMeasurementUnit = {};

/**
 *
 */
export type CatalogModifier = {};

/**
 *
 */
export type CatalogModifierList = {};

/**
 *
 */
export type CatalogModifierOverride = {};

/**
 *
 */
export type CatalogObject = {};

/**
 *
 */
export type CatalogObjectBatch = {};

/**
 *
 */
export type CatalogObjectReference = {};

/**
 *
 */
export type CatalogPricingRule = {};

/**
 *
 */
export type CatalogProductSet = {};

/**
 *
 */
export type CatalogQuery = {};

/**
 *
 */
export type CatalogQueryExact = {};

/**
 *
 */
export type CatalogQueryItemVariationsForItemOptionValues = {};

/**
 *
 */
export type CatalogQueryItemsForItemOptions = {};

/**
 *
 */
export type CatalogQueryItemsForModifierList = {};

/**
 *
 */
export type CatalogQueryItemsForTax = {};

/**
 *
 */
export type CatalogQueryPrefix = {};

/**
 *
 */
export type CatalogQueryRange = {};

/**
 *
 */
export type CatalogQuerySet = {};

/**
 *
 */
export type CatalogQuerySortedAttribute = {};

/**
 *
 */
export type CatalogQueryText = {};

/**
 *
 */
export type CatalogQuickAmount = {};

/**
 *
 */
export type CatalogQuickAmountsSettings = {};

/**
 *
 */
export type CatalogStockConversion = {};

/**
 *
 */
export type CatalogSubscriptionPlan = {};

/**
 *
 */
export type CatalogTax = {};

/**
 *
 */
export type CatalogTimePeriod = {};

/**
 *
 */
export type CatalogV1Id = {};

/**
 *
 */
export type CatalogVersionUpdatedWebhookCatalogVersion = {};

/**
 *
 */
export type CatalogVersionUpdatedWebhookData = {};

/**
 *
 */
export type CatalogVersionUpdatedWebhookObject = {};

/**
 *
 */
export type ChargeRequestAdditionalRecipient = {};

/**
 *
 */
export type Checkout = {};

/**
 *
 */
export type CheckoutOptions = {};

/**
 *
 */
export type ClearpayDetails = {};

/**
 *
 */
export type Coordinates = {};

/**
 *
 */
export type CustomAttribute = {};

/**
 *
 */
export type CustomAttributeDefinition = {};

/**
 *
 */
export type CustomAttributeDefinitionWebhookData = {};

/**
 *
 */
export type CustomAttributeDefinitionWebhookDataObject = {};

/**
 *
 */
export type CustomAttributeFilter = {};

/**
 *
 */
export type CustomAttributeWebhookData = {};

/**
 *
 */
export type CustomAttributeWebhookDataObject = {};

/**
 *
 */
export type CustomField = {};

/**
 *
 */
export type Customer = {};

/**
 *
 */
export type CustomerAddressFilter = {};

/**
 *
 */
export type CustomerCreatedWebhookData = {};

/**
 *
 */
export type CustomerCreatedWebhookEventContext = {};

/**
 *
 */
export type CustomerCreatedWebhookEventContextMerge = {};

/**
 *
 */
export type CustomerCreatedWebhookObject = {};

/**
 *
 */
export type CustomerCreationSourceFilter = {};

/**
 *
 */
export type CustomerCustomAttributeFilter = {};

/**
 *
 */
export type CustomerCustomAttributeFilterValue = {};

/**
 *
 */
export type CustomerCustomAttributeFilters = {};

/**
 *
 */
export type CustomerDeletedWebhookData = {};

/**
 *
 */
export type CustomerDeletedWebhookEventContext = {};

/**
 *
 */
export type CustomerDeletedWebhookEventContextMerge = {};

/**
 *
 */
export type CustomerDeletedWebhookObject = {};

/**
 *
 */
export type CustomerFilter = {};

/**
 *
 */
export type CustomerGroup = {};

/**
 *
 */
export type CustomerPreferences = {};

/**
 *
 */
export type CustomerQuery = {};

/**
 *
 */
export type CustomerSegment = {};

/**
 *
 */
export type CustomerSort = {};

/**
 *
 */
export type CustomerTaxIds = {};

/**
 *
 */
export type CustomerTextFilter = {};

/**
 *
 */
export type CustomerUpdatedWebhookData = {};

/**
 *
 */
export type CustomerUpdatedWebhookObject = {};

/**
 *
 */
export type DateRange = {};

/**
 *
 */
export type Destination = {};

/**
 *
 */
export type Device = {};

/**
 *
 */
export type DeviceCheckoutOptions = {};

/**
 *
 */
export type DeviceCode = {};

/**
 *
 */
export type DeviceCodePairedWebhookData = {};

/**
 *
 */
export type DeviceCodePairedWebhookObject = {};

/**
 *
 */
export type DeviceDetails = {};

/**
 *
 */
export type DeviceMetadata = {};

/**
 *
 */
export type DigitalWalletDetails = {};

/**
 *
 */
export type Dispute = {};

/**
 *
 */
export type DisputeCreatedWebhookData = {};

/**
 *
 */
export type DisputeCreatedWebhookObject = {};

/**
 *
 */
export type DisputeEvidence = {};

/**
 *
 */
export type DisputeEvidenceAddedWebhookData = {};

/**
 *
 */
export type DisputeEvidenceAddedWebhookObject = {};

/**
 *
 */
export type DisputeEvidenceCreatedWebhookData = {};

/**
 *
 */
export type DisputeEvidenceCreatedWebhookObject = {};

/**
 *
 */
export type DisputeEvidenceDeletedWebhookData = {};

/**
 *
 */
export type DisputeEvidenceDeletedWebhookObject = {};

/**
 *
 */
export type DisputeEvidenceFile = {};

/**
 *
 */
export type DisputeEvidenceRemovedWebhookData = {};

/**
 *
 */
export type DisputeEvidenceRemovedWebhookObject = {};

/**
 *
 */
export type DisputeStateChangedWebhookData = {};

/**
 *
 */
export type DisputeStateChangedWebhookObject = {};

/**
 *
 */
export type DisputeStateUpdatedWebhookData = {};

/**
 *
 */
export type DisputeStateUpdatedWebhookObject = {};

/**
 *
 */
export type DisputedPayment = {};

/**
 *
 */
export type Employee = {};

/**
 *
 */
export type EmployeeWage = {};

/**
 *
 */
export type Error = {};

/**
 *
 */
export type EventTypeMetadata = {};

/**
 *
 */
export type ExternalPaymentDetails = {};

/**
 *
 */
export type FilterValue = {};

/**
 *
 */
export type FloatNumberRange = {};

/**
 *
 */
export type GiftCard = {};

/**
 *
 */
export type GiftCardActivity = {};

/**
 *
 */
export type GiftCardActivityActivate = {};

/**
 *
 */
export type GiftCardActivityAdjustDecrement = {};

/**
 *
 */
export type GiftCardActivityAdjustIncrement = {};

/**
 *
 */
export type GiftCardActivityBlock = {};

/**
 *
 */
export type GiftCardActivityClearBalance = {};

/**
 *
 */
export type GiftCardActivityCreatedWebhookData = {};

/**
 *
 */
export type GiftCardActivityCreatedWebhookObject = {};

/**
 *
 */
export type GiftCardActivityDeactivate = {};

/**
 *
 */
export type GiftCardActivityImport = {};

/**
 *
 */
export type GiftCardActivityImportReversal = {};

/**
 *
 */
export type GiftCardActivityLoad = {};

/**
 *
 */
export type GiftCardActivityRedeem = {};

/**
 *
 */
export type GiftCardActivityRefund = {};

/**
 *
 */
export type GiftCardActivityUnblock = {};

/**
 *
 */
export type GiftCardActivityUnlinkedActivityRefund = {};

/**
 *
 */
export type GiftCardActivityUpdatedWebhookData = {};

/**
 *
 */
export type GiftCardActivityUpdatedWebhookObject = {};

/**
 *
 */
export type GiftCardCreatedWebhookData = {};

/**
 *
 */
export type GiftCardCreatedWebhookObject = {};

/**
 *
 */
export type GiftCardCustomerLinkedWebhookData = {};

/**
 *
 */
export type GiftCardCustomerLinkedWebhookObject = {};

/**
 *
 */
export type GiftCardCustomerUnlinkedWebhookData = {};

/**
 *
 */
export type GiftCardCustomerUnlinkedWebhookObject = {};

/**
 *
 */
export type GiftCardUpdatedWebhookData = {};

/**
 *
 */
export type GiftCardUpdatedWebhookObject = {};

/**
 *
 */
export type InventoryAdjustment = {};

/**
 *
 */
export type InventoryAdjustmentGroup = {};

/**
 *
 */
export type InventoryChange = {};

/**
 *
 */
export type InventoryCount = {};

/**
 *
 */
export type InventoryCountUpdatedWebhookData = {};

/**
 *
 */
export type InventoryCountUpdatedWebhookObject = {};

/**
 *
 */
export type InventoryPhysicalCount = {};

/**
 *
 */
export type InventoryTransfer = {};

/**
 *
 */
export type Invoice = {};

/**
 *
 */
export type InvoiceAcceptedPaymentMethods = {};

/**
 *
 */
export type InvoiceCanceledWebhookData = {};

/**
 *
 */
export type InvoiceCanceledWebhookObject = {};

/**
 *
 */
export type InvoiceCreatedWebhookData = {};

/**
 *
 */
export type InvoiceCreatedWebhookObject = {};

/**
 *
 */
export type InvoiceCustomField = {};

/**
 *
 */
export type InvoiceDeletedWebhookData = {};

/**
 *
 */
export type InvoiceFilter = {};

/**
 *
 */
export type InvoicePaymentMadeWebhookData = {};

/**
 *
 */
export type InvoicePaymentMadeWebhookObject = {};

/**
 *
 */
export type InvoicePaymentReminder = {};

/**
 *
 */
export type InvoicePublishedWebhookData = {};

/**
 *
 */
export type InvoicePublishedWebhookObject = {};

/**
 *
 */
export type InvoiceQuery = {};

/**
 *
 */
export type InvoiceRecipient = {};

/**
 *
 */
export type InvoiceRecipientTaxIds = {};

/**
 *
 */
export type InvoiceRefundedWebhookData = {};

/**
 *
 */
export type InvoiceRefundedWebhookObject = {};

/**
 *
 */
export type InvoiceScheduledChargeFailedWebhookData = {};

/**
 *
 */
export type InvoiceScheduledChargeFailedWebhookObject = {};

/**
 *
 */
export type InvoiceSort = {};

/**
 *
 */
export type InvoiceUpdatedWebhookData = {};

/**
 *
 */
export type InvoiceUpdatedWebhookObject = {};

/**
 *
 */
export type ItemVariationLocationOverrides = {};

/**
 *
 */
export type JobAssignment = {};

/**
 *
 */
export type LaborShiftCreatedWebhookData = {};

/**
 *
 */
export type LaborShiftCreatedWebhookObject = {};

/**
 *
 */
export type LaborShiftDeletedWebhookData = {};

/**
 *
 */
export type LaborShiftUpdatedWebhookData = {};

/**
 *
 */
export type LaborShiftUpdatedWebhookObject = {};

/**
 *
 */
export type Location = {};

/**
 *
 */
export type LocationCreatedWebhookData = {};

/**
 *
 */
export type LocationUpdatedWebhookData = {};

/**
 *
 */
export type LoyaltyAccount = {};

/**
 *
 */
export type LoyaltyAccountCreatedWebhookData = {};

/**
 *
 */
export type LoyaltyAccountDeletedWebhookData = {};

/**
 *
 */
export type LoyaltyAccountExpiringPointDeadline = {};

/**
 *
 */
export type LoyaltyAccountMapping = {};

/**
 *
 */
export type LoyaltyAccountUpdatedWebhookData = {};

/**
 *
 */
export type LoyaltyEvent = {};

/**
 *
 */
export type LoyaltyEventAccumulatePoints = {};

/**
 *
 */
export type LoyaltyEventAccumulatePromotionPoints = {};

/**
 *
 */
export type LoyaltyEventAdjustPoints = {};

/**
 *
 */
export type LoyaltyEventCreateReward = {};

/**
 *
 */
export type LoyaltyEventCreatedWebhookData = {};

/**
 *
 */
export type LoyaltyEventDateTimeFilter = {};

/**
 *
 */
export type LoyaltyEventDeleteReward = {};

/**
 *
 */
export type LoyaltyEventExpirePoints = {};

/**
 *
 */
export type LoyaltyEventFilter = {};

/**
 *
 */
export type LoyaltyEventLocationFilter = {};

/**
 *
 */
export type LoyaltyEventLoyaltyAccountFilter = {};

/**
 *
 */
export type LoyaltyEventOrderFilter = {};

/**
 *
 */
export type LoyaltyEventOther = {};

/**
 *
 */
export type LoyaltyEventQuery = {};

/**
 *
 */
export type LoyaltyEventRedeemReward = {};

/**
 *
 */
export type LoyaltyEventTypeFilter = {};

/**
 *
 */
export type LoyaltyProgram = {};

/**
 *
 */
export type LoyaltyProgramAccrualRule = {};

/**
 *
 */
export type LoyaltyProgramAccrualRuleCategoryData = {};

/**
 *
 */
export type LoyaltyProgramAccrualRuleItemVariationData = {};

/**
 *
 */
export type LoyaltyProgramAccrualRuleSpendData = {};

/**
 *
 */
export type LoyaltyProgramAccrualRuleVisitData = {};

/**
 *
 */
export type LoyaltyProgramCreatedWebhookData = {};

/**
 *
 */
export type LoyaltyProgramCreatedWebhookObject = {};

/**
 *
 */
export type LoyaltyProgramExpirationPolicy = {};

/**
 *
 */
export type LoyaltyProgramRewardDefinition = {};

/**
 *
 */
export type LoyaltyProgramRewardTier = {};

/**
 *
 */
export type LoyaltyProgramTerminology = {};

/**
 *
 */
export type LoyaltyProgramUpdatedWebhookData = {};

/**
 *
 */
export type LoyaltyPromotion = {};

/**
 *
 */
export type LoyaltyPromotionAvailableTimeData = {};

/**
 *
 */
export type LoyaltyPromotionCreatedWebhookData = {};

/**
 *
 */
export type LoyaltyPromotionIncentive = {};

/**
 *
 */
export type LoyaltyPromotionIncentivePointsAdditionData = {};

/**
 *
 */
export type LoyaltyPromotionIncentivePointsMultiplierData = {};

/**
 *
 */
export type LoyaltyPromotionTriggerLimit = {};

/**
 *
 */
export type LoyaltyPromotionUpdatedWebhookData = {};

/**
 *
 */
export type LoyaltyReward = {};

/**
 *
 */
export type MeasurementUnit = {};

/**
 *
 */
export type MeasurementUnitCustom = {};

/**
 *
 */
export type Merchant = {};

/**
 *
 */

/**
 * @property {Integer} amount
 * The amount of money, in the smallest denomination of the currency indicated by currency. For example, when currency is USD, amount is in cents. Monetary amounts can be positive or negative. See the specific field description to determine the meaning of the sign in a particular case.
 *
 * @property {Currency} currency
 * The type of currency, in ISO 4217 format. For example, the currency code for US dollars is USD.
 */
export type Money = {
  amount: number;
  currency: Currency;
};

export type V1Money = {};

/**
 *
 */
export type OauthAuthorizationRevokedWebhookData = {};

/**
 *
 */
export type OauthAuthorizationRevokedWebhookObject = {};

/**
 *
 */
export type OauthAuthorizationRevokedWebhookRevocationObject = {};

/**
 *
 */
export type Order = {};

/**
 *
 */
export type OrderCreated = {};

/**
 *
 */
export type OrderCreatedObject = {};

/**
 *
 */
export type OrderCreatedWebhookData = {};

/**
 *
 */
export type OrderEntry = {};

/**
 *
 */
export type OrderFulfillment = {};

/**
 *
 */
export type OrderFulfillmentFulfillmentEntry = {};

/**
 *
 */
export type OrderFulfillmentPickupDetails = {};

/**
 *
 */
export type OrderFulfillmentPickupDetailsCurbsidePickupDetails = {};

/**
 *
 */
export type OrderFulfillmentRecipient = {};

/**
 *
 */
export type OrderFulfillmentShipmentDetails = {};

/**
 *
 */
export type OrderFulfillmentUpdated = {};

/**
 *
 */
export type OrderFulfillmentUpdatedObject = {};

/**
 *
 */
export type OrderFulfillmentUpdatedUpdate = {};

/**
 *
 */
export type OrderFulfillmentUpdatedWebhookData = {};

/**
 *
 */
export type OrderLineItem = {};

/**
 *
 */
export type OrderLineItemAppliedDiscount = {};

/**
 *
 */
export type OrderLineItemAppliedTax = {};

/**
 *
 */
export type OrderLineItemDiscount = {};

/**
 *
 */
export type OrderLineItemModifier = {};

/**
 *
 */
export type OrderLineItemPricingBlocklists = {};

/**
 *
 */
export type OrderLineItemPricingBlocklistsBlockedDiscount = {};

/**
 *
 */
export type OrderLineItemPricingBlocklistsBlockedTax = {};

/**
 *
 */
export type OrderLineItemTax = {};

/**
 *
 */
export type OrderMoneyAmounts = {};

/**
 *
 */
export type OrderPricingOptions = {};

/**
 *
 */
export type OrderQuantityUnit = {};

/**
 *
 */
export type OrderReturn = {};

/**
 *
 */
export type OrderReturnDiscount = {};

/**
 *
 */
export type OrderReturnLineItem = {};

/**
 *
 */
export type OrderReturnLineItemModifier = {};

/**
 *
 */
export type OrderReturnServiceCharge = {};

/**
 *
 */
export type OrderReturnTax = {};

/**
 *
 */
export type OrderReward = {};

/**
 *
 */
export type OrderRoundingAdjustment = {};

/**
 *
 */
export type OrderServiceCharge = {};

/**
 *
 */
export type OrderSource = {};

/**
 *
 */
export type OrderUpdated = {};

/**
 *
 */
export type OrderUpdatedObject = {};

/**
 *
 */
export type OrderUpdatedWebhookData = {};

/**
 *
 */
export type V1Payment = {};

/**
 *
 */
export type Payment = {};

/**
 *
 */
export type PaymentBalanceActivityAutomaticSavingsDetail = {};

/**
 *
 */
export type PaymentBalanceActivityAutomaticSavingsReversedDetail = {};

/**
 *
 */
export type PaymentBalanceActivityChargeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityDepositFeeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityDisputeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityFeeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityFreeProcessingDetail = {};

/**
 *
 */
export type PaymentBalanceActivityHoldAdjustmentDetail = {};

/**
 *
 */
export type PaymentBalanceActivityOpenDisputeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityOtherAdjustmentDetail = {};

/**
 *
 */
export type PaymentBalanceActivityOtherDetail = {};

/**
 *
 */
export type PaymentBalanceActivityRefundDetail = {};

/**
 *
 */
export type PaymentBalanceActivityReleaseAdjustmentDetail = {};

/**
 *
 */
export type PaymentBalanceActivityReserveHoldDetail = {};

/**
 *
 */
export type PaymentBalanceActivityReserveReleaseDetail = {};

/**
 *
 */
export type PaymentBalanceActivitySquareCapitalPaymentDetail = {};

/**
 *
 */
export type PaymentBalanceActivitySquareCapitalReversedPaymentDetail = {};

/**
 *
 */
export type PaymentBalanceActivityTaxOnFeeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityThirdPartyFeeDetail = {};

/**
 *
 */
export type PaymentBalanceActivityThirdPartyFeeRefundDetail = {};

/**
 *
 */
export type PaymentCreatedWebhookData = {};

/**
 *
 */
export type PaymentCreatedWebhookObject = {};

/**
 *
 */
export type V1PaymentDiscount = {};

/**
 *
 */
export type V1PaymentItemDetail = {};

/**
 *
 */
export type V1PaymentItemization = {};

/**
 *
 */
export type PaymentLink = {};

/**
 *
 */
export type PaymentLinkRelatedResources = {};

/**
 *
 */
export type V1PaymentModifier = {};

/**
 *
 */
export type PaymentOptions = {};

/**
 *
 */
export type PaymentRefund = {};

/**
 *
 */
export type V1PaymentSurcharge = {};

/**
 *
 */
export type V1PaymentTax = {};

/**
 *
 */
export type PaymentUpdatedWebhookData = {};

/**
 *
 */
export type PaymentUpdatedWebhookObject = {};

/**
 *
 */
export type Payout = {};

/**
 *
 */
export type PayoutEntry = {};

/**
 *
 */
export type PayoutFailedWebhookData = {};

/**
 *
 */
export type PayoutFailedWebhookObject = {};

/**
 *
 */
export type PayoutFee = {};

/**
 *
 */
export type PayoutPaidWebhookData = {};

/**
 *
 */
export type PayoutPaidWebhookObject = {};

/**
 *
 */
export type PayoutSentWebhookData = {};

/**
 *
 */
export type PayoutSentWebhookObject = {};

/**
 *
 */
export type V1PhoneNumber = {};

/**
 *
 */
export type PrePopulatedData = {};

/**
 *
 */
export type ProcessingFee = {};

/**
 *
 */
export type QuantityRatio = {};

/**
 *
 */
export type QuickPay = {};

/**
 *
 */
export type Range = {};

/**
 *
 */
export type Refund = {};

/**
 *
 */
export type V1Refund = {};

/**
 *
 */
export type RefundCreatedWebhookData = {};

/**
 *
 */
export type RefundCreatedWebhookObject = {};

/**
 *
 */
export type RefundUpdatedWebhookData = {};

/**
 *
 */
export type RefundUpdatedWebhookObject = {};

/**
 *
 */
export type RiskEvaluation = {};

/**
 *
 */
export type SaveCardOptions = {};

/**
 *
 */
export type SearchAvailabilityFilter = {};

/**
 *
 */
export type SearchAvailabilityQuery = {};

/**
 *
 */
export type SearchLoyaltyAccountsRequestLoyaltyAccountQuery = {};

/**
 *
 */
export type SearchLoyaltyRewardsRequestLoyaltyRewardQuery = {};

/**
 *
 */
export type SearchOrdersCustomerFilter = {};

/**
 *
 */
export type SearchOrdersDateTimeFilter = {};

/**
 *
 */
export type SearchOrdersFilter = {};

/**
 *
 */
export type SearchOrdersFulfillmentFilter = {};

/**
 *
 */
export type SearchOrdersQuery = {};

/**
 *
 */
export type SearchOrdersSort = {};

/**
 *
 */
export type SearchOrdersSourceFilter = {};

/**
 *
 */
export type SearchOrdersStateFilter = {};

/**
 *
 */
export type SearchSubscriptionsFilter = {};

/**
 *
 */
export type SearchSubscriptionsQuery = {};

/**
 *
 */
export type SearchTeamMembersFilter = {};

/**
 *
 */
export type SearchTeamMembersQuery = {};

/**
 *
 */
export type SearchVendorsRequestFilter = {};

/**
 *
 */
export type SearchVendorsRequestSort = {};

/**
 *
 */
export type SegmentFilter = {};

/**
 *
 */
export type V1Settlement = {};

/**
 *
 */
export type V1SettlementEntry = {};

/**
 *
 */
export type Shift = {};

/**
 *
 */
export type ShiftFilter = {};

/**
 *
 */
export type ShiftQuery = {};

/**
 *
 */
export type ShiftSort = {};

/**
 *
 */
export type ShiftWage = {};

/**
 *
 */
export type ShiftWorkday = {};

/**
 *
 */
export type ShippingFee = {};

/**
 *
 */
export type Site = {};

/**
 *
 */
export type Snippet = {};

/**
 *
 */
export type SourceApplication = {};

/**
 *
 */
export type StandardUnitDescription = {};

/**
 *
 */
export type StandardUnitDescriptionGroup = {};

/**
 *
 */
export type Subscription = {};

/**
 *
 */
export type SubscriptionAction = {};

/**
 *
 */
export type SubscriptionCreatedWebhookData = {};

/**
 *
 */
export type SubscriptionCreatedWebhookObject = {};

/**
 *
 */
export type SubscriptionEvent = {};

/**
 *
 */
export type SubscriptionEventInfo = {};

/**
 *
 */
export type SubscriptionPhase = {};

/**
 *
 */
export type SubscriptionSource = {};

/**
 *
 */
export type SubscriptionTestResult = {};

/**
 *
 */
export type SubscriptionUpdatedWebhookData = {};

/**
 *
 */
export type SubscriptionUpdatedWebhookObject = {};

/**
 *
 */
export type TaxIds = {};

/**
 *
 */
export type TeamMember = {};

/**
 *
 */
export type TeamMemberAssignedLocations = {};

/**
 *
 */
export type TeamMemberBookingProfile = {};

/**
 *
 */
export type TeamMemberCreatedWebhookData = {};

/**
 *
 */
export type TeamMemberCreatedWebhookObject = {};

/**
 *
 */
export type TeamMemberUpdatedWebhookData = {};

/**
 *
 */
export type TeamMemberUpdatedWebhookObject = {};

/**
 *
 */
export type TeamMemberWage = {};

/**
 *
 */
export type TeamMemberWageSettingUpdatedWebhookData = {};

/**
 *
 */
export type TeamMemberWageSettingUpdatedWebhookObject = {};

/**
 *
 */
export type Tender = {};

/**
 *
 */
export type V1Tender = {};

/**
 *
 */
export type TenderCardDetails = {};

/**
 *
 */
export type TenderCashDetails = {};

/**
 *
 */
export type TerminalAction = {};

/**
 *
 */
export type TerminalActionCreatedWebhookData = {};

/**
 *
 */
export type TerminalActionCreatedWebhookObject = {};

/**
 *
 */
export type TerminalActionQuery = {};

/**
 *
 */
export type TerminalActionQueryFilter = {};

/**
 *
 */
export type TerminalActionQuerySort = {};

/**
 *
 */
export type TerminalActionUpdatedWebhookData = {};

/**
 *
 */
export type TerminalActionUpdatedWebhookObject = {};

/**
 *
 */
export type TerminalCheckout = {};

/**
 *
 */
export type TerminalCheckoutCreatedWebhookData = {};

/**
 *
 */
export type TerminalCheckoutCreatedWebhookObject = {};

/**
 *
 */
export type TerminalCheckoutQuery = {};

/**
 *
 */
export type TerminalCheckoutQueryFilter = {};

/**
 *
 */
export type TerminalCheckoutQuerySort = {};

/**
 *
 */
export type TerminalCheckoutUpdatedWebhookData = {};

/**
 *
 */
export type TerminalCheckoutUpdatedWebhookObject = {};

/**
 *
 */
export type TerminalRefund = {};

/**
 *
 */
export type TerminalRefundCreatedWebhookData = {};

/**
 *
 */
export type TerminalRefundCreatedWebhookObject = {};

/**
 *
 */
export type TerminalRefundQuery = {};

/**
 *
 */
export type TerminalRefundQueryFilter = {};

/**
 *
 */
export type TerminalRefundQuerySort = {};

/**
 *
 */
export type TerminalRefundUpdatedWebhookData = {};

/**
 *
 */
export type TerminalRefundUpdatedWebhookObject = {};

/**
 *
 */
export type TimeRange = {};

/**
 *
 */
export type TipSettings = {};

/**
 *
 */
export type Transaction = {};

/**
 *
 */
export type Vendor = {};

/**
 *
 */
export type VendorContact = {};

/**
 *
 */
export type VendorCreatedWebhookData = {};

/**
 *
 */
export type VendorCreatedWebhookObject = {};

/**
 *
 */
export type VendorUpdatedWebhookData = {};

/**
 *
 */
export type VendorUpdatedWebhookObject = {};

/**
 *
 */
export type WageSetting = {};

/**
 *
 */
export type Webhook = {};

/**
 *
 */
export type WebhookData = {};

/**
 *
 */
export type WebhookSubscription = {};

/**
 *
 */
export type WorkweekConfig = {};

/**
 *
 */
