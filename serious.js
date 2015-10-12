var ingredients = document.getElementsByClassName("ingredient");

for(var i = 0; i < ingredients.length; i++)
{
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "ingredient" + i;

    var label = document.createElement('label');
    label.setAttribute("for", "ingredient" + i);
    label.innerHTML = ingredients.item(i).innerHTML;

    ingredients.item(i).innerHTML = "";

    ingredients.item(i).appendChild(checkbox);
    ingredients.item(i).appendChild(label);
}