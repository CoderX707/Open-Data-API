
function paginate(array, show_on_per_page = 10, page_number = 1) {
    const newArray = array.slice((page_number - 1) * show_on_per_page, page_number * show_on_per_page);
    return { data: newArray, per_page: parseInt(show_on_per_page), page_number: parseInt(page_number), total:array.length }
}

module.exports = { paginate };