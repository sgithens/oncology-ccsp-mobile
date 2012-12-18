var muzima = muzima || {};
muzima.via = muzima.via || {};

var mtrh = mtrh || {}


/**
 * This is a stub implementation, that should eventually be
 * implemented by our cordova bindings.
 *
 * @param formId The Unique ID of the form in our system.
 * @param data A Javascript Object which should follow JSON
 * conventions containing the form data to be submitted.
 */
muzima.submitForm = function(formId, data) {
    console.log("Muzima Submission FormID: " + formId);
    console.log(data);
};

/** 
  * Return Payload to submit to muzima
  */
mtrh.assembleVIA = function() {
    var togo = {}
    togo.patientId = 984320123;
    togo['7484'] = $("input[name=7484]:checked").val();
    return togo;
};

$(document).ready(function() {
    $("#submit-button").click(function(e) {
        var togo = mtrh.assembleVIA();
        muzima.submitForm("mtrh.via.mobile",togo);
    });
});


