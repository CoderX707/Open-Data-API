
function paginate(array, show_on_per_page = 10, page_number = 1) {
    const newArray = array.slice((page_number - 1) * show_on_per_page, page_number * show_on_per_page);
    return { data: newArray, per_page: show_on_per_page, page_number: page_number }
}

module.exports = { paginate };