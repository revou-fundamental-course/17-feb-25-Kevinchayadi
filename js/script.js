/* Ini Javascript untuk auto slide*/
document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            image: "img/kuala.jpeg", // Pastikan ada gambar ini di folder assets
            text: '"The vibrant city of Kuala Lumpur has so much to offer. Shopping, dining, and culture blend perfectly!"',
            place: "Kuala Lumpur",
            name: "Ahmad Fadil",
            gender: "Male",
            age: "34 years"
        },
        {
            image: "img/beijing.jpeg", // Pastikan ada gambar ini di folder assets
            text: '"Beijing offers a fascinating mix of ancient history and modern wonders. The Great Wall is unforgettable!"',
            place: "Beijing",
            name: "Li Wei",
            gender: "Male",
            age: "38 years"
        },
        {
            image: "img/hokaido.jpeg", // Pastikan ada gambar ini di folder assets
            text: '"Hokkaido is a true paradise with beautiful snowy mountains and hot springs. A winter wonderland!"',
            place: "Hokkaido",
            name: "Yuki Sato",
            gender: "Female",
            age: "30 years"
        }
    ];
    const packageContainer = document.getElementById('package-container');

slides.forEach(slide => {
    const card = document.createElement('div');
    card.classList.add('package-card');

    card.innerHTML = `
        <img src="${slide.image}" alt="${slide.place}">
        <h2>${slide.place}</h2>
        <h4><i class="fa-solid fa-calendar-alt"></i> 7D6N - Spiritual & Luxury Tour</h4>
        <p>${slide.text}</p>
        <br />
        <p><strong>Accommodation:</strong> 5 star hotel near Grand Mosque & Burj Khalifa view</p>
        <p><strong>Highlights:</strong> Umrah, religious tour in Medina, desert safari in Dubai</p>
    `;

    packageContainer.appendChild(card);
});

    let currentIndex = 0;
    const slideImage = document.getElementById("slide-image");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialUser = document.getElementById("testimonial-user");

    function changeSlide() {
        // Efek fade out sebelum mengganti gambar & teks
        slideImage.style.opacity = 0;
        testimonialText.style.opacity = 0;
        testimonialUser.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length; // Pindah ke slide berikutnya
            slideImage.src = slides[currentIndex].image;
            testimonialText.textContent = slides[currentIndex].text;
            
            // Menambahkan tempat (place) di atas nama
            testimonialUser.innerHTML = `
                <span style="font-weight: bold; font-size: 1.2em;">${slides[currentIndex].place}</span><br>
                <i class="fa-solid fa-user"></i> ${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}
            `;
            
            // Tentukan warna berdasarkan gender
            let color = slides[currentIndex].gender === "Male" ? "blue" : "red";

            // Update warna nama dan informasi
            testimonialUser.innerHTML = `
                <span style="font-weight: bold; font-size: 1.2em; color: ${color};">${slides[currentIndex].place}</span><br>
                <i class="fa-solid fa-user" style="color: ${color};"></i> 
                <span style="color: ${color};">${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}</span>
            `;
            
            // Efek fade in setelah mengganti konten
            slideImage.style.opacity = 1;
            testimonialText.style.opacity = 1;
            testimonialUser.style.opacity = 1;
        }, 500); // Delay 500ms sebelum menampilkan yang baru
    }

    setInterval(changeSlide, 4000);
});


    // Form Validation
document.getElementById("contact-us-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destination = document.getElementById("destination").value.trim();

    // validate all field haf been filled
    if (!name || !email || !destination) {
        alert("All fields must be filled out properly!");
        return;
    }

    // the name must have minimum lenght
    if (name.length < 3) {
        alert("Name must be at least 3 characters long!");
        return;
    }

    // check email with regex to minimun had '@' and  '.'
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // pass all validation
    alert("Thanks For Submitted!");
    this.reset(); // Reset form setelah pengiriman
});
