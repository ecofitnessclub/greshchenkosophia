document.addEventListener('DOMContentLoaded', function() {
    f111();
});

function f111(){
    console.log("work");
    document.querySelector('.one').classList.add('active');
    document.querySelector('.two').classList.remove('active');
    document.querySelector('.three').classList.remove('active');

    let text = document.querySelector('.right h2');

    text.innerHTML='Надіслати повідомлення';

    document.querySelector('.curl').classList.add('actor');

    let code = document.querySelector('.form1');

    document.querySelector('.python').classList.remove('actor');

    if (document.querySelector('.curl').classList.contains('actor')){

      code.innerHTML =   "<code>curl \ </code>" + '<br>' + "<code>-d '' \ </code>" + '<br>' + "<code>-H 'accept: application/json' \ </code>" + '<br>' + "<code>-H 'Authorization: Bearer &lt;Your token&gt;' \</code>" + '<br>' + "<code>-X 'POST' \</code>" + '<br>' + "<code>'https://userbot-api.tech/api/v1/telegram/send_message?chat_id=1234567890&amp;message=Hello%20World%21'</code>";
    }

}

function f11(){
    if(document.querySelector('.one').classList.contains('active')){

    console.log('s');

      document.querySelector('.curl').classList.add('actor');

      document.querySelector('.python').classList.remove('actor');

      let code = document.querySelector('.form1');

    if (document.querySelector('.curl').classList.contains('actor')){

      code.innerHTML =    "<code>curl \ </code>" + '<br>' + "<code>-d '' \ </code>" + '<br>' + "<code>-H 'accept: application/json' \ </code>" + '<br>' + "<code>-H 'Authorization: Bearer &lt;Your token&gt;' \</code>" + '<br>' + "<code>-X 'POST' \</code>" + '<br>' + "<code>'https://userbot-api.tech/api/v1/telegram/send_message?chat_id=1234567890&amp;message=Hello%20World%21'</code>";
    }
    }




      if(document.querySelector('.two').classList.contains('active')){
    console.log('s2');

      document.querySelector('.curl').classList.add('actor');

      document.querySelector('.python').classList.remove('actor');

      let code = document.querySelector('.form');

    if (document.querySelector('.curl').classList.contains('actor'))
    {
      code.innerHTML =   "<code>curl </code>" + '<br>' + "<code>-d '' \ </code>" + '<br>' + "<code>-H 'accept: application/json' \</code>" + '<br>' + "<code>-H 'Authorization: Bearer <Your token>' </code>" + '<br>' + "<code> \X 'POST' \</code>" + '<br>' + "<code>https://userbot-api.tech/api/v1/telegram/send_photo?</code>" + '<br>' + "<code>chat_id=1234567890&photo_url=https%3A%2F%2Fvia.placeholder</code>" + '<br>' + "<code>.com%2</code>" + '<br>' + "<code>F300%3Ftext%3DTest' \"</code>";
    }
    }


     if(document.querySelector('.three').classList.contains('active')){
    console.log('s3');

      document.querySelector('.curl').classList.add('actor');

      document.querySelector('.python').classList.remove('actor');

      let code = document.querySelector('.form');

    if (document.querySelector('.curl').classList.contains('actor'))
    {
      code.innerHTML =   "<code>curl \</code>" + '<br>' + "<code>-d '' \</code>" + '<br>' + "<code>-H 'accept: application/json' \</code>" + '<br>' + "<code>-H 'Authorization: Bearer <Your token>' \</code>" + '<br>' + "<code>-X 'GET' \</code>" + '<br>' + "<code>'https://userbot-api.tech/api/v1/telegram/search_user?phone=79000000000' \</code>";  
    }
    }
}

function f12(){
     if(document.querySelector('.one').classList.contains('active')){
    console.log(',')
      document.querySelector('.python').classList.add('actor');
      document.querySelector('.curl').classList.remove('actor');
      let code = document.querySelector('.form');
    if (document.querySelector('.python').classList.contains('actor')){
      code.innerHTML =  '<code>import requests </code>' + '<br>' + '<code>r = requests.post("https://userbot-api.tech/api/v1/telegram/send_message", </code>' + '<br>' + '<code> params = { </code>' + '<br>' + '<code>"chat_id": "1234567890", </code>' + '<br>' + '<code>"message": "Hello World!" </code>' + '<br>' + '<code>}, headers = { </code>' + '<br>' + '<code>"Authorization": "Bearer &lt;Your token&gt;" </code>' + '<br>' + '<code>}) </code>' + '<br>' + '<code>print(r.status_code, r.json())</code>';
    }
    }
    
    
    
    if(document.querySelector('.two').classList.contains('active')){
    console.log('x')
      document.querySelector('.python').classList.add('actor');
      document.querySelector('.curl').classList.remove('actor');
      let code = document.querySelector('.form');
    if (document.querySelector('.python').classList.contains('actor')){
      code.innerHTML =  '<code>import requests </code>' + '<br>' + '<code> r = requests.post("https://userbot-api.tech/api/v1/telegram/send_photo", params = { </code>' + '<br>' + '<code>"chat_id": "1234567890", </code>' + '<br>' + '<code>"photo_url": "https://via.placeholder.com/300?text=Test" </code>' + '<br>' + '<code> "caption": "Caption text" </code>' + '<br>' + '<code>}, headers = { </code>' + '<br>' + '<code>"Authorization": "Bearer <Your token>" </code>' + '<br>' + '<code>}) </code>' + '<br>' + '<code>print(r.status_code, r.json())</code>';;
    }
    }


     if(document.querySelector('.three').classList.contains('active')){
    console.log('x')
      document.querySelector('.python').classList.add('actor');
      document.querySelector('.curl').classList.remove('actor');
      let code = document.querySelector('.form');
    if (document.querySelector('.python').classList.contains('actor')){
      code.innerHTML =  '<code>import requests</code>' + '<br>' + '<code> r = requests.get("https:/userbot-api.tech/api/v1/telegram/search_user", params</code>' + '<br>' + '<code> = { </code>' + '<br>' + '<code>"phone":"79000000000",</code>' + '<br>' + '<code>}, headers = {</code>' + '<br>' + '<code>"Authorization": "Bearer <Your token>"</code>' + '<br>' + '<code>})print</code>' + '<br>' + '<code>(r.status_code, r.json())</code>';
    }
    }
}

function f211(){
     console.log("work");

    document.querySelector('.two').classList.add('active');

    document.querySelector('.one').classList.remove('active');

    document.querySelector('.three').classList.remove('active');

    let text = document.querySelector('.right h2');

    text.innerHTML='Відправити фото';

    document.querySelector('.curl').classList.add('actor');

    let code = document.querySelector('.form');

    document.querySelector('.python').classList.remove('actor');

    if (document.querySelector('.curl').classList.contains('actor')){

      code.innerHTML =   "<code>curl </code>" + '<br>' + "<code>-d '' \ </code>" + '<br>' + "<code>-H 'accept: application/json' \</code>" + '<br>' + "<code>-H 'Authorization: Bearer <Your token>' </code>" + '<br>' + "<code> \X 'POST' \</code>" + '<br>' + "<code>https://userbot-api.tech/api/v1/telegram/send_photo?</code>" + '<br>' + "<code>chat_id=1234567890&photo_url=https%3A%2F%2Fvia.placeholder</code>" + '<br>' + "<code>.com%2</code>" + '<br>' + "<code>F300%3Ftext%3DTest' \"</code>";
}



}


function f311(){
     console.log("work3");

    document.querySelector('.three').classList.add('active');
     

    document.querySelector('.one').classList.remove('active');

    document.querySelector('.two').classList.remove('active');

    let text = document.querySelector('.right h2');

    text.innerHTML='Знайдіть користувача за номером телефону';

    document.querySelector('.curl').classList.add('actor');

    let code = document.querySelector('.form');

    document.querySelector('.python').classList.remove('actor');

    if (document.querySelector('.curl').classList.contains('actor')){

      code.innerHTML =   "<code>curl \</code>" + '<br>' + "<code>-d '' \</code>" + '<br>' + "<code>-H 'accept: application/json' \</code>" + '<br>' + "<code>-H 'Authorization: Bearer <Your token>' \</code>" + '<br>' + "<code>-X 'GET' \</code>" + '<br>' + "<code>'https://userbot-api.tech/api/v1/telegram/search_user?phone=79000000000' \</code>";
}



}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})