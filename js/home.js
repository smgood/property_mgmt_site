$(document).ready(function() {

    // current property being created
    var propertyIndex;

    // sorted list of property info
    var sortedProperties;

    init ();

    function init () {
        resetList("city");
        window.addEventListener("resize", resize);
        document.getElementById("sort").addEventListener("change", function (e) {
            resetList(e.target.value)
        });
    }

    function resize () {
        var pageWidth = $('.center-page').width();
        $('.header').height(pageWidth * 0.25);
        $('.footer').height(pageWidth * 0.1);

        $('.intro').css('font-size', pageWidth * .0203 + 'px');
        $('.form-label').css('font-size', pageWidth * .032 + 'px');
        $('.property_type').css('font-size', pageWidth * .028 + 'px');
        $('.property_address').css('font-size', pageWidth * .022 + 'px');
        $('.answer').css('font-size', pageWidth * .03 + 'px');
        $('.footer-text').css('font-size', pageWidth * .02 + 'px');

        $('.sort-container').css('font-size', pageWidth * .0203 + 'px');
        $('.sort-select').css('font-size', pageWidth * .0203 + 'px');

        var smaller = $( window ).width() < $( window ).height()
            ? $( window ).width()
            : $( window ).height();
        $('.center-page').css('padding', '0% ' + 0.04 * smaller + 'px');
    }

    function resetList(sortBy) {
        clearProperties();
        sortProperties(sortBy);
        listProperties ();
        resize ()
    }

    function clearProperties() {
        $(".erasable").remove();
    }

    function sortProperties(value) {
        var sortFunction;
        switch(value) {
              case "city":
                sortFunction = sortByCity;
                break;
              case "type":
                sortFunction = sortByType;
                break;
              default:
                sortFunction = sortByCity;
            }

        sortedProperties = propertyInfo.sort(function(a, b) {
            return sortFunction(a, b);
        });
    }

    function sortByCity(a, b) {
        return a.city.localeCompare(b.city);
    }

    function sortByType(a, b) {
        return a.type.localeCompare(b.type);
    }

    function listProperties() {
        propertyIndex = 0;
        createFirstRow()
        while (propertyIndex < sortedProperties.length) {
            createMiddleRow();
        }
    }

    function createFirstRow() {
        var paperContainer = document.createElement("div");
        paperContainer.className="graph_paper_container erasable";
        $("#last_page").before(paperContainer);

        var paper = document.createElement("img");
        paper.className="graph_paper_img";
        paper.src="./images/assets/graph_paper_top.png";
        paperContainer.append(paper);

        var propertyContainer = document.createElement("div");
        propertyContainer.className="property_container_top";
        paperContainer.append(propertyContainer);

        createRow(propertyContainer);
    }

    function createMiddleRow() {
        var paperContainer = document.createElement("div");
        paperContainer.className="graph_paper_container erasable";
        $("#last_page").before(paperContainer);

        var paper = document.createElement("img");
        paper.className="graph_paper_img";
        paper.src="./images/assets/graph_paper_middle.png";
        paperContainer.append(paper);

        var propertyContainer = document.createElement("div");
        propertyContainer.className="property_container_middle";
        paperContainer.append(propertyContainer);

        createRow(propertyContainer);
    }

    function createRow(container) {
        for (var i = 0; i < 3; i++) {
            if (propertyIndex < sortedProperties.length) {
                createProperty(container, sortedProperties[propertyIndex]);
            }
        }
    }

    function createProperty (container, info) {
        var property = document.createElement("div");
        property.className="property";
        container.append(property);

        var type = document.createElement("p");
        type.className="property_type";
        type.innerHTML=info.type;
        property.append(type);

        var img = document.createElement("div");
        img.className="property_img";
        img.style.backgroundImage= "url('./images/properties/" + info.image + "')";
        property.append(img);

        var street = document.createElement("p");
        street.className="property_address";
        street.innerHTML=info.street;
        property.append(street);

        var city = document.createElement("p");
        city.className="property_address";
        city.innerHTML=info.city;
        property.append(city);

        propertyIndex++;
    }
});
