var clicks = 0;

$(document).ready(function () {

    $("#clickCounter").submit(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);

	function countClick(event) {
	    event.preventDefault();

        clicks++;
        $("#clickCountOutput").text(clicks);

        if (clicks === 10)
        {
            clicks = 0;
        }
	}


    function checkAge(event) {
	    event.preventDefault();

         var year = $("#birthYear").val();
         parseFloat(year);

         var age = 2020 - year;

         if (age < 18)
         {
             $("#birthYearOutput").text("Child");
         }
         else
         {
             $("#birthYearOutput").text("Adult");
         }

    }

    function calcSalesTax(event) {
	    event.preventDefault();

        var purchaseAmt = parseFloat($("#purchaseAmount").val());

        var taxRate = 0;
        var state = $("#state").val();

        if (state.toUpperCase() === "WI" || state.toUpperCase() === "WISCONSIN")
        {
            taxRate = .05;
        }
        else if (state.toUpperCase() === "IL" || state.toUpperCase() === "ILLINOIS")
        {
            taxRate = .08;
        }
        else if (state.toUpperCase() === "MN" || state.toUpperCase() === "MINNESOTA")
        {
            taxRate = .075;
        }
        else if (state.toUpperCase() === "MI" || state.toUpperCase() === "MICHIGAN")
        {
            taxRate = 0.055;
        }
        else
        {
            alert("Wisconsin, Illinois, Minnesota, and Michigan currently only accepted.");
        }

        var salesTax = purchaseAmt * taxRate;
        $("#salesTaxOutput").text(salesTax);

    }

    function recommendFood(event) {
	    event.preventDefault();

        var age = parseFloat($("#catAge").val());
        var catFood = "";

        if (age < 2)
        {
            catFood = "Kitten Chow";
        }
        else if (2 <= age && age <= 10)
        {
            catFood = "Adult Chow";
        }
        else if (age > 10)
        {
            catFood = "Senior Chow";
        }
        $("#catAgeOutput").text(catFood);
    }

    function drawCard(event) {
	    event.preventDefault();

        var faceValue = Math.floor(Math.random() * 13) + 1;
        var suit = Math.floor(Math.random() * 4) + 1;

        var description;

        if (faceValue === 1)
        {
            description = "Ace of ";
        }
        else if (2 <= faceValue && faceValue <= 10)
        {
            description = faceValue + " of ";
        }
        else if (faceValue === 11)
        {
            description = "Jack of ";
        }
        else if (faceValue === 12)
        {
            description = "Queen of ";
        }
        else if (faceValue === 13)
        {
            description = "King of ";
        }

        if (suit === 1)
        {
            description += "Clubs";
        }
        else if (suit === 2)
        {
            description += "Spades";
        }
        else if (suit === 3)
        {
            description += "Hearts";
        }
        else if (suit === 4)
        {
            description += "Diamonds";
        }
        $("#drawCardOutput").text(description);
    }

});