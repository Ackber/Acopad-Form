/*Section 6*/

document.addEventListener('DOMContentLoaded', () => {
    const maxCheckboxes = 4;
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="adjectives"]');

    // Uncheck all checkboxes on page load
    checkboxes.forEach(checkbox => checkbox.checked = false);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCheckboxes = Array.from(checkboxes).filter(ch => ch.checked);
            if (checkedCheckboxes.length > maxCheckboxes) {
                alert('Vous devez sélectionner entre 3 et 4 réponses maximum ' + maxCheckboxes + ' options.');
                checkbox.checked = false;
            }
        });
    });
});