$(document).ready(function () {
    var cropmeInstance;

    function initializeCropme(imageSrc) {
        $('#image-container').html('<img id="image-preview" src="' + imageSrc + '" alt="Image to crop">');
        cropmeInstance = $('#image-preview').cropme({
            container: {
                width: '100%',
                height: 400
            },
            viewport: {
                width: 300,
                height: 200,
                type: 'square' // or 'circle'
            },
            zoom: {
                max: 3
            }
        });
    }

    $('#inputImage').on('change', function (event) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (cropmeInstance) {
                cropmeInstance.cropme('destroy');
            }
            initializeCropme(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    $('#cropButton').on('click', function () {
        if (cropmeInstance) {
            cropmeInstance.cropme('crop', {
                type: 'base64'
            }).then(function (output) {
                console.log(output); // The cropped image in base64 format
                // You can display the cropped image or send it to the server
                $('#image-container').html('<img src="' + output + '" alt="Cropped Image">');
                cropmeInstance = null; // Reset the cropmeInstance
            });
        } else {
            alert('Please upload an image first.');
        }
    });

    $('#resetButton').on('click', function () {
        if (cropmeInstance) {
            cropmeInstance.cropme('destroy');
        }
        initializeCropme('./images/600x400.png');
        $('#inputImage').val('');
    });

    // Initialize with default image
    initializeCropme('./images/600x400.png');
});
