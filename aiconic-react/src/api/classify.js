export async function uploadImageAsync(file) {
    let apiUrl = 'http://localhost:5000/classify';
    console.log("FILE");
    console.log(file[0]);
    let formData = new FormData();
    formData.append('classify', file[0]);

    let options = {
        method: 'POST',
        body: formData,

    };

    let result = await fetch(apiUrl, options);
    return result.json();

}