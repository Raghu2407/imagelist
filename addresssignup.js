function validateForm(id) {
  var isValidated = true;
  $("#" + id + " input[type=text]:visible").each(function () {
    $(this).css("border", "");

    var InputValue = $(this).val().trim();
    var isOptional =
      $(this).attr("placeholder") &&
      $(this).attr("placeholder").includes("optional");
    if (InputValue.length < 1 && !isOptional) {
      //$(this).css("border", "1px solid #f47a44");
      $(this).blur();
      isValidated = false;
    }
  });
  return isValidated;
}


// function validateFormCheck(id) {
//   var isValidated = true;
//   $("#" + id + " input[type=text]:visible #", + id + " select:visible").each(function () {
//     $(this).css("border", "");
//     var InputValue = $(this).val().trim();
//     var isOptional =
//       $(this).attr("placeholder") &&
//       $(this).attr("placeholder").includes("optional");
//     if ((InputValue.length < 1 || InputValue == null)  && !isOptional) {
//       $(this).blur();
//       $(this).change();
//       isValidated = false;
//     }else{
//        $(this).blur();
//       // $('#' + id).find('.validateAddressForm').css('visibility', 'hidden');
//     }
//   });
//   return isValidated;
// }

function validateFormCheck(id) {
  var isValidated = true;
  var firstInvalidFound = false;
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  $("#" + id + " input[type=text]:visible,#" + id + " input[type=email]:visible, #" + id + " select:visible").each(function () {
    $(this).css("border", "");
    var InputValue = $(this).val();
    var isOptional =
      $(this).attr("placeholder") &&
      $(this).attr("placeholder").includes("optional");

    if ((this.tagName === "INPUT" && InputValue == '' && !isOptional) ||
      (this.tagName === "SELECT" && InputValue === null && !isOptional)) {
      $(this).blur();
      if (!firstInvalidFound) {
        $(this).focus();
        firstInvalidFound = true;
      }

      $(this).change();
      isValidated = false;
    }
    else {
      $(this).blur();
      // $('#' + id).find('.validateAddressForm').css('visibility', 'hidden');
    }
  });

  return isValidated;
}


function validateAddressForm(id) {
  var optionform1 = (address_address && address_city && address_zipcode && address_phone_number && PurchaseContact
    && PurchaseContactTitle && PurchaseContactEmail && PurchaseContactPhone);
  if (id === 'acopform1') {
    if (optionform1) {
      $('#' + id).find('.formerror').removeClass('validateAddressForm');
      return true;
    } else {
      $('#' + id).find('.validateAddressForm').css('visibility', 'visible').blur();
      validateFormCheck(id);
      return false;
    }
  }
  else {
    console.log(address_state);
    if (
      address_first_name &&
      address_last_name &&
      address_phone_number &&
      address_email &&
      address_address &&
      address_country &&
      address_city &&
      address_zipcode &&
      address_state
    ) {

      $('#' + id).find('.formerror').removeClass('validateAddressForm');
      return true;
    } else {
      $('#' + id).find('.validateAddressForm').css('visibility', 'visible');
      validateFormCheck(id);
      return false;
    }
  }
}
var addressvalidated = false;
var adressCheck = false;
var editaddresscheck = document.querySelector('#Edit_Address_Address1');
if (sessionStorage.getItem("guestaddressDetails") == "stored" && isUserLoggedIn == 0) {
  addressvalidated = true;
  adressCheck = true;
} else if (isUserLoggedIn == 1) {
  sessionStorage.removeItem("guestaddressDetails");
  addressvalidated = true;
}
var address_first_name = addressvalidated;
var address_last_name = addressvalidated;
if ($('#Address_Phone,#Edit_Address_Phone').val() !== '') {
  var address_phone_number = true;
} else {
  var address_phone_number = false;
}
var editaddresscheck = document.querySelector('#Edit_Address_Address1');
if (editaddresscheck !== null && isUserLoggedIn !== 0) {
  adressCheck = true;
}
var address_email = addressvalidated;
var address_address = adressCheck;
var address_country = true;
var address_city = adressCheck;
var address_zipcode = adressCheck;
var address_state = adressCheck;
address_state = adressCheck;
// ACON Page Variables
var PurchaseContact = false;
var PurchaseContactTitle = false;
var PurchaseContactEmail = false;
var PurchaseContactPhone = false;
var PurchaseContact2 = false;
var PurchaseContact3 = false;
var APContact = false;
var APContactEmail = false;
var APContactPhone = false;
var BusinessName = false;
var entered_date = false;
var entered_date3 = false
// ACON Page Variables
function addressValidation(field, errorSelector) {
  // console.log(field, errorSelector);
  var value = $(field).val();
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  switch (field) {
    case "#Address_FirstName":
    case "#Edit_Address_FirstName":
    case "#ShipFirstName":
      if (value === "") {
        handleActions("First Name is required", errorSelector);
        address_first_name = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_first_name = true;
      }
      break;
    case "#Address_LastName":
    case "#Edit_Address_LastName":
    case "#ShipLastName":
      if (value === "") {
        handleActions("Last Name is required", errorSelector);
        address_last_name = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_last_name = true;
      }
      break;
    case "#Address_Phone":
    case "#Edit_Address_Phone":
    case "#ShipPhone":
    case "#Business_Phone":
    case "#Address_Phone2":
    case "#Address_Phone3":
      if (value === "" || value.length < "16") {
        handleActions("Enter a valid phone number", errorSelector);
        address_phone_number = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_phone_number = true;
      }
      break;
    case "#Address_Email":
    case "#Edit_Address_Email":
    case "#ShipEmail":
      if (value === "" || regex.test(value) !== true) {
        handleActions("Enter a valid email address", errorSelector);
        address_email = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_email = true;
      }
      break;

    case "#Address_Address1":
    case "#Edit_Address_Address1":
    case "#ShipAddress1":
    case "#Address_Address2":
    case "#Address_Address3":
      setTimeout(function () {
        if (value === "") {
          handleActions("Street Address 1 is required", errorSelector);
          address_address = false;
        } else if (checkGoogleAddress === true) {
          address_phone_number = true;
          address_address = true;
          address_country = true;
          address_city = true;
          // address_zipcode = true;
          address_state = true;
          $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        } else if (value != "" && checkGoogleAddress === false) {
          $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
          address_address = true;
        } else {
          $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        }
        console.log("verify google address " + checkGoogleAddress);
      }, 500);
      break;
    case "#Address_Country":
    case "#Address_Country1":
    case "#Address_Country2":
    case "#Address_Country3":
    case "#Edit_Address_Country":
    case "#ShipCountry":
      if (value == "" || value == null) {
        handleActions("Country is required", errorSelector);
        $(errorSelector).addClass('validateAddressForm').css('visibility', 'visible');
        address_country = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_country = true;
        address_zipcode = false;
        address_state = false;
      }
      break;
    case "#Address_City":
    case "#Edit_Address_City":
    case "#ShipCity":
    case "#Address_City2":
    case "#Address_City3":
      console.log("City", value);
      if (value === "") {
        handleActions("City is required", errorSelector);
        address_city = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        address_city = true;
      }
      break;
    case "#Address_Zip":
    case "#Edit_Address_Zip":
    case "#ShipZip":
    case "#Address_Zip2":
    case "#Address_Zip3":
      console.log(value);
      if (value === "") {
        //handleActions("Zip code not found", errorSelector);
        handleActions("Zip code is required", errorSelector);
        address_zipcode = false;
      } else {
        var sel_country = $("#Address_Country:visible,#Address_Country1:visible,#Address_Country2:visible,#Address_Country3:visible,#ShipCountry").val();
        var result = "";
        if (sel_country !== null) {
          console.log("Country", sel_country);
          if (checkGoogleAddress == true) {
            $(errorSelector).removeClass('validateAddressForm');
          }
          result = GetStatefromZipcode(sel_country, value);
          if (result.status === true) {
            address_zipcode = true;
            address_state = true;
            $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
          } else {
            $(errorSelector).html('Zip code not found').addClass('validateAddressForm').css('visibility', 'visible');
            if (sel_country === "CA") {
              $("#Address_Zip").removeAttr("onkeypress", "return isNumber(event)").removeClass('zipcode');
              console.log("Canada");
              handleActions(
                "Zip code not found",
                errorSelector
              );
              address_zipcode = result.status;
              $(errorSelector).addClass('validateAddressForm');
            } else {
              console.log("US");
              handleActions("Zip code not found", errorSelector);
              address_zipcode = result.status;
              $(errorSelector).addClass('validateAddressForm');

            }
            $("#Address_StateSelect,#ShipStateSelect").val("");
            address_zipcode = false;
            address_state = false;
          }
        } else {
          $('.Address_Country,.Address_Country1,.Address_Country2,.Address_Country3').addClass('validateAddressForm').css('visibility', 'visible');
          result = false;
          address_country = false;
          handleActions("Country is required", '.Address_Country');
        }
      }
      break;
    // FOR ACON PAGE 
    case "#Purchase_COntact_Title":
    case "#Purchase_COntact_Title2":
    case "#Purchase_COntact_Title3":
      if (value === "") {
        handleActions("Title is required", errorSelector);
        PurchaseContactTitle = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        PurchaseContactTitle = true;
      }
      break;

    case "#AP_Contact":
    case "#AP_Contact3":
      if (value === "") {
        handleActions("AP Contact is required", errorSelector);
        APContact = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        APContact = true;
      }
      break;
    case "#Purchase_Contact":
    case "#Purchase_Contact2":
    case "#Purchase_Contact3":
      if (value === "") {
        handleActions("Purchase Contact is required", errorSelector);
        PurchaseContact = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        PurchaseContact = true;
      }
      break;

    case "#AP_Contact_Title":
    case "#AP_Contact_Title3":
      if (value === "") {
        handleActions("Title is required", errorSelector);
        APContactTitle = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        APContactTitle = true;
      }
      break;
    case "#Purchase_Contact_Email":
    case "#Purchase_Contact_Email2":
    case "#Purchase_Contact_Email3":
      if (value === "") {
        handleActions("Enter a valid email address", errorSelector);
        PurchaseContactEmail = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        PurchaseContactEmail = true;
      }
      break;

    case "#AP_Contact_Email":
    case "#AP_Contact_Email3":
      if (value === "") {
        handleActions("Enter a valid email address", errorSelector);
        APContactEmail = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        APContactEmail = true;
      }
      break;
    case "#Purchase_Contact_Phone":
    case "#Purchase_Contact_Phone2":
    case "#Purchase_Contact_Phone3":
      if (value === "") {
        handleActions("Enter a valid phone number", errorSelector);
        PurchaseContactPhone = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        PurchaseContactPhone = true;
      }
      break;

    case "#AP_Contact_Phone":
    case "#AP_Contact_Phone3":
      if (value === "") {
        handleActions("Enter a valid phone number", errorSelector);
        APContactPhone = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        APContactPhone = true;
      }
      break;
    case "#Business_Name":
      if (value === "") {
        handleActions("Business Name is required", errorSelector);
        BusinessName = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        BusinessName = true;
      }
      break;
    case "#enterted_date":
    case "#enterted_date3":
      if (value === "") {
        handleActions("Date is required", errorSelector);
        entered_date = false;
        entered_date3 = false;
      } else {
        $(errorSelector).removeClass('validateAddressForm').css('visibility', 'hidden');
        entered_date = true;
        entered_date3 = true;
      }
    default:
      break;
  }

  setTimeout(function () {
    // console.log(
    //   address_first_name,
    //   address_last_name,
    //   address_phone_number,
    //   address_email,
    //   address_address,
    //   address_country,
    //   address_city,
    //   address_zipcode,
    //   address_state
    // );
    if (
      address_first_name &&
      address_last_name &&
      address_phone_number &&
      address_email &&
      address_address &&
      address_country &&
      address_city &&
      address_zipcode &&
      address_state &&
      validateForm("cada_form") == true
    ) {
      // $(".add-newaddress,.add-newaddresss").prop("disabled", false);
    } else {
      // $(".add-newaddress,.add-newaddresss").prop("disabled", true);
    }
  }, 500);
}

function handleActions(errorMessage, addClass) {
  // document.querySelector(field).parentElement.childNodes[5].style.display ='block';
  // $(addClass).addClass('validateAddressForm').html(errorMessage).css('visibility','visible');
  $(addClass).addClass('validateAddressForm').html(errorMessage).blur();
  // document.querySelector(addClass).scrollIntoView();
  //document.querySelector(addClass).previousElementSibling.focus();
}

function ZipcodeVadation() {
  // US and Canada Zip code Valdation
  var zipCodeRegex = {
    "US": /^\d{5}(?:-\d{4})?$/,
    "CA": /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/
  };
  var setcountry = '';
  var setzipcode = '';
  // if user not logged 
  if (isUserLoggedIn == 0) {
    setcountry = $('#register_country').val();
    setzipcode = $('#register_zipcode');
  }
  else {
    // for default select 
    setcountry = $("#Address_Country,#Address_Country1:visible,#Address_Country2:visible,#Address_Country3:visible,#ShipCountry:visible,#Edit_Address_Country:visible").val();
    setzipcode = $('#Address_Zip,#Address_Zip1:visible,#Address_Zip2:visible,#Address_Zip3:visible,#Edit_Address_Zip:visible,#ShipZip:visible');
  }
  // Set the regex pattern for the input box
  $(setzipcode).off('keydown').on('keydown', function (event) {
    var id = $(this).attr('id');
    if (setcountry === 'US') {
      // Allow only numbers (0-9) and certain control keys for US zip codes
      if (!/[0-9\b]/.test(event.key) && !event.ctrlKey && !event.metaKey && event.key !== "Backspace") {
        event.preventDefault();
      }
    } else if (country === 'CA') {
      // Allow only characters that match the individual characters in the Canadian postal code pattern
      if (!/[A-Za-z\d\s]/.test(event.key) && !event.ctrlKey && !event.metaKey && event.key !== "Backspace") {
        event.preventDefault();
      } else {
        formatCanadaZip(id);
      }
    }

  });

  $("#Address_Country,#Address_Country1:visible,#Address_Country1:visible,#Address_Country2:visible,#Address_Country3:visible,#ShipCountry:visible,#Edit_Address_Country:visible").change(function () {
    var country = $(this).val();
    var regexPattern = zipCodeRegex[country];

    // Set the regex pattern for the input box
    $(setzipcode).off('keydown').on('keydown', function (event) {
      var id = $(this).attr('id');
      if (country === 'US') {
        // Allow only numbers (0-9) and certain control keys for US zip codes
        if (!/[0-9\b]/.test(event.key) && !event.ctrlKey && !event.metaKey && event.key !== "Backspace") {
          event.preventDefault();
        }
      } else if (country === 'CA') {
        // Allow only characters that match the individual characters in the Canadian postal code pattern
        if (!/[A-Za-z\d\s]/.test(event.key) && !event.ctrlKey && !event.metaKey && event.key !== "Backspace") {
          event.preventDefault();
        } else {
          formatCanadaZip(id);
        }
      }
    });
    $(setzipcode).val('');
  });
}


function formatCanadaZip(id) {
  var zipCodeInput = document.getElementById(id).value.trim();

  // Remove any non-alphanumeric characters
  if (zipCodeInput.length == 5) {
    var cleanedZipCode = zipCodeInput.replace(/\W+/g, '');

    // Format the zip code
    var formattedZip = cleanedZipCode.slice(0, 3) + ' ' + cleanedZipCode.slice(3);

    document.getElementById(id).value = formattedZip;
  }
}

var checkGoogleAddress = false;

function GoogleAddressVerification(id) {
  var googleautocomplete;
  let istrue = false;
  var componentForm = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    administrative_area_level_1: "short_name",
    country: "short_name",
    postal_code: "short_name",
  };

  var componentFormMapping = {
    street_number: "" + id,
    route: "" + id,
    locality: isUserLoggedIn == 0 ? "ShipCity" : "Address_City",
    administrative_area_level_1: isUserLoggedIn == 0 ? "ShipStateSelect" : "Address_StateSelect",
    postal_code: isUserLoggedIn == 0 ? "ShipZip" : "Address_Zip",
    country: isUserLoggedIn == 0 ? "ShipCountry" : "Address_Country",
  };

  googleautocomplete = new google.maps.places.Autocomplete(
    document.getElementById(id),
    {
      types: ["geocode"],
    }
  );

  function fillInAddress() {
    $("input#Address_Zip").val("");
    $("input#Address_City").val("");
    var place = googleautocomplete.getPlace();
    var streetAddress = "";
    var country = "";
    var SelectedCountry = isUserLoggedIn == 0 ? $("#ShipCountry").val() : $("#Address_Country").val();
    var SelectedState = isUserLoggedIn == 0 ? $("#ShipStateSelect").val() : $("#Address_StateSelect").val();
    var SelectedZip = isUserLoggedIn == 0 ? $("#ShipZip").val() : $("#Address_Zip").val();
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        if (addressType == "administrative_area_level_1") {
          jQuery("#" + componentFormMapping[addressType])
            .val(val)
            .trigger("change");
        } else if (addressType == "street_number" || addressType == "route") {
          streetAddress = streetAddress + val + " ";
        } else {
          jQuery("#" + componentFormMapping[addressType]).val(val);
        }
      }
    }
    if (
      SelectedCountry == "" ||
      SelectedCountry == null
    ) {
      $("select#Address_Country").find("option").eq(0).prop("selected", true);
      $("input#Address_City").val("");
      GetStatefromZipcode(SelectedCountry, SelectedZip);
      if (isUserLoggedIn == 0) {
        $("#ShipZip,#Address_Zip").blur();
      }
      checkGoogleAddress = false;
      if (streetAddress) {
        jQuery("#" + id).val("");
      }
    } else if (
      (SelectedCountry == "CA" ||
        SelectedCountry == "US") &&
      (SelectedZip != "" ||
        SelectedZip != null)
    ) {
      if (streetAddress) {
        jQuery("#" + id).val(streetAddress);
        validateForm("cada_form");
        istrue = true;
        checkGoogleAddress = true;
        $("input#Address_Zip").blur();
        $("input#Address_City").blur();
        GetStatefromZipcode(SelectedCountry, SelectedZip);
       
          $("#ShipZip,#Address_Zip").blur();
        
        validateForm("cada_form");
      } else {
        GetStatefromZipcode(SelectedCountry, SelectedZip);
        if (isUserLoggedIn == 0) {
          $("#ShipZip,#Address_Zip").blur();
        }
        validateForm("cada_form");
        $("input#Address_Zip").blur();
        $("input#Address_City").blur();
        checkGoogleAddress = true;
      }
    }
  }

  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        googleautocomplete.setBounds(circle.getBounds());
      });
    }
  }

  google.maps.event.addListener(
    googleautocomplete,
    "place_changed",
    fillInAddress
  );
}

$(".addFav.loginClick").click(function () {
  var addtoWish = $(this).attr("data-code");
  var url = document.location.href + "?addtoWish=" + addtoWish;
  window.history.pushState("addtoWish", "Title", url);
  localStorage.setItem("url", url);
});

/* ajax call for adding address */
if (getPageCode == 'OPCO' || getPageCode == 'opco' || getPageCode == 'CABK' || getPageCode == 'cabk') {
  jQuery("body").on("click", ".add-newaddress", function (e) {
    e.preventDefault();
    var sel_country = $("#Address_Country").val();
    var sel_zipcode = $("#Address_Zip").val();
    if (validateAddressForm('cada_form') == true) {
      $(".show-error").removeClass("error-message");
      let dataPost = jQuery("#cada_form").serialize();
      jQuery.ajax({
        url: "/Merchant5/merchant.mvc?Screen=CABK",
        type: "POST",
        data: dataPost,
        showLoader: true,
        cache: false,
        beforeSend: function () {
          $(".loaderContainer").show();
        },
        success: function (server_response) {
          var classes = $(server_response).find(".error-message").text();
          if (classes) {
            handleActions(
              "Please fill all the reqired fields",
              "error-message",
              false
            );
          } else {
            $(".add-newaddress").attr("disabled", true);
            $(".modal").modal("hide");
            /*location.reload();*/
            var siteurl = location.origin;
            location.href = siteurl + "/Merchant5/merchant.mvc?Screen=" + getPageCode + "&Store_Code=G";
          }
        },
      });
    }
  });
}
/* ajax call end */


/* address popup form submit*/
$("body").on("submit", "#addnewAddressForm", (e) => {
  e.preventDefault();
  if (validateAddressForm('addnewAddressForm') == true) {
    if ($("#ShipStateSelect").val()) {
      if (
        $("#useForShipping").is(":checked") &&
        $("#useForShipping").is(":disabled") == false
      ) {
        $("#addnewAddressForm *")
          .filter(":input")
          .each(function () {
            let _this = this;
            $("#ocst_form *")
              .filter(":input")
              .each(function () {
                if (_this.name === this.name) {
                  $(`#${this.id}`).val($(`#${_this.id}`).val());
                }
              });
            $(".billing-addresserror").hide();
            $(".addresserror").hide();
          });
        $("#shipFirstNameL").text(
          `${$("#ShipFirstName").val()},${$("#ShipLastName").val()}`
        );
        $("#ShipAddress1L").text($("#ShipAddress1").val());
        $("#ShipZipL").text(
          `${$("#ShipCity").val()},${$("#ShipStateSelect").val()}, ${$(
            "#ShipZip"
          ).val()}`
        );
        $(".sfname").removeClass("hideDisplay");
        $("#ShipAddress1L").show();
        $("#ShipZipL").show();
        $(".useaddressContainer").removeClass("displayNone");
        $("#addAddressModal").modal("hide");
      } else if (
        $("#useForBilling").is(":checked") &&
        $("#ShipZipL").html() != "\n"
      ) {
        $(".addresserror").show();
        $(".checkoutaddress").hide();
        $("#seletedHeaderContent").show();
        $("#addAddressModal").modal("hide");
      } else {
        $(".checkoutaddress").show();
        $(".show-error")
          .addClass("error-message")
          .html("Please Select Shipping to Proceed")
          .show();
        $(".error-message").html("Please Select Shipping to Proceed");
        $("#addAddressModal").modal("show");
        $(".addresserror").hide();
      }

      if (
        $("#useForBilling").is(":checked") &&
        $("#useForBilling").is(":disabled") == false
      ) {
        var billingForm = {};
        $.each($("#addnewAddressForm").serializeArray(), function (_, kv) {
          billingForm[`Bill${kv.name.slice(4)}`] = kv.value;
        });
        for (propery in billingForm) {
          $("#ocst_form *")
            .filter(":input")
            .each(function () {
              if (propery === this.name) {
                $(`#${this.id}`).val(billingForm[propery]);
              }
            });
        }
        $("#BillFirstNameL").text(
          `${$("#hiddenBillFirstName").val()}, ${$("#hiddenBillLastName").val()}`
        );
        $("#BillAddress1L").text(
          `${$("#hiddenBillAddress1").val()},${$("#hiddenBillAddress2").val()}`
        );

        $(".bfname").show();
        $("#BillAddress1L").show();
      }
      if (jQuery("#ShipCompany").val() !== "") {
        jQuery("#ShipResidential").prop("checked", false);
      } else { }

      $("#useAddress").hide();
      $(".addnewAddress").modal("hide");
      setTimeout(function () {
        $("#useAddress").hide();
        if ($("#useForShipping").is(":checked") == true) {
          getShippingMethods();
          GusetSession();
          CheckISGuestUuserHasAddress();
          $("#addnewAddresss").text("Change");
          $("#addnewAddress").text("Change");
          $(".checkoutaddress").hide();
          $("#seletedHeaderContent").show();
          $("#fedexMethod").hide();
          $("#selectedDeliveryContent").html("");
        }
      }, 100);

      DeliveryState = 0;
      sessionStorage.setItem("guestaddressDetails", "stored");
    }
  }
});
/*  end address popup form submit*/

$(document).ready(function () {
  // To validate the Zip code 
  ZipcodeVadation();
  if (isUserLoggedIn == 0) {
    GoogleAddressVerification(isUserLoggedIn == 0 ? "ShipAddress1" : "Address_Address1");
  }
});