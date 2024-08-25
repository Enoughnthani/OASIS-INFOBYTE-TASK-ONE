function convert_temp() {
    let user_input = document.getElementById("input_temp").value;
    let isValid = validateInput(user_input);

    if (isValid) {
        user_input = parseFloat(user_input);
        let temp_unit = "" + document.getElementById("temp_type").value;
        let converted_temp = temp_unit.startsWith("F") ? (user_input - 32) * 5 / 9 : (user_input * 9 / 5) + 32;

        document.getElementById("results").value=temp_unit.startsWith("F")?converted_temp.toFixed(2)+" °F":converted_temp.toFixed(2)+" °C";
    } else {
        pop_up = document.getElementsByClassName("pop_up")[0];
        pop_up.style="display:block";

        setTimeout(() => {
            pop_up.style="display:none";
        }, 2000);
    }

}

function validateInput(user_input) {
    return !isNaN(user_input) && isFinite(user_input);
}