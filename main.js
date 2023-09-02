function toggleDetail(event) {
    // console.log(event) //-> onclick di button
    const target = $(event.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    }else {
        $(target).html("Less Info").addClass("active")
    }

    // console.log($(target).parents(".about-exp-item")) // -> cari parent
    const item = $(target).parents(".about-exp-item")

    // console.log($(item).children(".about-exp-item-detail")) //cari child berupa p yang none
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}