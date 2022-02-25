function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vtIPymDRr/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
            (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("
            + random_number_r + ","
            + random_number_g + ","
            + random_number_r + ")"

        img = document.getElementById('MainImg')

        if (results[0].label == "Barking") {
            img.src = 'https://th.bing.com/th/id/OIP.unQjnMFw9jtO8nK4unAcQgHaE7?pid=ImgDet&rs=1';
        } else if (results[0].label == "Clucking") {
            img.src = 'https://th.bing.com/th/id/OIP.P5tM2wGITQyTmSg11b7P9gHaJ8?pid=ImgDet&rs=1';

        } else if (results[0].label == "Meowing") {
            img.src = 'https://www.nj.com/resizer/mg42jsVYwvbHKUUFQzpw6gyKmBg=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/somerset_impact/photo/sm0212petjpg-7a377c1c93f64d37.jpg'
        } else if (results[0].label == "Mooing") {
            img.src = 'https://th.bing.com/th/id/OIP.sDibMqjg6Qk8V9NMTN_24AHaE9?pid=ImgDet&rs=1'
        }
        else {
            img.src = 'https://s3-whjr-curriculum-uploads.whjr.online/dd5ed82b-b105-4b93-806f-1f9e718b56ec.png';

        }
    }
}