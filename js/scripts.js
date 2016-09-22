$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var career = $("input:radio[name=career]:checked").val();
    var relationship = $("input:radio[name=relationship]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var vacation = $("input:radio[name=vacation]:checked").val();
    var result;

    if (career) {
      if ("career" === "teacher") {
        if("relationship" === "married") {
          if ("drink" === "wine") {
            if ("vacation" === "beach") {
              return "Lilly";
    } else if ("career" === "lawyer") {
        if ("relationship" === "married") {
          if ("drink" === "beer") {
            if ("vacation" === "fishing") {
              return "Marshall";

        $("#output").text(result);
    }
  }
}
