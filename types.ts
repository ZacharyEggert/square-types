import {
  ApplicationDetailsExternalSquareProduct,
  BankAccountType,
  BookingBookingSource,
  BookingCreatorDetailsCreatorType,
  BookingStatus,
  BusinessAppointmentSettingsAlignmentTime,
  BusinessAppointmentSettingsBookingLocationType,
  BusinessAppointmentSettingsCancellationPolicy,
  BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType,
  BusinessBookingProfileBookingPolicy,
  BusinessBookingProfileCustomerTimezoneChoice,
  CardBrand,
  CardCoBrand,
  CardPrepaidType,
  CardType,
  CashDrawerEventType,
  CashDrawerShiftState,
  Country,
  Currency,
  DayOfWeek,
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
 * AppointmentSegment
 *
 * Defines an appointment segment of a booking.
 *
 *
 * @property {number} duration_minutes
 *
 * The time span in minutes of an appointment segment.
 *
 * @property {string} service_variation_id
 *
 * The ID of the CatalogItemVariation object representing the service booked in this segment.
 *
 * @property {string} team_member_id
 *
 * The ID of the TeamMember object representing the team member booked in this segment.
 *
 * @property {string} service_variation_version
 *
 * The current version of the item variation representing the service booked in this segment.
 *
 * @property {number} intermission_minutes
 *
 * Read only Time between the end of this segment and the beginning of the subsequent segment.
 *
 * @property {boolean) any_team_member
 *
 * Read only Whether the customer accepts any team member, instead of a specific one, to serve this segment.
 *
 * @property {string[]} resource_ids
 *
 * Read only The IDs of the seller-accessible resources used for this appointment segment.
 *
 */
export type AppointmentSegment = {
  duration_minutes: number;
  service_variation_id: string;
  team_member_id: string;
  service_variation_version: string;
  intermission_minutes: number;
  any_team_member: boolean;
  resource_ids: string;
};

/**
 * Availability
 *
 * Defines an appointment slot that encapsulates the appointment segments, location and starting time available for booking.
 *
 * @property {string} start_at
 *
 * The RFC 3339 timestamp specifying the beginning time of the slot available for booking.
 * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
 * UTC: 2020-01-26T02:25:34Z
 * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
 *
 * @property {string} location_id
 *
 * Read only The ID of the location available for booking.
 * Max Length 32
 *
 * @property {AppointmentSegment[]} appointment_segments
 *
 * The list of appointment segments available for booking
 *
 */
export type Availability = {
  start_at: string;
  location_id: string;
  appointment_segments: AppointmentSegment[];
};

/**
 * BankAccount
 *
 * Represents a bank account.
 * For more information about linking a bank account to a Square account, see Bank Accounts API.
 *
 * @property {string} id
 *
 * The unique, Square-issued identifier for the bank account.
 *
 *
 * @property {string} account_number_suffix
 *
 * The last few digits of the account number.
 *
 *
 * @property {string} country
 *
 * The ISO 3166 Alpha-2 country code where the bank account is based.
 *
 *
 * @property {string} currency
 *
 * The 3-character ISO 4217 currency code indicating the operating currency of the bank account. For example, the currency code for US dollars is USD.
 *
 *
 * @property {string} account_type
 *
 * The financial purpose of the associated bank account.
 *
 *
 * @property {string} holder_name
 *
 * Name of the account holder. This name must match the name on the targeted bank account record.
 *
 *
 * @property {string} primary_bank_identification_number
 *
 * Primary identifier for the bank. For more information, see Bank Accounts API.
 *
 *
 * @property {string} secondary_bank_identification_number
 *
 * Secondary identifier for the bank. For more information, see Bank Accounts API.
 *
 *
 * @property {string} debit_mandate_reference_id
 *
 * Reference identifier that will be displayed to UK bank account owners when collecting direct debit authorization. Only required for UK bank accounts.
 *
 *
 * @property {string} reference_id
 *
 * Client-provided identifier for linking the banking account to an entity in a third-party system (for example, a bank account number or a user identifier).
 *
 *
 * @property {string} location_id
 *
 * The location to which the bank account belongs.
 *
 *
 * @property {string} status
 *
 * Read-only. The current verification status of this BankAccount object.
 *
 *
 * @property {boolean} creditable
 *
 * Indicates whether it is possible for Square to send money to this bank account.
 *
 *
 * @property {boolean} debitable
 *
 * Indicates whether it is possible for Square to take money from this bank account.
 *
 *
 * @property {string} fingerprint
 *
 * A Square-assigned, unique identifier for the bank account based on the account information. The account fingerprint can be used to compare account entries and determine if the they represent the same real-world bank account.
 *
 *
 * @property {number} version
 *
 * The current version of the BankAccount.
 *
 *
 * @property {string} bank_name
 *
 * Read only. Name of actual financial institution. For example "Bank of America".
 *
 */
export type BankAccount = {
  id: string;
  account_number_suffix: string;
  country: string;
  currency: string;
  account_type: string;
  holder_name: string;
  primary_bank_identification_number: string;
  secondary_bank_identification_number: string;
  debit_mandate_reference_id: string;
  reference_id: string;
  location_id: string;
  status: string;
  creditable: boolean;
  debitable: boolean;
  fingerprint: string;
  version: number;
  bank_name: string;
};

/**
 * BankAccountCreatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * Name of the affected object’s type, "bank_account".
 *
 *
 * @property {string} id
 *
 * ID of the affected bank account.
 *
 *
 * @property {BankAccountCreatedWebhookObject} object
 *
 * An object containing the created bank account.
 *
 */
export type BankAccountCreatedWebhookData = {
  type: string;
  id: string;
  object: BankAccountCreatedWebhookObject;
};

/**
 * BankAccountCreatedWebhookObject
 *
 *
 *
 * @property {BankAccount} bank_account
 *
 * The created bank account.
 *
 */
export type BankAccountCreatedWebhookObject = {
  bank_account: BankAccount;
};

/**
 * BankAccountDisabledWebhookData
 *
 *
 *
 * @property {string} type
 *
 * Name of the affected object’s type, "bank_account".
 *
 *
 * @property {string} id
 *
 * ID of the affected bank account.
 *
 *
 * @property {BankAccountDisabledWebhookObject} object
 *
 * An object containing the disabled bank account.
 *
 */
export type BankAccountDisabledWebhookData = {
  type: string;
  id: string;
  object: BankAccountDisabledWebhookObject;
};

/**
 * BankAccountDisabledWebhookObject
 *
 *
 *
 * @property {BankAccount} bank_account
 *
 * The disabled bank account.
 *
 */
export type BankAccountDisabledWebhookObject = {
  bank_account: BankAccount;
};

/**
 * BankAccountPaymentDetails
Additional details about BANK_ACCOUNT type payments.
 *
 *
 *
 * @property {string} bank_name
 *
 * The name of the bank associated with the bank account.      
 *
 *
 * @property {string} transfer_type
 *
 * The type of the bank transfer. The type can be ACH or UNKNOWN.
 *
 *
 * @property {string} account_ownership_type
 *
 * The ownership type of the bank account performing the transfer. The type can be INDIVIDUAL, COMPANY, or UNKNOWN.
 *
 *
 * @property {string} fingerprint
 *
 * Uniquely identifies the bank account for this seller and can be used to determine if payments are from the same bank account.
 *
 *
 * @property {string} country
 *
 * The two-letter ISO code representing the country the bank account is located in.
 *
 *
 * @property {string} statement_description
 *
 * The statement description as sent to the bank.
 *
 *
 * @property {ACHDetails} ach_details
 *
 * ACH-specific information about the transfer. The information is only populated if the transfer_type is ACH.
 *
 *
 * @property {Error[]} errors
 *
 * Information about errors encountered during the request.    
 *
 */
export type BankAccountPaymentDetails = {
  bank_name: string;
  transfer_type: string;
  account_ownership_type: string;
  fingerprint: string;
  country: string;
  statement_description: string;
  ach_details: ACHDetails;
  errors: Error[];
};

/**
 * BankAccountVerifiedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * Name of the affected object’s type, "bank_account".
 *
 *
 * @property {string} id
 *
 * ID of the affected bank account.
 *
 *
 * @property {BankAccountVerifiedWebhookObject} object
 *
 * An object containing the verified bank account.
 *
 */
export type BankAccountVerifiedWebhookData = {
  type: string;
  id: string;
  object: BankAccountVerifiedWebhookObject;
};

/**
 * BankAccountVerifiedWebhookObject
 *
 *
 *
 * @property {BankAccount} bank_account
 *
 * The verified bank account.
 *
 */
export type BankAccountVerifiedWebhookObject = {
  bank_account: BankAccount;
};

/**
 * Booking
Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service at a given location to a requesting customer in one or more appointment segments.
 *
 *
 *
 * @property {string} id
 *
 * Read only A unique ID of this object representing a booking.
 *
 *
 * @property {number} version
 *
 * The revision number for the booking used for optimistic concurrency.
 *
 *
 * @property {string} status
 *
 * Read only The status of the booking, describing where the booking stands with respect to the booking state machine.        
 *
 *
 * @property {string} created_at
 *
 * Read only The RFC 3339 timestamp specifying the creation time of this booking.
 *
 *
 * @property {UTC: 2020-01-26T02:25:34Z} Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
 *
 * Read only The RFC 3339 timestamp specifying the most recent update time of this booking.
 *
 *
 * @property {UTC: 2020-01-26T02:25:34Z} Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
 *
 * The RFC 3339 timestamp specifying the starting time of this booking.
 *
 *
 * @property {UTC: 2020-01-26T02:25:34Z} Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
 *
 * The ID of the Location object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed.
 *
 *
 * @property {string} customer_id
 *
 * The ID of the Customer object representing the customer receiving the booked service.
 *
 *
 * @property {string} customer_note
 *
 * The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant CatalogObject instance.
 *
 *
 * @property {string} seller_note
 *
 * The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific CatalogObject instance. This field should not be visible to customers.     
 *
 *
 * @property {AppointmentSegment [ ]} appointment_segments     
 *
 * A list of appointment segments for this booking.
 *
 *
 * @property {number} transition_time_minutes
 *
 * Read only Additional time at the end of a booking. Applications should not make this field visible to customers of a seller.
 *
 *
 * @property {boolean} all_day
 *
 * Read only Whether the booking is of a full business day.    
 *
 *
 * @property {string} location_type
 *
 * The type of location where the booking is held. Access to this field requires seller-level permissions.
 *
 *
 * @property {BookingCreatorDetails} creator_details
 *
 * Read only Information about the booking creator.
 *
 *
 * @property {BookingBookingSource} source
 *
 * Read only The source of the booking. Access to this field requires seller-level permissions.
 *
 */
export type Booking = {
  id: string;
  version: number;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
  start_at: string;
  location_id: string;
  customer_id: string;
  customer_note: string;
  seller_note: string;
  appointment_segments: AppointmentSegment[];
  transition_time_minutes: number;
  all_day: boolean;
  location_type: BusinessAppointmentSettingsBookingLocationType;
  creator_details: BookingCreatorDetails;
  source: BookingBookingSource;
};

/**
 * BookingCreatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "booking".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {BookingCreatedWebhookObject} object
 *
 * An object containing the created booking.
 *
 */
export type BookingCreatedWebhookData = {
  type: string;
  id: string;
  object: BookingCreatedWebhookObject;
};

/**
 * BookingCreatedWebhookObject
 *
 *
 *
 * @property {Booking} booking
 *
 * The created booking.
 *
 */
export type BookingCreatedWebhookObject = {
  booking: Booking;
};

/** 
 * BookingCreatorDetails
Information about a booking creator.
 *
 *
 *
 * @property {BookingCreatorDetailsCreatorType} creator_type
 *
 * Read only The seller-accessible type of the creator of the booking.
 *
 *
 * @property {string} team_member_id
 *
 * Read only The ID of the team member who created the booking, when the booking creator is of the TEAM_MEMBER type. Access to this field requires seller-level permissions.
 *
 *
 * @property {string} customer_id
 *
 * Read only The ID of the customer who created the booking, when the booking creator is of the CUSTOMER type. Access to this field requires seller-level permissions.
 *
 */
export type BookingCreatorDetails = {
  creator_type: BookingCreatorDetailsCreatorType;
  team_member_id: string;
  customer_id: string;
};

/**
 * BookingUpdatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "booking".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {BookingUpdatedWebhookObject} object
 *
 * An object containing the updated booking.
 *
 */
export type BookingUpdatedWebhookData = {
  type: string;
  id: string;
  object: BookingUpdatedWebhookObject;
};

/**
 * BookingUpdatedWebhookObject
 *
 *
 *
 * @property {Booking} booking
 *
 * The updated booking.
 *
 */
export type BookingUpdatedWebhookObject = {
  booking: Booking;
};

/** 
 * Break
A record of an employee's break during a shift.
 *
 *
 *
 * @property {string} id
 *
 * The UUID for this object.
 *
 *
 * @property {string} start_at
 *
 * RFC 3339; follows the same timezone information as Shift. Precision up to the minute is respected; seconds are truncated.  
 *
 *
 * @property {string} break_type_id
 *
 * The BreakType that this Break was templated on.
 *
 *
 * @property {string} name
 *
 * A human-readable name.
 *
 *
 * @property {string} expected_duration
 *
 * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
 *
 *
 * @property {boolean} is_paid
 *
 * Whether this break counts towards time worked for compensation purposes.
 *
 */
export type Break = {
  id: string;
  start_at: string;
  break_type_id: string;
  name: string;
  expected_duration: string;
  is_paid: boolean;
};

/** 
 * BreakType
A defined break template that sets an expectation for possible Break instances on a Shift.
 *
 *
 *
 * @property {string} id
 *
 * The UUID for this object.
 *
 *
 * @property {string} location_id
 *
 * The ID of the business location this type of break applies to.
 *
 *
 * @property {string} break_name
 *
 * A human-readable name for this type of break. The name is displayed to employees in Square products.
 *
 *
 * @property {string} expected_duration
 *
 * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of this break. Precision less than minutes is truncated.  
 *
 *
 * @property {boolean} is_paid
 *
 * Whether this break counts towards time worked for compensation purposes.
 *
 *
 * @property {number} version
 *
 * Used for resolving concurrency issues. The request fails if the version provided does not match the server version at the time of the request. If a value is not provided, Square's servers execute a "blind" write; potentially overwriting another writer's data.
 *
 *
 * @property {string} created_at
 *
 * Read only A read-only timestamp in RFC 3339 format.
 *
 *
 * @property {string} updated_at
 *
 * Read only A read-only timestamp in RFC 3339 format.
 *
 */
export type BreakType = {
  id: string;
  location_id: string;
  break_name: string;
  expected_duration: string;
  is_paid: boolean;
  version: number;
  created_at: string;
  updated_at: string;
};

/**
 * BusinessAppointmentSettings
 *
 * The service appointment settings, including where and how the service is provided.
 *
 *
 * @property {string [ ]} location_types
 *
 * Types of the location allowed for bookings.
 *
 *
 * @property {string} alignment_time
 *
 * The time unit of the service duration for bookings.
 *
 *
 * @property {number} min_booking_lead_time_seconds
 *
 * The minimum lead time in seconds before a service can be booked. Bookings must be created at least this far ahead of the booking's starting time.
 *
 *
 * @property {number} max_booking_lead_time_seconds
 *
 * The maximum lead time in seconds before a service can be booked. Bookings must be created at most this far ahead of the booking's starting time.
 *
 *
 * @property {boolean} any_team_member_booking_enabled
 *
 * Indicates whether a customer can choose from all available time slots and have a staff member assigned automatically (true) or not (false).
 *
 *
 * @property {boolean} multiple_service_booking_enabled
 *
 * Indicates whether a customer can book multiple services in a single online booking.
 *
 *
 * @property {string} max_appointments_per_day_limit_type
 *
 * Indicates whether the daily appointment limit applies to team members or to business locations.
 *
 *
 * @property {number} max_appointments_per_day_limit
 *
 * The maximum number of daily appointments per team member or per location.
 *
 *
 * @property {number} cancellation_window_seconds
 *
 * The cut-off time in seconds for allowing clients to cancel or reschedule an appointment.
 *
 *
 * @property {Money} cancellation_fee_money
 *
 * The flat-fee amount charged for a no-show booking.
 *
 *
 * @property {string} cancellation_policy
 *
 * The cancellation policy adopted by the seller.
 *
 *
 * @property {string} cancellation_policy_text
 *
 * The free-form text of the seller's cancellation policy.
 *
 *
 * @property {boolean} skip_booking_flow_staff_selection
 *
 * Indicates whether customers has an assigned staff member (true) or can select s staff member of their choice (false).
 *
 */
export type BusinessAppointmentSettings = {
  location_types: BusinessAppointmentSettingsBookingLocationType[];
  alignment_time: BusinessAppointmentSettingsAlignmentTime;
  min_booking_lead_time_seconds: number;
  max_booking_lead_time_seconds: number;
  any_team_member_booking_enabled: boolean;
  multiple_service_booking_enabled: boolean;
  max_appointments_per_day_limit_type: BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType;
  max_appointments_per_day_limit: number;
  cancellation_window_seconds: number;
  cancellation_fee_money: Money;
  cancellation_policy: BusinessAppointmentSettingsCancellationPolicy;
  cancellation_policy_text: string;
  skip_booking_flow_staff_selection: boolean;
};

/**
 * BusinessBookingProfile
 *
 *
 *
 * @property {string} seller_id
 *
 * The ID of the seller, obtainable using the Merchants API.
 *
 *
 * @property {string} created_at
 *
 * Read only The RFC 3339 timestamp specifying the booking's creation time.
 *
 *
 * @property {boolean} booking_enabled
 *
 * Indicates whether the seller is open for booking.
 *
 *
 * @property {string} customer_timezone_choice
 *
 * The choice of customer's time zone information of a booking. The Square online booking site and all notifications to customers uses either the seller location’s time zone or the time zone the customer chooses at booking.
 *
 *
 * @property {string} booking_policy
 *
 * The policy for the seller to automatically accept booking requests (ACCEPT_ALL) or not (REQUIRES_ACCEPTANCE).
 *
 *
 * @property {boolean} allow_user_cancel
 *
 * Indicates whether customers can cancel or reschedule their own bookings (true) or not (false).
 *
 *
 * @property {BusinessAppointmentSettings} business_appointment_settings
 *
 * Settings for appointment-type bookings.
 *
 *
 * @property {boolean} support_seller_level_writes
 *
 * Indicates whether the seller's subscription to Square Appointments supports creating, updating or canceling an appointment through the API (true) or not (false) using seller permission.
 *
 */
export type BusinessBookingProfile = {
  seller_id: string;
  created_at: string;
  booking_enabled: boolean;
  customer_timezone_choice: BusinessBookingProfileCustomerTimezoneChoice;
  booking_policy: BusinessBookingProfileBookingPolicy;
  allow_user_cancel: boolean;
  business_appointment_settings: BusinessAppointmentSettings;
  support_seller_level_writes: boolean;
};

/** 
 * BusinessHours
The hours of operation for a location.
 *
 *
 *
 * @property {BusinessHoursPeriod [ ]} periods
 *
 * The list of time periods during which the business is open. There can be at most 10 periods per day.
 *
 */
export type BusinessHours = {
  periods: BusinessHoursPeriod[];
};

/** 
 * BusinessHoursPeriod
Represents a period of time during which a business location is open.
 *
 *
 *
 * @property {DayOfWeek} day_of_week
 *
 * The day of the week for this time period.
 *
 *
 * @property {string} start_local_time
 *
 * The start time of a business hours period, specified in local time using partial-time RFC 3339 format. For example, 8:30:00 for a period starting at 8:30 in the morning. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
 *
 *
 * @property {string} end_local_time
 *
 * The end time of a business hours period, specified in local time using partial-time RFC 3339 format. For example, 21:00:00 for a period ending at 9:00 in the evening. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
 *
 */
export type BusinessHoursPeriod = {
  day_of_week: DayOfWeek;
  start_local_time: string;
  end_local_time: string;
};

/** 
 * BuyNowPayLaterDetails
Additional details about a Buy Now Pay Later payment type.     
 *
 *
 *
 * @property {string} brand
 *
 * The brand used for the Buy Now Pay Later payment. The brand can be AFTERPAY, CLEARPAY or UNKNOWN.
 *
 *
 * @property {AfterpayDetails} afterpay_details
 *
 * Details about an Afterpay payment. These details are only populated if the brand is AFTERPAY.
 *
 *
 * @property {ClearpayDetails} clearpay_details
 *
 * Details about a Clearpay payment. These details are only populated if the brand is CLEARPAY.
 *
 */
export type BuyNowPayLaterDetails = {
  brand: string;
  afterpay_details: AfterpayDetails;
  clearpay_details: ClearpayDetails;
};

/** 
 * Card
Represents the payment details of a card to be used for payments.
These details are determined by the payment token generated by Web Payments SDK.
 *
 *
 *
 * @property {string} id
 *
 * Read only Unique ID for this card. Generated by Square.     
 *
 *
 * @property {CardBrand} card_brand
 *
 * Read only The card's brand.
 *
 *
 * @property {string} last_4
 *
 * Read only The last 4 digits of the card number.
 *
 *
 * @property {number} exp_month
 *
 * The expiration month of the associated card as an integer between 1 and 12.
 *
 *
 * @property {number} exp_year
 *
 * The four-digit year of the card's expiration date.
 *
 *
 * @property {string} cardholder_name
 *
 * The name of the cardholder.
 *
 *
 * @property {Address} billing_address
 *
 * The billing address for this card.
 *
 *
 * @property {string} fingerprint
 *
 * Read only Intended as a Square-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.
 *
 *
 * @property {string} customer_id
 *
 * Required The ID of a customer created using the Customers API to be associated with the card.
 *
 *
 * @property {string} merchant_id
 *
 * Read only The ID of the merchant associated with the card.  
 *
 *
 * @property {string} reference_id
 *
 * An optional user-defined reference ID that associates this card with another entity in an external system. For example, a customer ID from an external customer management system.        
 *
 *
 * @property {boolean} enabled
 *
 * Read only Indicates whether or not a card can be used for payments.
 *
 *
 * @property {CardType} card_type
 *
 * Read only The type of the card. The Card object includes this field only in response to Payments API calls.
 *
 *
 * @property {CardPrepaidType} prepaid_type
 *
 * Read only Indicates whether the Card is prepaid or not. The Card object includes this field only in response to Payments API calls.
 *
 *
 * @property {string} bin
 *
 * Read only The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API returns this field.
 *
 *
 * @property {number} version
 *
 * Current version number of the card. Increments with each card update. Requests to update an existing Card object will be rejected unless the version in the request matches the current version for the Card.
 *
 *
 * @property {CardCoBrand} card_co_brand
 *
 * Read only The card's co-brand if available. For example, an Afterpay virtual card would have a co-brand of AFTERPAY.       
 *
 */
export type Card = {
  id: string;
  card_brand: CardBrand;
  last_4: string;
  exp_month: number;
  exp_year: number;
  cardholder_name: string;
  billing_address: Address;
  fingerprint: string;
  customer_id: string;
  merchant_id: string;
  reference_id: string;
  enabled: boolean;
  card_type: CardType;
  prepaid_type: CardPrepaidType;
  bin: string;
  version: number;
  card_co_brand: CardCoBrand;
};

/**
 * CardAutomaticallyUpdatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "card".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {CardAutomaticallyUpdatedWebhookObject} object
 *
 * An object containing the automatically updated card.
 *
 */
export type CardAutomaticallyUpdatedWebhookData = {
  type: string;
  id: string;
  object: CardAutomaticallyUpdatedWebhookObject;
};

/**
 * CardAutomaticallyUpdatedWebhookObject
 *
 *
 *
 * @property {Card} card
 *
 * The automatically updated card.
 *
 */
export type CardAutomaticallyUpdatedWebhookObject = {
  card: Card;
};

/**
 * CardCreatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "card".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {CardCreatedWebhookObject} object
 *
 * An object containing the created card.
 *
 */
export type CardCreatedWebhookData = {
  type: string;
  id: string;
  object: CardCreatedWebhookObject;
};

/**
 * CardCreatedWebhookObject
 *
 *
 *
 * @property {Card} card
 *
 * The created card.
 *
 */
export type CardCreatedWebhookObject = {
  card: Card;
};

/**
 * CardDisabledWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "card".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {CardDisabledWebhookObject} object
 *
 * An object containing the disabled card.
 *
 */
export type CardDisabledWebhookData = {
  type: string;
  id: string;
  object: CardDisabledWebhookObject;
};

/**
 * CardDisabledWebhookObject
 *
 *
 *
 * @property {Card} card
 *
 * The disabled card.
 *
 */
export type CardDisabledWebhookObject = {
  card: Card;
};

/**
 * CardForgottenWebhookCard
 *
 *
 *
 * @property {string} id
 *
 * Read only Unique ID for this card. Generated by Square.
 *
 *
 * @property {string} customer_id
 *
 * The ID of a customer created using the Customers API associated with the card.
 *
 *
 * @property {boolean} enabled
 *
 * Indicates whether or not a card can be used for payments.
 *
 *
 * @property {string} reference_id
 *
 * An optional user-defined reference ID that associates this card with another entity in an external system. For example, a customer ID from an external customer management system.
 *
 *
 * @property {number} version
 *
 * Current version number of the card. Increments with each card update. Requests to update an existing Card object will be rejected unless the version in the request matches the current version for the Card.
 *
 *
 * @property {string} merchant_id
 *
 * The ID of the merchant associated with the card.
 *
 */
export type CardForgottenWebhookCard = {
  id: string;
  customer_id: string;
  enabled: boolean;
  reference_id: string;
  version: number;
  merchant_id: string;
};

/**
 * CardForgottenWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "card".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {CardForgottenWebhookObject} object
 *
 * An object containing the forgotten card.
 *
 */
export type CardForgottenWebhookData = {
  type: string;
  id: string;
  object: CardForgottenWebhookObject;
};

/**
 * CardForgottenWebhookObject
 *
 *
 *
 * @property {CardForgottenWebhookCard} card
 *
 * The forgotten card.
 *
 */
export type CardForgottenWebhookObject = {
  card: CardForgottenWebhookCard;
};

/** 
 * CardPaymentDetails
Reflects the current status of a card payment.
Contains only non-confidential information.
 *
 *
 *
 * @property {string} status
 *
 * The card payment's current state. The state can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
 *
 *
 * @property {Card} card
 *
 * The credit card's non-confidential details.
 *
 *
 * @property {string} entry_method
 *
 * The method used to enter the card's details for the payment. The method can be KEYED, SWIPED, EMV, ON_FILE, or CONTACTLESS.
 *
 *
 * @property {string} cvv_status
 *
 * The status code returned from the Card Verification Value (CVV) check. The code can be CVV_ACCEPTED, CVV_REJECTED, or CVV_NOT_CHECKED.
 *
 *
 * @property {string} avs_status
 *
 * The status code returned from the Address Verification System (AVS) check. The code can be AVS_ACCEPTED, AVS_REJECTED, or AVS_NOT_CHECKED.
 *
 *
 * @property {string} auth_result_code
 *
 * The status code returned by the card issuer that describes the payment's authorization status.
 *
 *
 * @property {string} application_identifier
 *
 * For EMV payments, the application ID identifies the EMV application used for the payment.
 *
 *
 * @property {string} application_name
 *
 * For EMV payments, the human-readable name of the EMV application used for the payment.
 *
 *
 * @property {string} application_cryptogram
 *
 * For EMV payments, the cryptogram generated for the payment. 
 *
 *
 * @property {string} verification_method
 *
 * For EMV payments, the method used to verify the cardholder's identity. The method can be PIN, SIGNATURE, PIN_AND_SIGNATURE, ON_DEVICE, or NONE.
 *
 *
 * @property {string} verification_results
 *
 * For EMV payments, the results of the cardholder verification. The result can be SUCCESS, FAILURE, or UNKNOWN.
 *
 *
 * @property {string} statement_description
 *
 * The statement description sent to the card networks.        
 *
 *
 * @property {DeviceDetails} device_details
 *
 * Deprecated: Use Payment.device_details instead. Details about the device that took the payment.
 *
 *
 * @property {CardPaymentTimeline} card_payment_timeline       
 *
 * The timeline for card payments.
 *
 *
 * @property {boolean} refund_requires_card_presence
 *
 * Whether the card must be physically present for the payment to be refunded. If set to true, the card must be present.      
 *
 *
 * @property {Error [ ]} errors
 *
 * Information about errors encountered during the request.    
 *
 */
export type CardPaymentDetails = {
  status: string;
  card: Card;
  entry_method: string;
  cvv_status: string;
  avs_status: string;
  auth_result_code: string;
  application_identifier: string;
  application_name: string;
  application_cryptogram: string;
  verification_method: string;
  verification_results: string;
  statement_description: string;
  device_details: DeviceDetails;
  card_payment_timeline: CardPaymentTimeline;
  refund_requires_card_presence: boolean;
  errors: Error[];
};

/** 
 * CardPaymentTimeline
The timeline for card payments.
 *
 *
 *
 * @property {string} authorized_at
 *
 * The timestamp when the payment was authorized, in RFC 3339 format.
 *
 *
 * @property {string} captured_at
 *
 * The timestamp when the payment was captured, in RFC 3339 format.
 *
 *
 * @property {string} voided_at
 *
 * The timestamp when the payment was voided, in RFC 3339 format.
 *
 */
export type CardPaymentTimeline = {
  authorized_at: string;
  captured_at: string;
  voided_at: string;
};

/**
 * CardUpdatedWebhookData
 *
 *
 *
 * @property {string} type
 *
 * The type of the event data object. The value is "card".
 *
 *
 * @property {string} id
 *
 * The ID of the event data object.
 *
 *
 * @property {Card} object
 *
 * An object containing the updated card.
 *
 */
export type CardUpdatedWebhookData = {
  type: string;
  id: string;
  object: Card;
};

/**
 * CardUpdatedWebhookObject
 *
 *
 *
 * @property {Card} card
 *
 * The updated card.
 *
 */
export type CardUpdatedWebhookObject = {
  card: Card;
};

/** 
 * CashAppDetails
Additional details about WALLET type payments with the brand of CASH_APP.
 *
 *
 *
 * @property {string} buyer_full_name
 *
 * The name of the Cash App account holder.
 *
 *
 * @property {string} buyer_country_code
 *
 * The country of the Cash App account holder, in ISO 3166-1-alpha-2 format.
 *
 *
 * @property {string} buyer_cashtag
 *
 * Read only $Cashtag of the Cash App account holder.
 *
 */
export type CashAppDetails = {
  buyer_full_name: string;
  buyer_country_code: Country;
  buyer_cashtag: string;
};

/**
 * CashDrawerDevice
 *
 *
 *
 * @property {string} id
 *
 * The device Square-issued ID
 *
 *
 * @property {string} name
 *
 * The device merchant-specified name.
 *
 */
export type CashDrawerDevice = {
  id: string;
  name: string;
};

/** 
 * CashDrawerShift
This model gives the details of a cash drawer shift.
The cash_payment_money, cash_refund_money, cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective event types.
 *
 *
 *
 * @property {string} id
 *
 * The shift unique ID.
 *
 *
 * @property {CashDrawerShiftState} state
 *
 * The shift current state.
 *
 *
 * @property {string} opened_at
 *
 * The time when the shift began, in ISO 8601 format.
 *
 *
 * @property {string} ended_at
 *
 * The time when the shift ended, in ISO 8601 format.
 *
 *
 * @property {string} closed_at
 *
 * The time when the shift was closed, in ISO 8601 format.     
 *
 *
 * @property {string [ ]} employee_ids
 *
 * The IDs of all employees that were logged into Square Point of Sale at any point while the cash drawer shift was open.     
 *
 *
 * @property {string} opening_employee_id
 *
 * The ID of the employee that started the cash drawer shift.  
 *
 *
 * @property {string} ending_employee_id
 *
 * The ID of the employee that ended the cash drawer shift.    
 *
 *
 * @property {string} closing_employee_id
 *
 * The ID of the employee that closed the cash drawer shift by auditing the cash drawer contents.
 *
 *
 * @property {string} description
 *
 * The free-form text description of a cash drawer by an employee.
 *
 *
 * @property {Money} opened_cash_money
 *
 * The amount of money in the cash drawer at the start of the shift. The amount must be greater than or equal to zero.        
 *
 *
 * @property {Money} cash_payment_money
 *
 * The amount of money added to the cash drawer from cash payments. This is computed by summing all events with the types CASH_TENDER_PAYMENT and CASH_TENDER_CANCELED_PAYMENT. The amount is always greater than or equal to zero.
 *
 *
 * @property {Money} cash_refunds_money
 *
 * The amount of money removed from the cash drawer from cash refunds. It is computed by summing the events of type CASH_TENDER_REFUND. The amount is always greater than or equal to zero.  
 *
 *
 * @property {Money} cash_paid_in_money
 *
 * The amount of money added to the cash drawer for reasons other than cash payments. It is computed by summing the events of type PAID_IN. The amount is always greater than or equal to zero.
 *
 *
 * @property {Money} cash_paid_out_money
 *
 * The amount of money removed from the cash drawer for reasons other than cash refunds. It is computed by summing the events of type PAID_OUT. The amount is always greater than or equal to zero.
 *
 *
 * @property {Money} expected_cash_money
 *
 * The amount of money that should be in the cash drawer at the end of the shift, based on the shift's other money amounts. This can be negative if employees have not correctly recorded all the events on the cash drawer. cash_paid_out_money is a summation of amounts from cash_payment_money (zero or positive), cash_refunds_money (zero or negative), cash_paid_in_money (zero or positive), and cash_paid_out_money (zero or negative) event types.
 *
 *
 * @property {Money} closed_cash_money
 *
 * The amount of money found in the cash drawer at the end of the shift by an auditing employee. The amount should be positive.
 *
 *
 * @property {CashDrawerDevice} device
 *
 * The device running Square Point of Sale that was connected to the cash drawer.
 *
 */
export type CashDrawerShift = {
  id: string;
  state: CashDrawerShiftState;
  opened_at: string;
  ended_at: string;
  closed_at: string;
  employee_ids: string[];
};

/**
 * CashDrawerShiftEvent
 *
 *
 *
 * @property {string} id
 *
 * The unique ID of the event.
 *
 *
 * @property {string} employee_id
 *
 * The ID of the employee that created the event.
 *
 *
 * @property {CashDrawerEventType} event_type
 *
 * The type of cash drawer shift event.
 *
 *
 * @property {Money} event_money
 *
 * The amount of money that was added to or removed from the cash drawer in the event. The amount can be positive (for added money) or zero (for other tender type payments). The addition or removal of money can be determined by by the event type.
 *
 *
 * @property {string} created_at
 *
 * Read only The event time in ISO 8601 format.
 *
 *
 * @property {string} description
 *
 * An optional description of the event, entered by the employee that created the event.
 *
 */
export type CashDrawerShiftEvent = {
  id: string;
  employee_id: string;
  event_type: CashDrawerEventType;
  event_money: Money;
  created_at: string;
  description: string;
};

/** 
 * CashDrawerShiftSummary
The summary of a closed cash drawer shift.
This model contains only the money counted to start a cash drawer shift, counted at the end of the shift, and the amount that should be in the drawer at shift end based on summing all cash drawer shift events.
 *
 *
 *
 * @property {string} id
 *
 * The shift unique ID.
 *
 *
 * @property {CashDrawerShiftState} state
 *
 * The shift current state.
 *
 *
 * @property {string} opened_at
 *
 * The shift start time in ISO 8601 format.
 *
 *
 * @property {string} ended_at
 *
 * The shift end time in ISO 8601 format.
 *
 *
 * @property {string} closed_at
 *
 * The shift close time in ISO 8601 format.
 *
 *
 * @property {string} description
 *
 * An employee free-text description of a cash drawer shift.   
 *
 *
 * @property {Money} opened_cash_money
 *
 * The amount of money in the cash drawer at the start of the shift. This must be a positive amount.
 *
 *
 * @property {Money} expected_cash_money
 *
 * The amount of money that should be in the cash drawer at the end of the shift, based on the cash drawer events on the shift. The amount is correct if all shift employees accurately recorded their cash drawer shift events. Unrecorded events and events with the wrong amount result in an incorrect expected_cash_money amount that can be negative.
 *
 *
 * @property {Money} closed_cash_money
 *
 * The amount of money found in the cash drawer at the end of the shift by an auditing employee. The amount must be greater than or equal to zero.
 *
 */
export type CashDrawerShiftSummary = {
  id: string;
  state: CashDrawerShiftState;
  opened_at: string;
  ended_at: string;
  closed_at: string;
  description: string;
  opened_cash_money: Money;
  expected_cash_money: Money;
  closed_cash_money: Money;
};

/** 
 * CashPaymentDetails
Stores details about a cash payment.
Contains only non-confidential information. For more information, see Take Cash Payments.
 *
 *
 *
 * @property {Money} buyer_supplied_money
 *
 * The amount and currency of the money supplied by the buyer. 
 *
 *
 * @property {Money} change_back_money
 *
 * The amount of change due back to the buyer. This read-only field is calculated from the amount_money and buyer_supplied_money fields.
 *
 */
export type CashPaymentDetails = {
  buyer_supplied_money: Money;
  change_back_money: Money;
};

/** 
 * CatalogCategory
A category to which a CatalogItem instance belongs.
 *
 *
 *
 * @property {string} name
 *
 * The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
 *
 *
 * @property {string [ ]} image_ids
 *
 * The IDs of images associated with this CatalogCategory instance. Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications.
 *
 */
export type CatalogCategory = {
  name: string;
  image_ids: string[];
};

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
