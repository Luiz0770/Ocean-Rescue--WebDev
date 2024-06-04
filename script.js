window.addEventListener('scroll', () => {
    let value =window.scrollY;

    document.getElementById('parallax-text').style.marginTop = value * 2.25 + 'px'
    document.getElementById('fish-top').style.marginTop = value * -1 + 'px'
    document.getElementById('fish-right').style.marginLeft = value * 1.5 + 'px'
    document.getElementById('fish-left').style.marginLeft = value * -1 + 'px'
    document.getElementById('parallax2').style.marginTop = value * -0.15 + 'px'
    document.getElementById('parallax3').style.marginTop = value * -0.15 + 'px'
    document.getElementById('parallax4').style.marginTop = value * -0.10 + 'px'
})