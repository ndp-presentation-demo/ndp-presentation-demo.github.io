function cbPopulateTables(data) {
    var objectives = data.filter(function(el) {
        return (el.type === "Objective") });
    var actions = data.filter(function(el) {
        return (el.type === "Action") });

    populateTable("objectives", objectives);
    populateTable("actions", actions);
}

function populateTable(id, items) {
    jQuery.each(items, function(i, item) {
        $("#" + id).append("<tr><td title=\"" + item.section + "\">" + item.description + "</td></tr>");
    });
}

$.ajax({
    url: "data/chapter_9_education.json",
    success: cbPopulateTables
});
