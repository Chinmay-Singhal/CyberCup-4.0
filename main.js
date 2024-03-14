function activeFaq(x) {
    var faq_text = document.getElementById("faq-text-" + x);
    if(faq_text.classList.contains("faq-h4-active")){
        faq_text.classList.remove("faq-h4-active");
    }
    else{
        faq_text.classList.add("faq-h4-active");
    }
}