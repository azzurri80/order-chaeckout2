$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var purchaserNameInput = $("input#purchaserName").val();
    var shippingNameInput = $("input#shippingName").val();
    var shippingAddressInput = $("input#shippingAddress").val();
    var shippingCityInput = $("input#shippingCity").val();
    var shippingStateInput = $("input#shippingState").val();
    var shippingZipCodeInput = $("input#shippingZipCode").val();
    var purchaseTypeInput = $("#purchaseType").val();
    $(".purchaserName").text(purchaserNameInput);
    $(".shippingName").text(shippingNameInput);
    $(".shippingAddress").text(shippingAddressInput);
    $(".shippingCity").text(shippingCityInput);
    $(".shippingState").text(shippingStateInput);
    $(".shippingZipCode").text(shippingZipCodeInput);
    $(".purchaseType").text(purchaseTypeInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
