document.addEventListener('DOMContentLoaded', function() {
    const animalImages = [
        /*Duck*/'https://img.freepik.com/premium-vector/cute-duck-cartoon-vector-illustration_921448-1453.jpg',
        /*Snoopy*/'https://www.thesun.co.uk/wp-content/uploads/2023/04/2015-peanuts-worldwide-llc-schulz-200742568.jpg',
        /*Cat*/ 'https://www.shutterstock.com/image-vector/cute-cat-sitting-cartoon-vector-260nw-2135314679.jpg',
        /*Bunny*/ 'https://img.freepik.com/free-vector/cute-rabbit-bite-carrot-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-7366.jpg',
        /*Cocodrile*/ 'https://img.freepik.com/free-vector/cute-crocodile-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6015.jpg',
        /*Fish*/ 'https://img.freepik.com/premium-vector/fish-cartoon-mascot-vector-design-flat-cute-smile-expression-ocean-animals-ocean-fish-undersea-underwater_471870-214.jpg',
        /*Pig*/ 'https://i.pinimg.com/originals/c6/cb/69/c6cb69589701c10e311dfa12094553a0.png',
        /*Tiger*/ 'https://static.vecteezy.com/system/resources/previews/024/266/656/non_2x/cute-tiger-sitting-cartoon-icon-illustration-animal-nature-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg',
        /*Elephant*/ 'https://static.vecteezy.com/system/resources/previews/023/137/989/original/cute-kawaii-elephant-chibi-mascot-cartoon-style-vector.jpg',
        /*Lion*/ 'https://img.freepik.com/premium-vector/cute-lion-standing-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-7322.jpg',
        /*Penguin*/ 'https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg',
        /*Dolphin*/ 'https://img.freepik.com/premium-vector/cute-dolphin-swimming-smiling_279155-69.jpg?size=626&ext=jpg',
        /*Bear*/ 'https://www.shutterstock.com/image-vector/cartoon-bear-blue-background-600nw-2298762965.jpg',
        /*Fox*/ 'https://img.freepik.com/premium-vector/cute-fox-sitting-cartoon-vector-icon-illustration_480044-224.jpg?w=360',
        /*Snake*/ 'https://yt3.googleusercontent.com/6S3ggiwDPoLWW7h1z2bbmoOQr-aWYPAs11OM892L4D3-vb0-HCsnyMUXs-pIHsCoIK_M6xZG=s900-c-k-c0x00ffffff-no-rj',
        /*Owl*/ 'https://img.freepik.com/premium-photo/adorable-owl-character_398492-14698.jpg'
        // /*Anymore*/ '',
    ];

    const randomButton = document.getElementById('randomButton');
    const randomImg = document.getElementById('randomImg');

    randomButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * animalImages.length);
        const randomImageUrl = animalImages[randomIndex];
        randomImg.src = randomImageUrl;
        randomImg.style.display = 'block'; // Show the image
    });
});

