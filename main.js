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

function onFormSubmit(event) {
    event.preventDefault() //biar setelah submit gak ke scroll ke atas
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email is required")
     }else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("Message is required")
    } else {
        alert("Form Submitted")
        //untuk mengosongkan form setelah di submit
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}