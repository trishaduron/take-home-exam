function extractOrderData(jsonData) {
    const {id, name, email, line_items} = jsonData.order;

    return {
      id: id,
      name: name,
      email: email,
      lineItems: line_items.map((lineItem) => ({
        sku: lineItem.sku,
        price: lineItem.price,
        product_id: lineItem.product_id,
        quantity: lineItem.quantity
      }))
    };
  }
  
const shopOrderJson = 
{
  "order": {
    "id": 5617487642814,
    "admin_graphql_api_id": "gid://shopify/Order/5617487642814",
    "app_id": 580111,
    "browser_ip": "104.7.65.50",
    "buyer_accepts_marketing": false,
    "cancel_reason": null,
    "cancelled_at": null,
    "cart_token": "303272ec2a5424283f1115ff8a69eb89",
    "checkout_id": 27541561245886,
    "checkout_token": "a6b7acfe88b5e5b2127165147a8499d0",
    "client_details": {
      "accept_language": "en-US,en;q=0.9",
      "browser_height": 1004,
      "browser_ip": "104.7.65.50",
      "browser_width": 1800,
      "session_hash": null,
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    },
    "closed_at": null,
    "company": null,
    "confirmed": true,
    "contact_email": "chrisdog@gmail.com",
    "created_at": "2023-12-14T12:28:29-08:00",
    "currency": "USD",
    "current_subtotal_price": "255.79",
    "current_subtotal_price_set": {
      "shop_money": {
        "amount": "255.79",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "233.99",
        "currency_code": "EUR"
      }
    },
    "current_total_additional_fees_set": null,
    "current_total_discounts": "0.00",
    "current_total_discounts_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "EUR"
      }
    },
    "current_total_duties_set": null,
    "current_total_price": "255.79",
    "current_total_price_set": {
      "shop_money": {
        "amount": "255.79",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "233.99",
        "currency_code": "EUR"
      }
    },
    "current_total_tax": "42.63",
    "current_total_tax_set": {
      "shop_money": {
        "amount": "42.63",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "39.00",
        "currency_code": "EUR"
      }
    },
    "customer_locale": "en-AT",
    "device_id": null,
    "discount_codes": [],
    "email": "chrisdog@gmail.com",
    "estimated_taxes": false,
    "financial_status": "paid",
    "fulfillment_status": null,
    "landing_site": "/5741478003/checkouts/a6b7acfe88b5e5b2127165147a8499d0",
    "landing_site_ref": null,
    "location_id": null,
    "merchant_of_record_app_id": null,
    "name": "PDT#2983",
    "note": null,
    "note_attributes": [
      {
        "name": "smsOptIn",
        "value": "SMS:False"
      }
    ],
    "number": 1983,
    "order_number": 2983,
    "order_status_url": "https://eudev.peedev.com/5741478003/orders/76c611d644a1d47b19a4b9cb0f7576bd/authenticate?key=43fdfa60180acf811acece5a2bac3ece",
    "original_total_additional_fees_set": null,
    "original_total_duties_set": null,
    "payment_gateway_names": [
      "shopify_payments"
    ],
    "phone": null,
    "presentment_currency": "EUR",
    "processed_at": "2023-12-14T12:28:28-08:00",
    "reference": null,
    "referring_site": "https://eudev.peedev.com/",
    "source_identifier": null,
    "source_name": "web",
    "source_url": null,
    "subtotal_price": "255.79",
    "subtotal_price_set": {
      "shop_money": {
        "amount": "255.79",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "233.99",
        "currency_code": "EUR"
      }
    },
    "tags": "everydayline_v1",
    "tax_lines": [
      {
        "price": "42.63",
        "rate": 0.2,
        "title": "FR TVA",
        "price_set": {
          "shop_money": {
            "amount": "42.63",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "39.00",
            "currency_code": "EUR"
          }
        },
        "channel_liable": false
      }
    ],
    "taxes_included": true,
    "test": true,
    "token": "76c611d644a1d47b19a4b9cb0f7576bd",
    "total_discounts": "0.00",
    "total_discounts_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "EUR"
      }
    },
    "total_line_items_price": "255.79",
    "total_line_items_price_set": {
      "shop_money": {
        "amount": "255.79",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "233.99",
        "currency_code": "EUR"
      }
    },
    "total_outstanding": "0.00",
    "total_price": "255.79",
    "total_price_set": {
      "shop_money": {
        "amount": "255.79",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "233.99",
        "currency_code": "EUR"
      }
    },
    "total_shipping_price_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "EUR"
      }
    },
    "total_tax": "42.63",
    "total_tax_set": {
      "shop_money": {
        "amount": "42.63",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "39.00",
        "currency_code": "EUR"
      }
    },
    "total_tip_received": "0.00",
    "total_weight": 2267,
    "updated_at": "2023-12-14T12:28:35-08:00",
    "user_id": null,
    "billing_address": {
      "first_name": "Chris",
      "address1": "12th arrondissement of Paris",
      "phone": "5104272088",
      "city": "Paris",
      "zip": "75012",
      "province": null,
      "country": "France",
      "last_name": "Mark",
      "address2": "",
      "company": null,
      "latitude": 48.8293647,
      "longitude": 2.4265406,
      "name": "Chris Mark",
      "country_code": "FR",
      "province_code": null
    },
    "customer": {
      "id": 1074769166451,
      "email": "chrisdog@gmail.com",
      "accepts_marketing": false,
      "created_at": "2018-09-29T12:51:46-07:00",
      "updated_at": "2023-12-14T12:28:29-08:00",
      "first_name": "Chris",
      "last_name": "Mark",
      "state": "enabled",
      "note": "",
      "verified_email": true,
      "multipass_identifier": "auth0|603f29890f18db0069fa9286",
      "tax_exempt": false,
      "phone": null,
      "email_marketing_consent": {
        "state": "not_subscribed",
        "opt_in_level": null,
        "consent_updated_at": null
      },
      "sms_marketing_consent": null,
      "tags": "preordered-tripod",
      "currency": "USD",
      "accepts_marketing_updated_at": "2019-01-05T08:43:29-08:00",
      "marketing_opt_in_level": null,
      "tax_exemptions": [],
      "admin_graphql_api_id": "gid://shopify/Customer/1074769166451",
      "default_address": {
        "id": 8645157519550,
        "customer_id": 1074769166451,
        "first_name": "Chris",
        "last_name": "Mark",
        "company": null,
        "address1": "12th arrondissement of Paris",
        "address2": "",
        "city": "Paris",
        "province": null,
        "country": "France",
        "zip": "75012",
        "phone": "5104272088",
        "name": "Chris Mark",
        "province_code": null,
        "country_code": "FR",
        "country_name": "France",
        "default": true
      }
    },
    "discount_applications": [],
    "fulfillments": [],
    "line_items": [
      {
        "id": 13350421004478,
        "admin_graphql_api_id": "gid://shopify/LineItem/13350421004478",
        "fulfillable_quantity": 1,
        "fulfillment_service": "manual",
        "fulfillment_status": null,
        "gift_card": false,
        "grams": 2268,
        "name": "Everyday Backpack - Black / 20L",
        "pre_tax_price": "213.16",
        "pre_tax_price_set": {
          "shop_money": {
            "amount": "213.16",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "194.99",
            "currency_code": "EUR"
          }
        },
        "price": "255.79",
        "price_set": {
          "shop_money": {
            "amount": "255.79",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "233.99",
            "currency_code": "EUR"
          }
        },
        "product_exists": true,
        "product_id": 7833729040574,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": "BEDB-20-BK-2",
        "tax_code": "P0000000",
        "taxable": true,
        "title": "Everyday Backpack",
        "total_discount": "0.00",
        "total_discount_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "EUR"
          }
        },
        "variant_id": 43322826490046,
        "variant_inventory_management": "shopify",
        "variant_title": "Black / 20L",
        "vendor": "Peak Design",
        "tax_lines": [
          {
            "channel_liable": false,
            "price": "42.63",
            "price_set": {
              "shop_money": {
                "amount": "42.63",
                "currency_code": "USD"
              },
              "presentment_money": {
                "amount": "39.00",
                "currency_code": "EUR"
              }
            },
            "rate": 0.2,
            "title": "FR TVA"
          }
        ],
        "duties": [],
        "discount_allocations": []
      }
    ],
    "payment_terms": null,
    "refunds": [],
    "shipping_address": {
      "first_name": "Chris",
      "address1": "12th arrondissement of Paris",
      "phone": "5104272088",
      "city": "Paris",
      "zip": "75012",
      "province": null,
      "country": "France",
      "last_name": "Mark",
      "address2": "",
      "company": null,
      "latitude": 48.8293647,
      "longitude": 2.4265406,
      "name": "Chris Mark",
      "country_code": "FR",
      "province_code": null
    },
    "shipping_lines": [
      {
        "id": 4453796905150,
        "carrier_identifier": null,
        "code": "Standard Shipping",
        "delivery_category": null,
        "discounted_price": "0.00",
        "discounted_price_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "EUR"
          }
        },
        "phone": null,
        "price": "0.00",
        "price_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "EUR"
          }
        },
        "requested_fulfillment_service_id": null,
        "source": "shopify",
        "title": "Standard Shipping",
        "tax_lines": [
          {
            "channel_liable": false,
            "price": "0.00",
            "price_set": {
              "shop_money": {
                "amount": "0.00",
                "currency_code": "USD"
              },
              "presentment_money": {
                "amount": "0.00",
                "currency_code": "EUR"
              }
            },
            "rate": 0.2,
            "title": "FR TVA"
          }
        ],
        "discount_allocations": []
      }
    ]
  }
}
const extractedData = extractOrderData(shopOrderJson);

console.log(extractedData);
  