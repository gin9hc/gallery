function upDate(previewPic) {
            var images = [
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg"
            ];

            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];

            // Set innerHTML to include the src attribute
            document.getElementById("image").innerHTML = "<img src='" + randomImage + "' alt='" + previewPic.alt + "'>";
        }

        function unDo() {
            // Set innerHTML to revert to the original text
            document.getElementById("image").innerHTML = "Hover over an image below to display here.";
        }

